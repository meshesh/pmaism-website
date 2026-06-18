import React, { createContext, useContext, useState, useCallback } from "react";
import LeadDialog from "@/components/LeadDialog";

const LeadContext = createContext(null);

export const useLead = () => {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLead must be used within LeadProvider");
  return ctx;
};

export const LeadProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  // Single Book Demo flow; arg kept for call-site compatibility.
  const openLead = useCallback(() => setOpen(true), []);

  return (
    <LeadContext.Provider value={{ openLead }}>
      {children}
      <LeadDialog open={open} onOpenChange={setOpen} />
    </LeadContext.Provider>
  );
};
