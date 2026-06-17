import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck2, Send, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const empty = { name: "", email: "", phone: "", background: "", experience: "", preferred_time: "", message: "" };

export default function LeadDialog({ open, onOpenChange, type, setType }) {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const isDemo = type === "demo";

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in your name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { ...form, lead_type: type });
      setDone(true);
      toast.success(isDemo ? "Your demo seat is reserved!" : "Application submitted!");
      setTimeout(() => {
        onOpenChange(false);
        setTimeout(() => {
          setDone(false);
          setForm(empty);
        }, 300);
      }, 2200);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="lead-dialog"
        className="max-w-lg border-white/10 bg-ink2 p-0 overflow-hidden"
      >
        <div className="radial-glow absolute inset-x-0 top-0 h-40 pointer-events-none" />
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative px-8 py-16 text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {isDemo ? "Seat Reserved" : "Application Received"}
              </h3>
              <p className="mt-2 text-muted-foreground">
                Our team will reach out shortly with the next steps.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative p-7 sm:p-8"
            >
              <DialogHeader className="text-left">
                <div className="mb-3 flex gap-2">
                  <button
                    type="button"
                    data-testid="lead-toggle-demo"
                    onClick={() => setType("demo")}
                    className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      isDemo ? "bg-brand text-white" : "bg-white/5 text-muted-foreground hover:text-white"
                    }`}
                  >
                    <CalendarCheck2 className="h-4 w-4" /> Book Demo
                  </button>
                  <button
                    type="button"
                    data-testid="lead-toggle-apply"
                    onClick={() => setType("apply")}
                    className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      !isDemo ? "bg-brand text-white" : "bg-white/5 text-muted-foreground hover:text-white"
                    }`}
                  >
                    <Sparkles className="h-4 w-4" /> Apply Now
                  </button>
                </div>
                <DialogTitle className="text-2xl font-semibold text-white">
                  {isDemo ? "Reserve your free demo seat" : "Apply to the program"}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Limited seats per batch — typically 40 participants.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" value={form.name} onChange={handleChange} placeholder="Jane Cooper" testid="lead-name" />
                  <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" testid="lead-phone" />
                </div>
                <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" testid="lead-email" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Current background" name="background" value={form.background} onChange={handleChange} placeholder="QA / Developer / Fresher" testid="lead-background" />
                  {isDemo ? (
                    <Field label="Preferred time" name="preferred_time" value={form.preferred_time} onChange={handleChange} placeholder="Morning / Weekend" testid="lead-time" />
                  ) : (
                    <Field label="Experience" name="experience" value={form.experience} onChange={handleChange} placeholder="0–2 years" testid="lead-experience" />
                  )}
                </div>
                <div>
                  <Label className="mb-1.5 block text-sm text-muted-foreground">Anything we should know? (optional)</Label>
                  <Textarea
                    name="message"
                    data-testid="lead-message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your goals, questions, or constraints…"
                    className="min-h-[80px] resize-none border-white/10 bg-white/5 text-white placeholder:text-white/30"
                  />
                </div>

                <motion.button
                  type="submit"
                  data-testid="lead-submit"
                  disabled={loading}
                  whileTap={{ scale: 0.97 }}
                  className="btn-glow flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-light disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      {isDemo ? "Reserve My Spot" : "Submit Application"}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", testid }) {
  return (
    <div>
      <Label className="mb-1.5 block text-sm text-muted-foreground">{label}</Label>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        data-testid={testid}
        className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-brand"
      />
    </div>
  );
}
