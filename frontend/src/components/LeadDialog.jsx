import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle2,
  CalendarCheck2,
  User,
  GraduationCap,
  Briefcase,
  Calendar,
  Clock,
  Video,
  Link2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { QUALIFICATIONS, DEMO_SESSION } from "@/data/content";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const empty = {
  name: "",
  email: "",
  phone: "",
  qualification: "",
  passed_out_year: "",
  employment_status: "",
  previous_company: "",
  previous_role: "",
  years_experience: "",
};

export default function LeadDialog({ open, onOpenChange }) {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const handleChange = (e) => set(e.target.name, e.target.value);

  const reset = () => {
    setForm(empty);
    setDone(false);
  };

  const handleOpenChange = (v) => {
    onOpenChange(v);
    if (!v) setTimeout(reset, 300);
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
    if (!/^\d{10}$/.test(form.phone)) return "Mobile number must be exactly 10 digits.";
    if (!form.qualification) return "Please select your highest qualification.";
    if (!/^(19|20)\d{2}$/.test(form.passed_out_year)) return "Please enter a valid passout year (e.g. 2022).";
    if (!form.employment_status) return "Please select Fresher or Experienced.";
    if (form.employment_status === "experienced") {
      if (!form.previous_company.trim()) return "Please enter your previous company.";
      if (!form.previous_role.trim()) return "Please enter your previous role.";
      if (!String(form.years_experience).trim()) return "Please enter your years of experience.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { ...form, lead_type: "demo" });
      setDone(true);
      toast.success("Your demo seat is reserved!");
    } catch (e2) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isExp = form.employment_status === "experienced";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        data-testid="lead-dialog"
        data-lenis-prevent
        className="max-h-[92vh] max-w-xl overflow-y-auto border-white/10 bg-ink2 p-0"
      >
        <div className="radial-glow pointer-events-none absolute inset-x-0 top-0 h-40" />
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative px-7 py-10 text-center sm:px-9"
              data-testid="lead-confirmation"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Demo Seat Reserved</h3>
              <p className="mt-2 text-base text-muted-foreground">
                Our Team will contact you within <span className="font-semibold text-white">1–2 Business Days</span>.
              </p>

              <div className="mt-7 rounded-2xl border border-brand/30 bg-brand/[0.06] p-5 text-left">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-light">
                  Demo Session Details
                </p>
                <div className="mt-4 space-y-3.5">
                  <DetailRow icon={Calendar} label="Date" value={DEMO_SESSION.date} />
                  <DetailRow icon={Clock} label="Time" value={DEMO_SESSION.time} />
                  <DetailRow icon={Video} label="Mode" value={DEMO_SESSION.mode} />
                  <DetailRow
                    icon={Link2}
                    label="Zoom Link"
                    value={
                      DEMO_SESSION.zoomLink ? (
                        <a
                          href={DEMO_SESSION.zoomLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-light underline"
                        >
                          Join Session
                        </a>
                      ) : (
                        "We will message you the Zoom link before the session."
                      )
                    }
                  />
                </div>
              </div>

              <button
                onClick={() => handleOpenChange(false)}
                data-testid="lead-confirmation-close"
                className="btn-glow mt-6 w-full rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-light"
              >
                Done
              </button>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative p-6 sm:p-8">
              <DialogHeader className="text-left">
                <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-sm font-medium text-white">
                  <CalendarCheck2 className="h-4 w-4" /> Book Free Demo
                </span>
                <DialogTitle className="text-2xl font-semibold text-white">
                  Reserve your free demo seat
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Limited seats per batch — typically 40 participants.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-6 space-y-7">
                {/* Personal */}
                <FieldGroup icon={User} title="Personal Details">
                  <Field label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Jane Cooper" testid="lead-name" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" testid="lead-email" />
                    <Field
                      label="Mobile Number"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="10-digit number"
                      inputMode="numeric"
                      testid="lead-phone"
                    />
                  </div>
                </FieldGroup>

                {/* Education */}
                <FieldGroup icon={GraduationCap} title="Education Details">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label className="mb-1.5 block text-sm text-muted-foreground">Highest Qualification</Label>
                      <Select value={form.qualification} onValueChange={(v) => set("qualification", v)}>
                        <SelectTrigger data-testid="lead-qualification" className="border-white/10 bg-white/5 text-white focus:ring-brand">
                          <SelectValue placeholder="Select qualification" />
                        </SelectTrigger>
                        <SelectContent className="border-white/10 bg-ink2 text-white">
                          {QUALIFICATIONS.map((q) => (
                            <SelectItem key={q} value={q} className="focus:bg-brand/20 focus:text-white">{q}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Field
                      label="Passed Out Year"
                      name="passed_out_year"
                      value={form.passed_out_year}
                      onChange={(e) => set("passed_out_year", e.target.value.replace(/\D/g, "").slice(0, 4))}
                      placeholder="e.g. 2022"
                      inputMode="numeric"
                      testid="lead-passout-year"
                    />
                  </div>
                </FieldGroup>

                {/* Professional */}
                <FieldGroup icon={Briefcase} title="Professional Details">
                  <div>
                    <Label className="mb-2 block text-sm text-muted-foreground">Are you a Fresher or Experienced?</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { v: "fresher", l: "Fresher" },
                        { v: "experienced", l: "Experienced" },
                      ].map((o) => (
                        <button
                          key={o.v}
                          type="button"
                          data-testid={`lead-status-${o.v}`}
                          onClick={() => set("employment_status", o.v)}
                          className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                            form.employment_status === o.v
                              ? "border-brand bg-brand/15 text-white"
                              : "border-white/10 bg-white/5 text-muted-foreground hover:text-white"
                          }`}
                        >
                          {o.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExp && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <div className="grid gap-4 sm:grid-cols-2">
                          <Field label="Previous Company" name="previous_company" value={form.previous_company} onChange={handleChange} placeholder="Acme Inc." testid="lead-prev-company" />
                          <Field label="Previous Role" name="previous_role" value={form.previous_role} onChange={handleChange} placeholder="QA Engineer" testid="lead-prev-role" />
                        </div>
                        <Field
                          label="Years of Experience"
                          name="years_experience"
                          value={form.years_experience}
                          onChange={(e) => set("years_experience", e.target.value.replace(/[^\d.]/g, "").slice(0, 4))}
                          placeholder="e.g. 3"
                          inputMode="numeric"
                          testid="lead-years-exp"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </FieldGroup>

                <motion.button
                  type="submit"
                  data-testid="lead-submit"
                  disabled={loading}
                  whileTap={{ scale: 0.97 }}
                  className="btn-glow flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-light disabled:opacity-70"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (<>Reserve My Spot <Send className="h-4 w-4" /></>)}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

function FieldGroup({ icon: Icon, title, children }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-brand-light">
        <Icon className="h-4 w-4" /> {title}
      </div>
      {children}
    </div>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", testid, inputMode }) {
  return (
    <div>
      <Label className="mb-1.5 block text-sm text-muted-foreground">{label}</Label>
      <Input
        name={name}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testid}
        className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-brand"
      />
    </div>
  );
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 flex-none text-brand-light" />
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );
}
