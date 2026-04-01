"use client";

import { useState } from "react";
import { F1, F2 } from "@/lib/constants";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface TabbedContentProps {
  tabs: Tab[];
  children: React.ReactNode[];
  defaultTab?: string;
}

export function TabbedContent({ tabs, children, defaultTab }: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="border-b border-[#dfe2e6] mb-[32px]">
        <div className="flex overflow-x-auto scrollbar-hide -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-[8px] px-[20px] py-[16px] text-[14px] lg:text-[16px] font-[600] whitespace-nowrap border-b-[3px] transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "border-[#038712] text-[#038712]"
                  : "border-transparent text-[#6e757c] hover:text-[#222529]"
              }`}
              style={F2}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {children.map((child, index) => (
          <div
            key={tabs[index]?.id}
            className={activeTab === tabs[index]?.id ? "block" : "hidden"}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

// Collapsible section for progressive disclosure
export function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#dfe2e6] rounded-[8px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-[20px] bg-[#f8f9fa] hover:bg-[#f0f1f2] transition-colors cursor-pointer"
      >
        <h3
          className="text-[18px] lg:text-[20px] leading-[28px] text-[#222529]"
          style={{ ...F1, fontWeight: 400 }}
        >
          {title}
        </h3>
        <span className="shrink-0 w-[24px] h-[24px] flex items-center justify-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 8"
            fill="none"
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M1 1.5l5 5 5-5"
              stroke="#222529"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="p-[20px] border-t border-[#dfe2e6]">
          {children}
        </div>
      )}
    </div>
  );
}
