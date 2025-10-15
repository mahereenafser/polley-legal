"use client";

import { AlertCircle, Phone } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 py-3 px-6 fixed top-10 left-0 right-0 z-[49] shadow-md">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3 text-white">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span className="font-body text-sm font-medium">
            Need Emergency IP Filing? We offer same-day service for urgent matters.
          </span>
        </div>
        <a
          href="tel:+18135557000"
          className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-body font-semibold text-sm hover:bg-red-50 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Now: (813) 555-7000
        </a>
      </div>
    </div>
  );
}
