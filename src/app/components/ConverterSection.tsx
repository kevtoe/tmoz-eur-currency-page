"use client";

import { useState } from "react";
import { F1, F2 } from "@/lib/constants";
import { Arrow, Btn } from "./ui";

export function ConverterSection() {
  const [tab, setTab] = useState<"cash" | "card">("cash");
  const [pay, setPay] = useState("2000");
  const rate = tab === "cash" ? 0.5921 : 0.5745;
  const get = (parseFloat(pay) * rate).toFixed(2);

  return (
    <div className="bg-[#ebf7ec] w-full">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-[32px] lg:px-[64px] py-[48px] lg:py-[64px]">
        <div className="flex flex-col lg:flex-row gap-[32px] items-start">
          {/* Converter Card */}
          <div className="bg-white rounded-[8px] border border-[#cfd4d9] w-full lg:w-[416px] shrink-0 p-[24px]">
            <h3
              className="text-[24px] leading-[32px] mb-[24px] text-[#222529]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Convert Currency
            </h3>
            <div className="bg-[#ebf7ec] rounded-[32px] p-[4px] flex mb-[24px]">
              {(["cash", "card"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 flex items-center justify-center gap-[8px] py-[12px] rounded-[24px] font-[600] text-[16px] text-[#222529] cursor-pointer transition-colors ${
                    tab === t ? "bg-[#9ad7a1]" : ""
                  }`}
                  style={F2}
                >
                  {t === "cash" ? "Cash" : "Card"}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-[24px]">
              <div>
                <label
                  className="font-[600] text-[16px] text-[#222529] block mb-[8px]"
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
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
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
                  className="font-[600] text-[16px] text-[#222529] block mb-[8px]"
                  style={F2}
                >
                  You pay AUD
                </label>
                <input
                  type="text"
                  value={pay}
                  onChange={(e) => setPay(e.target.value)}
                  className="w-full border border-[#8c939a] rounded-[10px] p-[12px] text-[14px] outline-none"
                  style={F2}
                />
              </div>
              <div>
                <label
                  className="font-[600] text-[16px] text-[#222529] block mb-[8px]"
                  style={F2}
                >
                  You get EUR
                </label>
                <p className="text-[14px] text-[#6e757c] mb-[8px]" style={F2}>
                  1 AUD = {rate} EUR
                </p>
                <input
                  type="text"
                  readOnly
                  value={isNaN(parseFloat(get)) ? "0.00" : get}
                  className="w-full border border-[#8c939a] rounded-[10px] p-[12px] text-[14px] outline-none bg-white"
                  style={F2}
                />
              </div>
              <Btn>
                Buy online <Arrow color="white" />
              </Btn>
            </div>
            <p className="text-[14px] text-[#4a5056] mt-[24px]" style={F2}>
              *Online rates not available in store.
            </p>
          </div>

          {/* Right: Best Place to Buy Euros */}
          <div className="flex-1 pt-0 lg:pt-[16px]">
            <h2
              className="text-[28px] lg:text-[56px] leading-[1.15] text-[#222529] mb-[12px] lg:mb-[16px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Best Place to Buy Euros in Australia
            </h2>
            <p
              className="text-[16px] leading-[24px] text-[#222529] mb-[20px]"
              style={F2}
            >
              Whether you&apos;re planning to stroll the streets of Paris,
              cruise the canals of Amsterdam, or explore the ruins of Rome,
              you&apos;ll need <strong>Euros (EUR)</strong> in your wallet.
              Travel Money Oz makes it simple — order online or visit one of 90+
              stores across Australia. With competitive rates on{" "}
              <strong>AUD to EUR conversion</strong>, your travel money goes
              further.
            </p>
            <h3
              className="text-[24px] leading-[32px] text-[#222529] mb-[8px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Live AUD to EUR Exchange Rate Today
            </h3>
            <p
              className="text-[16px] leading-[24px] text-[#222529] mb-[20px]"
              style={F2}
            >
              The <strong>AUD to EUR exchange rate</strong> shifts frequently
              with global market changes, so it&apos;s essential to check
              today&apos;s rate before exchanging your Australian Dollars. At
              Travel Money Oz, we update our{" "}
              <strong>real-time AUD to EUR rates</strong> so you always know
              exactly how much you&apos;ll get — no hidden fees, no surprises.
            </p>
            <h3
              className="text-[24px] leading-[32px] text-[#222529] mb-[8px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Where to Buy Euros Near Me
            </h3>
            <p
              className="text-[16px] leading-[24px] text-[#222529] mb-[20px]"
              style={F2}
            >
              Searching for a{" "}
              <strong className="text-[#038712]">
                money exchange near you for Euros
              </strong>
              ? Travel Money Oz has over{" "}
              <strong>
                90+ currency exchange locations across Australia
              </strong>
              , making it easy to buy <strong>Euros (EUR)</strong> in person.
              Whether you&apos;re looking for a{" "}
              <strong>Euro money changer near me</strong> or just want trusted{" "}
              <strong>currency exchange centre for Euros</strong>, we&apos;ve
              got you covered.
            </p>
            <p
              className="text-[16px] leading-[24px] text-[#222529]"
              style={F2}
            >
              With our{" "}
              <strong className="text-[#038712]">In Stock Promise</strong>,
              we&apos;ll always have Euros available in-store. On the rare
              occasion we don&apos;t? You&apos;ll receive{" "}
              <strong>$10 AUD off</strong> when you make a full deposit. Need
              cash quickly? Take advantage of our{" "}
              <strong>same-day service</strong>, with competitive rates and no
              hidden fees. So if you&apos;re preparing for Europe and wondering
              where to buy Euros near me, head to your nearest Travel Money Oz
              and travel with confidence — quick, simple, and stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
