"use client";

import { useState, useEffect } from "react";
import { F2 } from "@/lib/constants";
import { Arrow } from "./ui";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the converter section (approximately 500px)
      const shouldShow = window.scrollY > 500;
      setIsVisible(shouldShow);

      // Check if near bottom of page to avoid overlapping footer
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setIsAtBottom(pageHeight - scrollPosition < 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isAtBottom) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-[#dfe2e6] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-[16px] py-[12px]">
        <div className="flex items-center gap-[12px]">
          {/* Rate Display */}
          <div className="flex-1 min-w-0">
            <p className="text-[11px] text-[#6e757c] truncate" style={F2}>
              Today&apos;s Rate
            </p>
            <p className="text-[16px] text-[#222529] font-[600]" style={F2}>
              1 AUD = 0.5921 EUR
            </p>
          </div>
          
          {/* CTA Button */}
          <button
            className="inline-flex items-center px-[20px] py-[12px] text-[14px] gap-[8px] rounded-[24px] bg-[#038712] text-white font-[700] cursor-pointer hover:bg-[#026c0e] transition-colors shrink-0"
            style={F2}
          >
            Buy Euros <Arrow color="white" s={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
