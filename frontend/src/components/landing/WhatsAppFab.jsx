import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/data/content";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={BRAND.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-fab"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-success px-4 py-3.5 text-white shadow-lg shadow-success/30"
      aria-label="WhatsApp Enquiry"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100">
        WhatsApp Enquiry
      </span>
      <span className="absolute inset-0 -z-10 rounded-full bg-success/40 animate-ping" style={{ animationDuration: "2.5s" }} />
    </motion.a>
  );
}
