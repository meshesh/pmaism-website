from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# NOTE: Backend intentionally stripped down.
# All data/form logic has been removed — submissions are handled
# client-side (placeholder) and will be wired to Google Sheets later.
# This stub only keeps the service healthy.

app = FastAPI(title="PMAISM API (stub)")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@api_router.get("/")
async def root():
    return {"status": "ok", "message": "PMAISM API stub — no backend logic"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
