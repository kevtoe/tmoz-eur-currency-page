"use client";

import { F1, F2 } from "@/lib/constants";
import {
  priceBeatImg,
  cashInDestImg,
  dubrovnikImg,
  barcelonaImg,
  positanoImg,
  euroImg,
  deliveryImg,
  buyBackImg,
  unicefImg,
  hiddenCostsImg,
  shoppingImg,
  italyImg,
  noHiddenFeesImg,
  friendlyServiceImg,
  secureTransactionsImg,
  freeGuidesImg,
} from "@/lib/constants";
import { Arrow, Btn, TxtLink } from "./ui";
import { FAQSection } from "./FAQSection";
import { TabbedContent, CollapsibleSection } from "./TabbedContent";

// Tab icons
const BuyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const DeliveryIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="3" width="15" height="13" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const SellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const GuideIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const HelpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const tabs = [
  { id: "buy", label: "Buy Euros", icon: <BuyIcon /> },
  { id: "delivery", label: "Delivery Options", icon: <DeliveryIcon /> },
  { id: "sell", label: "Sell Back", icon: <SellIcon /> },
  { id: "guide", label: "Euro Guide", icon: <GuideIcon /> },
  { id: "help", label: "FAQs & Help", icon: <HelpIcon /> },
];

export function BodyContent() {
  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-[32px] lg:px-[64px]">
        <div className="max-w-[1000px] mx-auto py-[48px] lg:py-[64px]">
          <TabbedContent tabs={tabs} defaultTab="buy">
            {/* Tab 1: Buy Euros */}
            <div className="flex flex-col gap-[32px]">
              {/* Best Exchange Rate */}
              <section>
                <h2
                  className="text-[28px] lg:text-[32px] leading-[1.2] text-[#222529] mb-[16px]"
                  style={{ ...F1, fontWeight: 400 }}
                >
                  How to Get the Best AUD to EUR Exchange Rate
                </h2>
                <p
                  className="text-[16px] leading-[26px] text-[#4a5056]"
                  style={F2}
                >
                  The <strong className="text-[#222529]">AUD to Euro exchange rate</strong> can have a big
                  impact on your travel budget — especially if you&apos;re planning
                  a Eurotrip across multiple countries. At{" "}
                  <strong className="text-[#222529]">Travel Money Oz</strong>, we offer competitive, real-time
                  rates so you can get great value when you buy Euros in Australia.
                  Use our{" "}
                  <strong className="text-[#038712]">
                    live Euro exchange rate tool
                  </strong>{" "}
                  to monitor market movements and lock in your EUR at the best time
                  before your trip.
                </p>
              </section>

              {/* Price Beat - Compact */}
              <section className="flex gap-[20px] items-start bg-[#f8f9fa] rounded-[8px] p-[24px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={priceBeatImg}
                  alt="Price Beat Guarantee"
                  className="w-[80px] h-[48px] object-contain shrink-0 hidden md:block"
                />
                <div>
                  <h3
                    className="text-[20px] leading-[28px] text-[#222529] mb-[8px]"
                    style={{ ...F1, fontWeight: 400 }}
                  >
                    Price Beat Guarantee
                  </h3>
                  <p
                    className="text-[14px] leading-[22px] text-[#4a5056]"
                    style={F2}
                  >
                    Found a better rate for <strong className="text-[#222529]">Euros in Australia</strong>? 
                    We&apos;ll <strong className="text-[#038712]">beat it</strong>. Bring proof of the better 
                    rate when purchasing in-store.
                  </p>
                </div>
              </section>

              {/* Feature Banner - Ready to Buy */}
              <section className="bg-[#ebf7ec] rounded-[8px] flex flex-col md:flex-row overflow-hidden">
                <div className="w-full md:w-[45%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cashInDestImg}
                    alt="EUR Cash In Destination"
                    className="w-full h-full min-h-[220px] object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-[20px] p-[24px] md:p-[32px]">
                  <h2
                    className="text-[24px] lg:text-[36px] leading-[1.15] text-[#222529]"
                    style={{ ...F1, fontWeight: 400 }}
                  >
                    Ready to Buy Euros?
                  </h2>
                  <p
                    className="text-[14px] lg:text-[16px] leading-[24px] text-[#4a5056]"
                    style={F2}
                  >
                    Heading to Spain for tapas or Germany for Oktoberfest? Order online
                    and collect in-store, or buy directly from one of our 90+ branches.
                  </p>
                  <div className="flex flex-wrap gap-[12px]">
                    <Btn>
                      Order Online <Arrow color="white" />
                    </Btn>
                    <Btn secondary>Find A Store</Btn>
                  </div>
                </div>
              </section>

              {/* Rate Card - Consolidated */}
              <section className="border border-[#dfe2e6] rounded-[8px] overflow-hidden">
                <div className="bg-[#222529] px-[24px] py-[16px]">
                  <h3 className="text-[18px] text-white" style={{ ...F1, fontWeight: 400 }}>
                    Today&apos;s Exchange Rates
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-[24px] border-b md:border-b-0 md:border-r border-[#dfe2e6]">
                    <div className="flex items-center justify-between mb-[12px]">
                      <h4 className="text-[16px] text-[#6e757c]" style={F2}>Cash Rate</h4>
                      <span className="text-[10px] text-white bg-[#038712] px-[8px] py-[2px] rounded-full" style={F2}>
                        BEST VALUE
                      </span>
                    </div>
                    <p className="text-[28px] text-[#222529] mb-[16px]" style={{ ...F1, fontWeight: 400 }}>
                      1 AUD = 0.5921 EUR
                    </p>
                    <Btn small>
                      Buy Cash <Arrow color="white" s={12} />
                    </Btn>
                  </div>
                  <div className="p-[24px]">
                    <h4 className="text-[16px] text-[#6e757c] mb-[12px]" style={F2}>Card Rate</h4>
                    <p className="text-[28px] text-[#222529] mb-[16px]" style={{ ...F1, fontWeight: 400 }}>
                      1 AUD = 0.5745 EUR
                    </p>
                    <div className="flex flex-wrap gap-[8px]">
                      <Btn small>Reload Card <Arrow color="white" s={12} /></Btn>
                      <Btn secondary small>New Card</Btn>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Tab 2: Delivery Options */}
            <div className="flex flex-col gap-[32px]">
              <section>
                <h2
                  className="text-[28px] lg:text-[32px] leading-[1.2] text-[#222529] mb-[16px]"
                  style={{ ...F1, fontWeight: 400 }}
                >
                  Order Euros Online for Home Delivery
                </h2>
                <p
                  className="text-[16px] leading-[26px] text-[#4a5056]"
                  style={F2}
                >
                  Want to skip the queues and sort your travel money without leaving
                  the house?{" "}
                  <strong className="text-[#038712]">
                    Ordering Euros (EUR) online for home delivery
                  </strong>{" "}
                  is the most convenient way to get prepared before your trip.
                  Whether you&apos;re planning to splurge in Paris, shop in Milan,
                  or wander through Lisbon,{" "}
                  <strong className="text-[#222529]">Travel Money Oz</strong> lets you lock in your{" "}
                  <strong className="text-[#222529]">AUD to Euro exchange rate</strong> and have your cash
                  delivered straight to your door — safely and securely.
                </p>
              </section>

              {/* In-Store Pickup */}
              <section className="flex gap-[20px] items-start bg-[#f8f9fa] rounded-[8px] p-[24px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={deliveryImg}
                  alt="Delivery"
                  className="w-[80px] h-[80px] object-contain shrink-0 hidden md:block"
                />
                <div>
                  <h3
                    className="text-[20px] leading-[28px] text-[#222529] mb-[8px]"
                    style={{ ...F1, fontWeight: 400 }}
                  >
                    Order Euros Online for In-Store Pickup
                  </h3>
                  <p
                    className="text-[14px] leading-[22px] text-[#4a5056]"
                    style={F2}
                  >
                    Need your travel money sooner? You can also{" "}
                    <strong className="text-[#038712]">
                      order Euros online for pickup
                    </strong>{" "}
                    at one of over 90 <strong className="text-[#222529]">Travel Money Oz</strong> stores across
                    Australia. Select locations even offer{" "}
                    <strong className="text-[#222529]">same-day pickup</strong>.
                  </p>
                </div>
              </section>

              {/* 3 Exchange Method Cards */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                {[
                  {
                    img: dubrovnikImg,
                    title: "Same Day Delivery",
                    body: "Buy EUR online and have it delivered straight to your home or office.",
                    cta: "Order Same Day",
                  },
                  {
                    img: barcelonaImg,
                    title: "Click and Collect",
                    body: "Reserve your EUR online and pick it up at a convenient location near you.",
                    cta: "Reserve Now",
                  },
                  {
                    img: positanoImg,
                    title: "Travel Money Card",
                    body: "Reload your travel money card with EUR online for secure travel.",
                    cta: "Load Card",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="bg-[#f8f9fa] rounded-[8px] overflow-hidden flex flex-col"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-[160px] object-cover"
                    />
                    <div className="p-[20px] flex-1 flex flex-col">
                      <h3
                        className="text-[18px] leading-[24px] text-[#222529] mb-[8px]"
                        style={{ ...F1, fontWeight: 400 }}
                      >
                        {c.title}
                      </h3>
                      <p
                        className="text-[14px] leading-[20px] text-[#4a5056] flex-1"
                        style={F2}
                      >
                        {c.body}
                      </p>
                      <div className="mt-[16px]">
                        <TxtLink>{c.cta}</TxtLink>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>

            {/* Tab 3: Sell Back */}
            <div className="flex flex-col gap-[32px]">
              <section>
                <h2
                  className="text-[28px] lg:text-[32px] leading-[1.2] text-[#222529] mb-[16px]"
                  style={{ ...F1, fontWeight: 400 }}
                >
                  Euro to AUD – Convert Euros to Australian Dollars
                </h2>
                <p
                  className="text-[16px] leading-[26px] text-[#4a5056]"
                  style={F2}
                >
                  Got leftover Euros from your trip? Travel Money Oz makes it easy
                  to <strong className="text-[#222529]">convert Euro to AUD</strong> at great rates. Whether
                  you&apos;re exchanging a handful of notes or converting a larger
                  amount, we offer a fast, reliable way to turn your{" "}
                  <strong className="text-[#222529]">Euros to Australian Dollars</strong> — all with expert
                  service at over 90 locations nationwide.
                </p>
              </section>

              {/* Buy Back Bonus */}
              <section className="flex gap-[20px] items-start bg-[#ebf7ec] rounded-[8px] p-[24px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={buyBackImg}
                  alt="Buy Back Bonus"
                  className="w-[80px] h-[48px] object-contain shrink-0 hidden md:block"
                />
                <div>
                  <h3
                    className="text-[20px] leading-[28px] text-[#222529] mb-[8px]"
                    style={{ ...F1, fontWeight: 400 }}
                  >
                    Buy Back Bonus for Better EUR to AUD Value
                  </h3>
                  <p
                    className="text-[14px] leading-[22px] text-[#4a5056]"
                    style={F2}
                  >
                    If you originally purchased your <strong className="text-[#222529]">Euros</strong> from
                    Travel Money Oz, you may qualify for our{" "}
                    <strong className="text-[#038712]">Buy Back Bonus</strong>.
                    Just bring in your receipt when you return, and we&apos;ll offer
                    a boosted <strong className="text-[#222529]">EUR to AUD</strong> rate.
                  </p>
                </div>
              </section>

              {/* UNICEF Feature Banner */}
              <section className="bg-[#f8f9fa] rounded-[8px] flex flex-col-reverse md:flex-row overflow-hidden">
                <div className="flex-1 flex flex-col justify-center gap-[20px] p-[24px] md:p-[32px]">
                  <h2
                    className="text-[24px] lg:text-[32px] leading-[1.15] text-[#222529]"
                    style={{ ...F1, fontWeight: 400 }}
                  >
                    Small Change Big Difference
                  </h2>
                  <p
                    className="text-[14px] lg:text-[16px] leading-[24px] text-[#4a5056]"
                    style={F2}
                  >
                    Returned from your trip with leftover foreign coins? Donate them to 
                    our Small Change Big Difference program which goes to UNICEF.
                  </p>
                  <div>
                    <Btn>
                      Donate foreign coins <Arrow color="white" />
                    </Btn>
                  </div>
                </div>
                <div className="w-full md:w-[40%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={unicefImg}
                    alt="UNICEF"
                    className="w-full h-full min-h-[200px] object-cover"
                  />
                </div>
              </section>
            </div>

            {/* Tab 4: Euro Guide */}
            <div className="flex flex-col gap-[24px]">
              {/* Holiday Budget Calculator */}
              <section>
                <h2
                  className="text-[28px] lg:text-[32px] leading-[1.2] text-[#222529] mb-[16px]"
                  style={{ ...F1, fontWeight: 400 }}
                >
                  Holiday Budget Calculator
                </h2>
                <p
                  className="text-[16px] leading-[26px] text-[#4a5056] mb-[20px]"
                  style={F2}
                >
                  We know holiday budgeting can be a snooze fest, but it&apos;s
                  important! Just pop in your trip details, and our clever tools will
                  show you how much to bring.
                </p>
                <div className="border border-[#dfe2e6] rounded-[8px] p-[32px] bg-[#ebf7ec] text-center">
                  <p className="text-[14px] text-[#4a5056]" style={F2}>
                    Interactive Holiday Budget Calculator — 5 step planner
                  </p>
                </div>
              </section>

              {/* Collapsible Sections for Travel Tips and Euro Info */}
              <CollapsibleSection title="How to Save Money on Your European Holiday" defaultOpen={false}>
                <ul
                  className="list-disc ml-[20px] text-[14px] leading-[22px] text-[#4a5056] flex flex-col gap-[10px]"
                  style={F2}
                >
                  <li>Travel during off-peak seasons (November to March) for cheaper flights and hotels.</li>
                  <li>Skip tourist traps and go for street food or local favourites.</li>
                  <li>Public transport is super affordable and efficient in Europe.</li>
                  <li>Take advantage of free attractions like city parks and historic squares.</li>
                  <li>Check for free museum days to experience local culture.</li>
                  <li>Convert AUD to EUR with Travel Money Oz for the best exchange rate.</li>
                </ul>
              </CollapsibleSection>

              <CollapsibleSection title="What Countries Use the Euro?" defaultOpen={false}>
                <p className="text-[14px] leading-[22px] text-[#4a5056] mb-[12px]" style={F2}>
                  You&apos;ll need to swap AUD to Euro when travelling to any of these countries:
                </p>
                <p className="text-[14px] leading-[22px] text-[#4a5056]" style={F2}>
                  <strong className="text-[#222529]">Andorra, Austria, Belgium, Cyprus, Estonia, Finland, France,
                  Germany, Greece, Ireland, Italy, Kosovo, Latvia, Lithuania,
                  Luxembourg, Malta, Monaco, Montenegro, the Netherlands, Portugal,
                  San Marino, Slovakia, Slovenia, Spain, and Vatican City.</strong>
                </p>
              </CollapsibleSection>

              <CollapsibleSection title="Euro Notes and Coins" defaultOpen={false}>
                <div className="flex flex-col lg:flex-row gap-[24px]">
                  <div className="lg:w-[40%]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={euroImg}
                      alt="EUR Currency"
                      className="w-full rounded-[8px] aspect-square object-cover"
                    />
                  </div>
                  <div className="lg:w-[60%]">
                    <ul className="list-disc ml-[20px] text-[14px] leading-[22px] text-[#4a5056] flex flex-col gap-[10px]" style={F2}>
                      <li>Like the Australian Dollar, the Euro is divided into 100 cents.</li>
                      <li>Euro coins: 1c, 2c, 5c, 10c, 20c, 50c, &euro;1, &euro;2</li>
                      <li>Euro notes: &euro;5, &euro;10, &euro;20, &euro;50, &euro;100, &euro;200, &euro;500</li>
                      <li>Euro banknotes feature architectural styles from different periods of European history.</li>
                    </ul>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Travel Money Trivia" defaultOpen={false}>
                <ul className="list-disc ml-[20px] text-[14px] leading-[22px] text-[#4a5056] flex flex-col gap-[10px]" style={F2}>
                  <li>The Euro was introduced in 1999, with notes and coins issued in 2002. Croatia adopted it in 2023.</li>
                  <li>Euro notes are made from pure cotton fibre for durability.</li>
                  <li>Each Euro note has a distinctive colour representing a different artistic period.</li>
                  <li>The reverse side of every Euro coin features a map of Europe.</li>
                </ul>
              </CollapsibleSection>

              {/* Blog Cards */}
              <section className="mt-[16px]">
                <h3 className="text-[20px] leading-[28px] text-[#222529] mb-[16px]" style={{ ...F1, fontWeight: 400 }}>
                  Related Guides
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                  {[
                    {
                      img: hiddenCostsImg,
                      title: "Avoid Hidden Extras in Europe",
                      body: "Tips to shine light on the extras you may come across.",
                    },
                    {
                      img: shoppingImg,
                      title: "Best Shopping Spots in Europe",
                      body: "Where to find the best destinations for shopping.",
                    },
                    {
                      img: italyImg,
                      title: "How Much Money for Europe?",
                      body: "Different kinds of holidays you could have in Europe.",
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="bg-[#f8f9fa] rounded-[8px] overflow-hidden flex flex-col"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-[140px] object-cover"
                      />
                      <div className="p-[16px] flex-1 flex flex-col">
                        <h4
                          className="text-[16px] leading-[22px] text-[#222529] mb-[6px]"
                          style={{ ...F1, fontWeight: 400 }}
                        >
                          {c.title}
                        </h4>
                        <p
                          className="text-[13px] leading-[18px] text-[#4a5056] flex-1"
                          style={F2}
                        >
                          {c.body}
                        </p>
                        <div className="mt-[12px]">
                          <TxtLink>Read More</TxtLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Tab 5: FAQs & Help */}
            <div className="flex flex-col gap-[32px]">
              <FAQSection />

              {/* 4 USP Cards */}
              <section className="grid grid-cols-2 lg:grid-cols-4 gap-[16px]">
                {[
                  {
                    img: noHiddenFeesImg,
                    title: "No Hidden Fees",
                    body: "Transparent pricing ensures you get the best deal.",
                  },
                  {
                    img: friendlyServiceImg,
                    title: "Friendly Service",
                    body: "Foreign exchange by travellers, for travellers",
                  },
                  {
                    img: secureTransactionsImg,
                    title: "Secure Transactions",
                    body: "Your money is safe with our secure systems.",
                  },
                  {
                    img: freeGuidesImg,
                    title: "Free Travel Guides",
                    body: "Read our free guides to help navigate foreign exchange.",
                  },
                ].map((u) => (
                  <div
                    key={u.title}
                    className="bg-white border border-[#dfe2e6] rounded-[8px] overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={u.img}
                      alt={u.title}
                      className="w-full h-[80px] lg:h-[100px] object-cover"
                    />
                    <div className="p-[16px]">
                      <h3
                        className="text-[14px] lg:text-[16px] leading-[22px] text-[#222529] mb-[6px]"
                        style={{ ...F1, fontWeight: 400 }}
                      >
                        {u.title}
                      </h3>
                      <p
                        className="text-[12px] lg:text-[13px] leading-[18px] text-[#4a5056]"
                        style={F2}
                      >
                        {u.body}
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </TabbedContent>
        </div>
      </div>
    </div>
  );
}
