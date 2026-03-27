"use client";

import { useState } from "react";
import { F1, F2 } from "@/lib/constants";

const faqs = [
  {
    q: "How much is 1 AUD in EUR?",
    a: "The exchange rate from 1 Australian Dollar (AUD) to Euro (EUR) changes frequently (multiple times a day), based on global market conditions. For the most accurate and up-to-date rate, check the live AUD to EUR rate on the Travel Money Oz website before buying. This ensures you lock in a competitive rate at the right time for your travel plans.",
  },
  {
    q: "Where can I buy Euros in Australia?",
    a: "You can buy Euros (EUR) at any Travel Money Oz store across Australia — there are over 90 locations to choose from. Prefer to plan ahead? Order online and choose either home delivery or click-and-collect. It's a secure and convenient way to get your Euros sorted before your trip to Europe.",
  },
  {
    q: "Should I exchange AUD to EUR in Australia or in Europe?",
    a: "It's often smarter to exchange AUD to EUR in Australia before your trip. Doing so lets you lock in a better rate and avoid high airport fees or poor exchange options overseas. With Travel Money Oz, you can order Euros in advance and travel with peace of mind, knowing your currency is ready when you are.",
  },
  {
    q: "How do I convert leftover Euros back to AUD?",
    a: "If you've returned from Europe with spare cash, bring your Euros to any Travel Money Oz store to convert them back into Australian Dollars. If you originally bought your Euros from us, you might even be eligible for our Buy Back Bonus, which gives you a better rate when exchanging unused currency.",
  },
  {
    q: "What affects the AUD vs EUR exchange rate?",
    a: "The AUD to EUR exchange rate is influenced by several economic factors, including interest rate decisions by the European Central Bank and the Reserve Bank of Australia, commodity market movements, inflation rates, and geopolitical events.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section>
      <h2
        className="text-[32px] leading-[40px] text-[#222529] mb-[24px]"
        style={{ ...F1, fontWeight: 400 }}
      >
        FAQs about buying and exchanging Euros
      </h2>
      <div className="border border-[#dfe2e6] rounded-[4px]">
        {faqs.map((f, i) => (
          <div key={i} className={i > 0 ? "border-t border-[#dfe2e6]" : ""}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-[16px] md:p-[24px] cursor-pointer text-left"
            >
              <span
                className="text-[16px] md:text-[20px] leading-[28px] text-[#222529] flex-1 pr-[16px]"
                style={{ ...F1, fontWeight: 400 }}
              >
                {f.q}
              </span>
              <span className="shrink-0 w-[24px] h-[24px] flex items-center justify-center relative">
                <span className="block w-[12px] h-[2px] bg-[#222529] rounded-full" />
                {open !== i && (
                  <span className="block w-[2px] h-[12px] bg-[#222529] rounded-full absolute" />
                )}
              </span>
            </button>
            {open === i && (
              <div className="px-[16px] md:px-[24px] pb-[24px]">
                <p
                  className="text-[16px] leading-[24px] text-[#4a5056]"
                  style={F2}
                >
                  {f.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
