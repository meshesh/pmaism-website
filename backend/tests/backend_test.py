"""Backend API tests for PMAISM landing page (metrics + leads endpoints)."""
import os
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

# Load frontend .env to obtain REACT_APP_BACKEND_URL
load_dotenv(Path(__file__).parent.parent.parent / "frontend" / ".env")
BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------------- /api/metrics ----------------
class TestMetrics:
    def test_metrics_shape(self, session):
        r = session.get(f"{API}/metrics", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        # Required keys
        for k in ["students_trained", "career_transitions", "hiring_companies", "batch_size"]:
            assert k in data, f"missing key {k}"
        assert isinstance(data["students_trained"], int)
        assert isinstance(data["career_transitions"], int)
        assert isinstance(data["hiring_companies"], int)
        assert isinstance(data["batch_size"], int)
        # Expected static values per spec
        assert data["career_transitions"] == 420
        assert data["hiring_companies"] == 120
        assert data["batch_size"] == 40
        assert data["students_trained"] >= 850


# ---------------- /api/leads ----------------
class TestLeads:
    def test_create_demo_lead_and_persist(self, session):
        payload = {
            "name": "TEST_Demo_User",
            "email": "TEST_demo@example.com",
            "phone": "+1 555 111 2222",
            "lead_type": "demo",
            "background": "QA",
            "preferred_time": "Morning",
            "message": "Looking forward to demo",
        }
        r = session.post(f"{API}/leads", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["lead_type"] == "demo"
        assert "created_at" in data and data["created_at"]

        # Verify persisted via GET filter
        r2 = session.get(f"{API}/leads", params={"lead_type": "demo"}, timeout=15)
        assert r2.status_code == 200
        ids = [l["id"] for l in r2.json()]
        assert data["id"] in ids

    def test_create_apply_lead(self, session):
        payload = {
            "name": "TEST_Apply_User",
            "email": "TEST_apply@example.com",
            "phone": "+1 555 333 4444",
            "lead_type": "apply",
            "background": "Developer",
            "experience": "2 years",
        }
        r = session.post(f"{API}/leads", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["lead_type"] == "apply"
        assert data["name"] == payload["name"]

    def test_invalid_email_returns_422(self, session):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "phone": "+1 555 000 0000",
            "lead_type": "demo",
        }
        r = session.post(f"{API}/leads", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_invalid_lead_type_returns_422(self, session):
        payload = {
            "name": "TEST_BadType",
            "email": "TEST_badtype@example.com",
            "phone": "+1 555 000 0001",
            "lead_type": "unknown",
        }
        r = session.post(f"{API}/leads", json=payload, timeout=15)
        assert r.status_code == 422

    def test_get_leads_list(self, session):
        r = session.get(f"{API}/leads", timeout=15)
        assert r.status_code == 200
        leads = r.json()
        assert isinstance(leads, list)
        # No mongo _id should leak
        for l in leads:
            assert "_id" not in l
            assert "id" in l
            assert "email" in l

    def test_get_leads_filter_by_type(self, session):
        r = session.get(f"{API}/leads", params={"lead_type": "demo"}, timeout=15)
        assert r.status_code == 200
        for l in r.json():
            assert l["lead_type"] == "demo"

        r2 = session.get(f"{API}/leads", params={"lead_type": "apply"}, timeout=15)
        assert r2.status_code == 200
        for l in r2.json():
            assert l["lead_type"] == "apply"
