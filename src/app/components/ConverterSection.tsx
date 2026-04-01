"use client";

import { useState } from "react";
import { F1, F2, priceBeatImg } from "@/lib/constants";
import { Arrow, Btn } from "./ui";

export function ConverterSection() {
  const [tab, setTab] = useState<"cash" | "card">("cash");
  const [pay, setPay] = useState("2000");
  const [showMore, setShowMore] = useState(false);
  const rate = tab === "cash" ? 0.5921 : 0.5745;
  const get = (parseFloat(pay) * rate).toFixed(2);

  return (
    <div className="bg-[#ebf7ec] w-full">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-[32px] lg:px-[64px] py-[32px] lg:py-[48px]">
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-start">
          {/* Converter Card - Primary Focus */}
          <div className="bg-white rounded-[8px] border border-[#cfd4d9] w-full lg:w-[440px] shrink-0 overflow-hidden">
            {/* Prominent Rate Display */}
            <div className="bg-[#222529] p-[20px] text-center">
              <p className="text-[14px] text-white/80 mb-[4px]" style={F2}>
                Today&apos;s {tab === "cash" ? "Cash" : "Card"} Rate
              </p>
              <p
                className="text-[32px] lg:text-[36px] text-white font-[400]"
                style={F1}
              >
                1 AUD = {rate} EUR
              </p>
              <div className="flex items-center justify-center gap-[12px] mt-[12px]">
                <span className="inline-flex items-center gap-[6px] text-[12px] text-[#9ad7a1]" style={F2}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Live Rate
                </span>
                <span className="inline-flex items-center gap-[6px] text-[12px] text-white/70" style={F2}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Updated just now
                </span>
              </div>
            </div>

            <div className="p-[24px]">
              <h3
                className="text-[20px] leading-[28px] mb-[20px] text-[#222529]"
                style={{ ...F1, fontWeight: 400 }}
              >
                Convert Currency
              </h3>
              
              {/* Cash/Card Toggle */}
              <div className="bg-[#ebf7ec] rounded-[32px] p-[4px] flex mb-[20px]">
                {(["cash", "card"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 flex items-center justify-center gap-[8px] py-[10px] rounded-[24px] font-[600] text-[14px] text-[#222529] cursor-pointer transition-colors ${
                      tab === t ? "bg-[#9ad7a1]" : ""
                    }`}
                    style={F2}
                  >
                    {t === "cash" ? "Cash" : "Travel Card"}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-[16px]">
                <div>
                  <label
                    className="font-[600] text-[14px] text-[#222529] block mb-[6px]"
                    style={F2}
                  >
                    Choose Currency
                  </label>
                  <div className="border border-[#8c939a] rounded-[10px] p-[12px] flex items-center">
                    <span className="w-[24px] h-[24px] rounded-full bg-[#0052B4] flex items-center justify-center text-[8px] text-[#FFDA44] mr-[12px]">
                      EU
                    </span>
                    <span className="flex-1 text-[14px]" style={F2}>
                      EUR (Euro)
                    </span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M1 1.5l5 5 5-5"
                        stroke="#222529"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <label
                    className="font-[600] text-[14px] text-[#222529] block mb-[6px]"
                    style={F2}
                  >
                    You pay AUD
                  </label>
                  <input
                    type="text"
                    value={pay}
                    onChange={(e) => setPay(e.target.value)}
                    className="w-full border border-[#8c939a] rounded-[10px] p-[12px] text-[14px] outline-none focus:border-[#038712] transition-colors"
                    style={F2}
                  />
                </div>
                <div>
                  <label
                    className="font-[600] text-[14px] text-[#222529] block mb-[6px]"
                    style={F2}
                  >
                    You get EUR
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={isNaN(parseFloat(get)) ? "0.00" : get}
                    className="w-full border border-[#8c939a] rounded-[10px] p-[12px] text-[14px] outline-none bg-[#f8f9fa]"
                    style={F2}
                  />
                </div>
                <Btn>
                  Buy Euros Online <Arrow color="white" />
                </Btn>
              </div>
              <p className="text-[12px] text-[#6e757c] mt-[16px]" style={F2}>
                *Online rates not available in store.
              </p>
            </div>
          </div>

          {/* Right: Best Place to Buy Euros - Streamlined */}
          <div className="flex-1 pt-0 lg:pt-[0px]">
            <h2
              className="text-[28px] lg:text-[48px] leading-[1.1] text-[#222529] mb-[16px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Best Place to Buy Euros in Australia
            </h2>
            
            {/* Trust badges inline */}
            <div className="flex flex-wrap items-center gap-[16px] mb-[20px]">
              <div className="flex items-center gap-[8px]">
                <div className="flex gap-[2px]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-[20px] h-[20px] bg-[#00b67a] flex items-center justify-center"
                    >
                      <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M7 0l2.16 4.38L14 5.1l-3.5 3.41.83 4.82L7 11.07l-4.33 2.27.83-4.82L0 5.1l4.84-.72L7 0z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="text-[14px] text-[#222529]" style={F2}>
                  <strong>4.8</strong> from 6,570 reviews
                </span>
              </div>
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={priceBeatImg} alt="Price Beat" className="h-[28px] w-auto" />
                <span className="text-[14px] text-[#038712] font-[600]" style={F2}>
                  Price Beat Guarantee
                </span>
              </div>
            </div>

            <p
              className="text-[16px] leading-[26px] text-[#4a5056] mb-[20px]"
              style={F2}
            >
              Whether you&apos;re planning to stroll the streets of Paris,
              cruise the canals of Amsterdam, or explore the ruins of Rome,
              you&apos;ll need <strong className="text-[#222529]">Euros (EUR)</strong> in your wallet.
              Travel Money Oz makes it simple — order online or visit one of 90+
              stores across Australia.
            </p>

            {/* Collapsible SEO Content */}
            <details className="group" open={showMore} onToggle={(e) => setShowMore(e.currentTarget.open)}>
              <summary 
                className="text-[14px] text-[#038712] font-[600] cursor-pointer list-none flex items-center gap-[8px] mb-[16px]"
                style={F2}
              >
                <span>{showMore ? "Show less" : "Learn more about EUR exchange rates"}</span>
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 8" 
                  fill="none"
                  className={`transition-transform ${showMore ? "rotate-180" : ""}`}
                >
                  <path
                    d="M1 1.5l5 5 5-5"
                    stroke="#038712"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <div className="space-y-[16px] pt-[8px]">
                <div>
                  <h3
                    className="text-[20px] leading-[28px] text-[#222529] mb-[8px]"
                    style={{ ...F1, fontWeight: 400 }}
                  >
                    Live AUD to EUR Exchange Rate Today
                  </h3>
                  <p
                    className="text-[16px] leading-[26px] text-[#4a5056]"
                    style={F2}
                  >
                    The <strong className="text-[#222529]">AUD to EUR exchange rate</strong> shifts frequently
                    with global market changes, so it&apos;s essential to check
                    today&apos;s rate before exchanging your Australian Dollars. At
                    Travel Money Oz, we update our{" "}
                    <strong className="text-[#222529]">real-time AUD to EUR rates</strong> so you always know
                    exactly how much you&apos;ll get — no hidden fees, no surprises.
                  </p>
                </div>
                <div>
                  <h3
                    className="text-[20px] leading-[28px] text-[#222529] mb-[8px]"
                    style={{ ...F1, fontWeight: 400 }}
                  >
                    Where to Buy Euros Near Me
                  </h3>
                  <p
                    className="text-[16px] leading-[26px] text-[#4a5056]"
                    style={F2}
                  >
                    Searching for a{" "}
                    <strong className="text-[#038712]">
                      money exchange near you for Euros
                    </strong>
                    ? Travel Money Oz has over{" "}
                    <strong className="text-[#222529]">
                      90+ currency exchange locations across Australia
                    </strong>
                    , making it easy to buy <strong className="text-[#222529]">Euros (EUR)</strong> in person.
                    Whether you&apos;re looking for a{" "}
                    <strong className="text-[#222529]">Euro money changer near me</strong> or just want trusted{" "}
                    <strong className="text-[#222529]">currency exchange centre for Euros</strong>, we&apos;ve
                    got you covered.
                  </p>
                </div>
                <p
                  className="text-[16px] leading-[26px] text-[#4a5056]"
                  style={F2}
                >
                  With our{" "}
                  <strong className="text-[#038712]">In Stock Promise</strong>,
                  we&apos;ll always have Euros available in-store. On the rare
                  occasion we don&apos;t? You&apos;ll receive{" "}
                  <strong className="text-[#222529]">$10 AUD off</strong> when you make a full deposit. Need
                  cash quickly? Take advantage of our{" "}
                  <strong className="text-[#222529]">same-day service</strong>, with competitive rates and no
                  hidden fees.
                </p>
              </div>
            </details>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-[12px] mt-[24px]">
              <button
                className="inline-flex items-center px-[20px] py-[12px] text-[14px] gap-[8px] rounded-[24px] border-2 border-[#038712] text-[#038712] font-[700] cursor-pointer hover:bg-[#038712] hover:text-white transition-colors"
                style={F2}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Find a Store
              </button>
              <button
                className="inline-flex items-center px-[20px] py-[12px] text-[14px] gap-[8px] rounded-[24px] border border-[#cfd4d9] text-[#4a5056] font-[600] cursor-pointer hover:border-[#8c939a] transition-colors"
                style={F2}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M1 10h22" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Get Travel Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
