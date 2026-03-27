import { F1, F2 } from "@/lib/constants";
import { Btn } from "./ui";

export function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-[32px] lg:px-[64px] pt-[64px] pb-[48px]">
        {/* Newsletter */}
        <div className="pb-[48px] mb-[48px] border-b border-white/20">
          <h3
            className="text-[20px] leading-[28px] text-white mb-[16px]"
            style={{ ...F1, fontWeight: 400 }}
          >
            Join the Travel Money Club
          </h3>
          <p
            className="text-[16px] leading-[24px] text-white/85 mb-[24px]"
            style={F2}
          >
            Sign up to automatically go into a monthly draw to win $500.
            You&apos;ll also get exclusive travel money offers, tips &amp; tricks
            and much more!
          </p>
          <Btn>Subscribe</Btn>
        </div>
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] mb-[48px]">
          {[
            {
              h: "Find a Store",
              links: [
                "Currency Exchange Sydney",
                "Currency Exchange Melbourne",
                "Currency Exchange Brisbane",
                "Currency Exchange Perth",
                "Currency Exchange Adelaide",
              ],
            },
            {
              h: "Legal",
              links: [
                "Privacy Notice",
                "Online Orders T&Cs",
                "Website Terms of Use",
                "Currency Pass PDS",
              ],
            },
            {
              h: "Customer Service",
              links: ["Contact Us", "FAQs", "1300 426 997"],
            },
            {
              h: "Who we are",
              links: ["About Travel Money Oz", "Careers"],
            },
          ].map((col) => (
            <div key={col.h}>
              <p
                className="text-[20px] leading-[28px] text-white mb-[16px]"
                style={{ ...F1, fontWeight: 400 }}
              >
                {col.h}
              </p>
              <div className="flex flex-col gap-[14px]">
                {col.links.map((l) => (
                  <span
                    key={l}
                    className="text-[16px] leading-[24px] text-white/85 cursor-pointer hover:text-white"
                    style={F2}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Follow Us */}
        <div className="mb-[48px]">
          <p
            className="text-[14px] font-[600] text-white mb-[16px]"
            style={F2}
          >
            Follow Us
          </p>
          <div className="flex gap-[24px]">
            {["Instagram", "Facebook"].map((s) => (
              <span
                key={s}
                className="text-[16px] text-white/75 cursor-pointer hover:text-white"
                style={F2}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white/20 pt-[24px]">
          <p
            className="text-[12px] leading-[18px] text-white/85"
            style={F2}
          >
            &copy; Travel Money Oz ABN 46 121 451 723. Proudly part of the
            Flight Centre Travel Group Limited.
          </p>
          <p
            className="text-[12px] leading-[18px] text-white/85 mt-[16px]"
            style={F2}
          >
            *Holiday Budget Calculator uses data from Numbeo&apos;s Cost of
            Living Comparison Service, the world&apos;s largest database of
            user-contributed data about countries worldwide. The service is not
            designed to replace professional personal financial advice; consider
            whether the suggestions are appropriate for you.
          </p>
          <p
            className="text-[12px] leading-[18px] text-white/85 mt-[16px]"
            style={F2}
          >
            Mastercard Prepaid Management Services Australia Pty Ltd (ABN 47 145
            452 044, AFSL 386 837) arranges for the issue of the Currency Pass
            in conjunction with the issuer, EML Payment Solutions Limited
            (&apos;EML&apos;) ABN 30 131 436 532, AFSL 404131. You should
            consider the Product Disclosure Statement for the relevant product
            available at Travel Money Oz&apos;s website and the Target Market
            Determination before deciding to acquire the product. Any advice does
            not take into account your personal needs, financial circumstances or
            objectives and you should consider if it is appropriate for you.
            Mastercard and the circles design are registered trademarks of
            Mastercard International Incorporated.
          </p>
          <p
            className="text-[12px] leading-[18px] text-white/85 mt-[16px]"
            style={F2}
          >
            Credit or debit card fees may apply to online transactions, see
            online ordering terms and conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
