import { useState } from "react";
import svgPaths from "../imports/svg-mgl0b1epdy";
import imgImage4 from "figma:asset/0101346c2bcfee4048b0fdbf9a26fb38a1e555a5.png";
import imgRectangle1 from "figma:asset/5ad282cfdfd9032e697cef628afccc8493c72445.png";
import imgRectangle2 from "figma:asset/89f2eb895d843cba68d307a27ab192e110560c3c.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

const CDN = "https://edge.sitecorecloud.io/travelmoney4b32-travelmoneya8ef-prode36c-b231/media/Project/public-web";
const barcelonaImg = `${CDN}/shared/CurrencyPage/Ways-To-Exchange-Basic-Card-Imagery/Spain-Barcelona_245kb.png?h=482&iar=0&w=800&t=d16x9`;
const positanoImg = `${CDN}/shared/Travel-Money-Card/TMOZ-Currency-Pass/Currency-Pass-Basic-Cards-200kb/EUR_CurrencyPass_Italy-Positano.jpeg?h=865&iar=0&w=1438&t=d16x9`;
const euroImg = `${CDN}/shared/CurrencyPage/Repeating-Patterns/EUR-RepeatingPattern-Card_min_123kb.png?h=450&iar=0&w=800&t=d1x1`;
const dubrovnikImg = `${CDN}/shared/CurrencyPage/Ways-To-Exchange-Basic-Card-Imagery/Croatia-Dubrovnik_158kb.png?h=361&iar=0&w=600&t=d16x9`;
const shoppingImg = `${CDN}/tmoz/Manual-Migrated-Banners/France-guide-banner.jpg?h=450&iar=0&w=1920&t=d16x9`;
const italyImg = `${CDN}/tmoz/Manual-Migrated-Banners/Italy-large-1920x450.jpg?h=450&iar=0&w=1920&t=d16x9`;
const hiddenCostsImg = `${CDN}/tmoz/Manual-Migrated-Images/Ultimate-guide-to-europe.png?h=300&iar=0&w=700&t=d16x9`;
const unicefImg = `${CDN}/tmoz/UNICEF.png?h=1080&iar=0&w=1920&t=d4x3`;
const priceBeatImg = `${CDN}/tmoz/Sitemaps/TMOZ/cvp-tmg-price/TravelMoneyCVP_PriceBeatGuarantee.png?h=248&iar=0&w=414`;
const cashInDestImg = `${CDN}/shared/CurrencyPage/Feature-Banner-Images/EUR_CashInDestination_142kb.png?h=500&iar=0&w=500&t=d4x3`;
const deliveryImg = `${CDN}/tmoz/CD-Square-Transparent---Delivery_55kb.png?h=1050&iar=0&w=1050`;
const buyBackImg = `${CDN}/tmoz/Sitemaps/TMOZ/cvp-tmg-price/TravelMoneyCVP_BuyBackBonus.png?h=248&iar=0&w=414`;
const noHiddenFeesImg = `${CDN}/tmoz/Basic-Card-No-Hidden-Fees.png?h=865&iar=0&w=1438&t=d16x9`;
const friendlyServiceImg = `${CDN}/tmoz/Basic-Card-Friendly-Service.png?h=865&iar=0&w=1438&t=d16x9`;
const secureTransactionsImg = `${CDN}/tmoz/Basic-Card-Secure-Transactions.png?h=865&iar=0&w=1438&t=d16x9`;
const freeGuidesImg = `${CDN}/tmoz/Basic-Card-Free-Travel-Money-Guides.png?h=865&iar=0&w=1438&t=d16x9`;

const F1: React.CSSProperties = { fontFamily: "'PreloSlabSemiBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" };
const F2: React.CSSProperties = { fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" };

function Arrow({ color = "#222529", s = 16 }: { color?: string; s?: number }) {
  return <svg width={s} height={s} viewBox="0 0 16 16" fill="none"><g clipPath="url(#a)"><path fill={color} d="M10.707 2.293a1 1 0 0 0-1.414 1.414L12.586 7H1a1 1 0 0 0 0 2h11.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414z"/></g></svg>;
}

function Btn({ children, secondary, small, onClick }: { children: React.ReactNode; secondary?: boolean; small?: boolean; onClick?: () => void }) {
  const base = small ? "px-[16px] py-[8px] text-[14px] gap-[8px]" : "px-[24px] py-[12px] text-[16px] gap-[12px]";
  if (secondary) return <button onClick={onClick} className={`inline-flex items-center ${base} rounded-[24px] border-2 border-[#038712] text-[#038712] font-[700] cursor-pointer hover:bg-[#038712] hover:text-white transition-colors`} style={F2}>{children}</button>;
  return <button onClick={onClick} className={`inline-flex items-center ${base} rounded-[24px] bg-[#038712] text-white font-[700] cursor-pointer hover:bg-[#026c0e] transition-colors`} style={F2}>{children}</button>;
}

function TxtLink({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-[8px] text-[#038712] font-[700] text-[16px] cursor-pointer" style={F2}>{children}<Arrow color="#038712" /></span>;
}

/* ═══════ 1a. UTILITY BAR ═══════ */
function UtilityBar() {
  return (
    <div className="bg-[#222529] w-full">
      <div className="max-w-[1600px] mx-auto flex items-center justify-end gap-[24px] px-[16px] md:px-[32px] lg:px-[64px] py-[8px]">
        {[
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: "CONTACT US" },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="1.5"/><line x1="12" y1="18" x2="12" y2="18.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>, label: "1300 426 997" },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/><line x1="12" y1="17" x2="12" y2="17.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>, label: "FAQS" },
        ].map(item => (
          <span key={item.label} className="flex items-center gap-[6px] text-[12px] text-white/90 cursor-pointer hover:text-white" style={F2}>{item.icon}{item.label}</span>
        ))}
      </div>
    </div>
  );
}

/* ═══════ 1b. HEADER ═══════ */
function Header() {
  return (
    <header className="bg-black w-full">
      <UtilityBar />
      <div className="flex items-center justify-between px-[16px] md:px-[32px] lg:px-[64px] py-[12px] max-w-[1600px] mx-auto">
        <div className="h-[23px] w-[174px] relative shrink-0">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 23.1685">
            {[svgPaths.p111bc770,svgPaths.p3d9eca80,svgPaths.p1c0c1b80,svgPaths.p250e59c0,svgPaths.pb1a1300,svgPaths.p291aa300,svgPaths.p19b8b400,svgPaths.p10503180,svgPaths.p2bbd98c0,svgPaths.p27b5f180].map((d,i) => <path key={i} d={d} fill="white" />)}
          </svg>
        </div>
        <nav className="hidden lg:flex items-center gap-[4px]">
          {["Buy Currency","Travel Money Card","FX Tools & More"].map(t => (
            <span key={t} className="flex items-center gap-[4px] px-[14px] py-[10px] rounded-full text-[14px] font-[600] text-white cursor-pointer hover:bg-white/10 transition-colors" style={F2}>{t}<svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          ))}
        </nav>
        <div className="flex items-center gap-[16px]">
          {/* Search, Cart, Account icons */}
          <div className="hidden lg:flex items-center gap-[16px]">
            <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="21" r="1" fill="white"/><circle cx="20" cy="21" r="1" fill="white"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="white" strokeWidth="1.5"/></svg>
          </div>
          <div className="hidden md:flex gap-[12px]">
            <button className="inline-flex items-center px-[16px] py-[8px] text-[14px] gap-[8px] rounded-[24px] border-2 border-white text-white font-[700] cursor-pointer hover:bg-white hover:text-black transition-colors" style={F2}>Find a Store</button>
            <Btn small>Order Online</Btn>
          </div>
          <button className="lg:hidden text-white p-[8px]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="white" fillRule="evenodd" d="M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1" clipRule="evenodd"/></svg></button>
        </div>
      </div>
    </header>
  );
}

/* ═══════ 2. BREADCRUMB ═══════ */
function Breadcrumb() {
  return (
    <div className="bg-black w-full px-[16px] md:px-[32px] lg:px-[64px] py-[20px]">
      <div className="max-w-[1600px] mx-auto flex items-center gap-[8px] text-[14px]" style={F2}>
        <span className="text-white/75 cursor-pointer flex items-center gap-[4px]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Home</span><span className="text-[#cfd4d9]">/</span>
        <span className="text-white/75 cursor-pointer">Rates</span><span className="text-[#cfd4d9]">/</span>
        <span className="text-white">EUR</span>
      </div>
    </div>
  );
}

/* ═══════ 3. H1 TITLE ═══════ */
function HeroTitle() {
  return (
    <div className="bg-black w-full px-[16px] md:px-[32px] lg:px-[64px] pb-[16px]">
      <h1 className="text-white text-center" style={{ ...F1, fontSize: "clamp(36px, 8vw, 68px)", lineHeight: 1.2, fontWeight: 400 }}>Convert AUD to EUR Exchange Rate</h1>
    </div>
  );
}

/* ═══════ 4. CONVERTER + HERO TEXT (green bg) ═══════ */
function ConverterSection() {
  const [tab, setTab] = useState<"cash"|"card">("cash");
  const [pay, setPay] = useState("2000");
  const rate = tab === "cash" ? 0.5921 : 0.5745;
  const get = (parseFloat(pay) * rate).toFixed(2);

  return (
    <div className="bg-[#ebf7ec] w-full">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-[32px] lg:px-[64px] py-[48px] lg:py-[64px]">
        <div className="flex flex-col lg:flex-row gap-[32px] items-start">
          {/* Converter Card */}
          <div className="bg-white rounded-[8px] border border-[#cfd4d9] w-full lg:w-[416px] shrink-0 p-[24px]">
            <h3 className="text-[24px] leading-[32px] mb-[24px] text-[#222529]" style={{ ...F1, fontWeight: 400 }}>Convert Currency</h3>
            <div className="bg-[#ebf7ec] rounded-[32px] p-[4px] flex mb-[24px]">
              {(["cash","card"] as const).map(t => (
                <button key={t} onClick={() => setTab(t)} className={`flex-1 flex items-center justify-center gap-[8px] py-[12px] rounded-[24px] font-[600] text-[16px] text-[#222529] cursor-pointer transition-colors ${tab === t ? "bg-[#9ad7a1]" : ""}`} style={F2}>
                  {t === "cash" ? "Cash" : "Card"}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-[24px]">
              <div><label className="font-[600] text-[16px] text-[#222529] block mb-[8px]" style={F2}>Choose Currency</label><div className="border border-[#8c939a] rounded-[10px] p-[12px] flex items-center"><span className="w-[24px] h-[24px] rounded-full bg-[#0052B4] flex items-center justify-center text-[8px] text-[#FFDA44] mr-[12px]">EU</span><span className="flex-1 text-[14px]" style={F2}>EUR (Euro)</span><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5l5 5 5-5" stroke="#222529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div>
              <div><label className="font-[600] text-[16px] text-[#222529] block mb-[8px]" style={F2}>You pay AUD</label><input type="text" value={pay} onChange={e => setPay(e.target.value)} className="w-full border border-[#8c939a] rounded-[10px] p-[12px] text-[14px] outline-none" style={F2} /></div>
              <div><label className="font-[600] text-[16px] text-[#222529] block mb-[8px]" style={F2}>You get EUR</label><p className="text-[14px] text-[#6e757c] mb-[8px]" style={F2}>1 AUD = {rate} EUR</p><input type="text" readOnly value={isNaN(parseFloat(get)) ? "0.00" : get} className="w-full border border-[#8c939a] rounded-[10px] p-[12px] text-[14px] outline-none bg-white" style={F2} /></div>
              <Btn>Buy online <Arrow color="white" /></Btn>
            </div>
            <p className="text-[14px] text-[#4a5056] mt-[24px]" style={F2}>*Online rates not available in store.</p>
          </div>

          {/* Right: Best Place to Buy Euros */}
          <div className="flex-1 pt-0 lg:pt-[16px]">
            <h2 className="text-[28px] lg:text-[56px] leading-[1.15] text-[#222529] mb-[12px] lg:mb-[16px]" style={{ ...F1, fontWeight: 400 }}>Best Place to Buy Euros in Australia</h2>
            <p className="text-[16px] leading-[24px] text-[#222529] mb-[20px]" style={F2}>Whether you're planning to stroll the streets of Paris, cruise the canals of Amsterdam, or explore the ruins of Rome, you'll need <strong>Euros (EUR)</strong> in your wallet. Travel Money Oz makes it simple — order online or visit one of 90+ stores across Australia. With competitive rates on <strong>AUD to EUR conversion</strong>, your travel money goes further.</p>
            <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[8px]" style={{ ...F1, fontWeight: 400 }}>Live AUD to EUR Exchange Rate Today</h3>
            <p className="text-[16px] leading-[24px] text-[#222529] mb-[20px]" style={F2}>The <strong>AUD to EUR exchange rate</strong> shifts frequently with global market changes, so it's essential to check today's rate before exchanging your Australian Dollars. At Travel Money Oz, we update our <strong>real-time AUD to EUR rates</strong> so you always know exactly how much you'll get — no hidden fees, no surprises.</p>
            <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[8px]" style={{ ...F1, fontWeight: 400 }}>Where to Buy Euros Near Me</h3>
            <p className="text-[16px] leading-[24px] text-[#222529] mb-[20px]" style={F2}>Searching for a <strong className="text-[#038712]">money exchange near you for Euros</strong>? Travel Money Oz has over <strong>90+ currency exchange locations across Australia</strong>, making it easy to buy <strong>Euros (EUR)</strong> in person. Whether you're looking for a <strong>Euro money changer near me</strong> or just want trusted <strong>currency exchange centre for Euros</strong>, we've got you covered.</p>
            <p className="text-[16px] leading-[24px] text-[#222529]" style={F2}>With our <strong className="text-[#038712]">In Stock Promise</strong>, we'll always have Euros available in-store. On the rare occasion we don't? You'll receive <strong>$10 AUD off</strong> when you make a full deposit. Need cash quickly? Take advantage of our <strong>same-day service</strong>, with competitive rates and no hidden fees. So if you're preparing for Europe and wondering where to buy Euros near me, head to your nearest Travel Money Oz and travel with confidence — quick, simple, and stress-free.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════ 5. MAIN BODY CONTENT (narrower) ═══════ */
function BodyContent() {
  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-[32px] lg:px-[64px]">
        <div className="max-w-[960px] mx-auto py-[64px] flex flex-col gap-[40px]">

          {/* 5a. Best Exchange Rate */}
          <section>
            <h2 className="text-[32px] leading-[40px] text-[#222529] mb-[16px]" style={{ ...F1, fontWeight: 400 }}>How to Get the Best AUD to EUR Exchange Rate</h2>
            <p className="text-[16px] leading-[24px] text-[#222529]" style={F2}>The <strong>AUD to Euro exchange rate</strong> can have a big impact on your travel budget — especially if you're planning a Eurotrip across multiple countries. At <strong>Travel Money Oz</strong>, we offer competitive, real-time rates so you can get great value when you buy Euros in Australia. Use our <strong className="text-[#038712]">live Euro exchange rate tool</strong> to monitor market movements and lock in your EUR at the best time before your trip.</p>
          </section>

          {/* 5b. Price Beat Guarantee */}
          <section className="flex gap-[24px] items-start">
            <img src={priceBeatImg} alt="Price Beat Guarantee" className="w-[100px] h-[60px] object-contain shrink-0 hidden md:block" />
            <div>
              <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[8px]" style={{ ...F1, fontWeight: 400 }}>Lock In a Better Rate with Our Price Beat Guarantee</h3>
              <p className="text-[16px] leading-[24px] text-[#222529]" style={F2}>Want even more for your Aussie dollars? Thanks to our <strong className="text-[#038712]">Price Beat Guarantee</strong>, if you find a better published rate for <strong>Euros in Australia</strong>, Travel Money Oz will <strong>beat it</strong>. It's our way of making sure you're not only getting Euros, but also getting them at the best available AUD to EUR rate. Just bring proof of the better rate when purchasing in-store, and we'll handle the rest</p>
              <p className="text-[12px] text-[#6e757c] mt-[16px] italic" style={F2}>*Price Beat Guarantee applies to in-store EUR cash purchases only. Terms and conditions apply.</p>
            </div>
          </section>

          {/* 5c. Feature Banner "Ready to Buy Euros" */}
          <section className="bg-[#ebf7ec] rounded-[8px] flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-[50%]"><img src={cashInDestImg} alt="EUR Cash In Destination" className="w-full h-full min-h-[250px] object-cover" /></div>
            <div className="flex-1 flex flex-col justify-center gap-[24px] p-[24px] md:p-[40px]">
              <h2 className="text-[28px] lg:text-[56px] leading-[1.15] text-[#222529]" style={{ ...F1, fontWeight: 400 }}>Ready to Buy Euros</h2>
              <p className="text-[16px] leading-[24px] text-[#4a5056]" style={F2}>Heading to Spain for tapas or Germany for Oktoberfest, having Euro cash in hand saves stress on arrival. You can order online and collect in-store, or buy directly from one of our 90+ branches.</p>
              <div className="flex flex-wrap gap-[12px]"><Btn>Find A Store Near You <Arrow color="white" /></Btn><Btn secondary>Order Online</Btn></div>
            </div>
          </section>

          {/* 5d. Today's Rate Card */}
          <section className="bg-[#f8f9fa] rounded-[8px]">
            <div className="border border-[#dfe2e6] rounded-[8px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-[24px] md:p-[32px] border-b md:border-b-0 md:border-r border-[#dfe2e6]">
                <h4 className="text-[20px] leading-[28px] text-[#222529] mb-[8px]" style={{ ...F1, fontWeight: 400 }}>Cash rate</h4>
                <p className="text-[20px] leading-[28px] text-[#4a5056] mb-[20px]" style={F2}>1 AUD = 0.5921 EUR</p>
                <Btn small>Buy online <Arrow color="white" s={12} /></Btn>
              </div>
              <div className="p-[24px] md:p-[32px] border-b xl:border-b-0 xl:border-r border-[#dfe2e6]">
                <h4 className="text-[20px] leading-[28px] text-[#222529] mb-[8px]" style={{ ...F1, fontWeight: 400 }}>Card rate</h4>
                <p className="text-[20px] leading-[28px] text-[#4a5056] mb-[20px]" style={F2}>1 AUD = 0.5745 EUR</p>
                <div className="flex flex-wrap gap-[12px]"><Btn small>Reload card <Arrow color="white" s={12} /></Btn><Btn secondary small>Buy new card <Arrow color="#038712" s={12} /></Btn></div>
              </div>
              <div className="p-[24px] md:p-[32px] md:col-span-2 xl:col-span-1">
                <div className="grid grid-cols-2 gap-[20px]">
                  <div><h5 className="text-[16px] text-[#222529] mb-[4px]" style={{ ...F1, fontWeight: 400 }}>Code</h5><p className="text-[16px] text-[#4a5056]" style={F2}>EUR</p></div>
                  <div><h5 className="text-[16px] text-[#222529] mb-[4px]" style={{ ...F1, fontWeight: 400 }}>Symbol</h5><p className="text-[16px] text-[#4a5056]" style={F2}>&#8364;</p></div>
                  <div className="col-span-2"><h5 className="text-[16px] text-[#222529] mb-[4px]" style={{ ...F1, fontWeight: 400 }}>Coins</h5><p className="text-[16px] text-[#4a5056]" style={F2}>Cents & Euros - 1c, 2c, 5c, 10c, 20c, 50c, &#8364;1, &#8364;2</p></div>
                  <div className="col-span-2"><h5 className="text-[16px] text-[#222529] mb-[4px]" style={{ ...F1, fontWeight: 400 }}>Banknotes</h5><p className="text-[16px] text-[#4a5056]" style={F2}>Euros - &#8364;5, &#8364;10, &#8364;20, &#8364;50, &#8364;100, &#8364;200, &#8364;500</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* 5e. Order Euros Online for Home Delivery */}
          <section>
            <h2 className="text-[32px] leading-[40px] text-[#222529] mb-[16px]" style={{ ...F1, fontWeight: 400 }}>Order Euros Online for Home Delivery</h2>
            <p className="text-[16px] leading-[24px] text-[#222529]" style={F2}>Want to skip the queues and sort your travel money without leaving the house? <strong className="text-[#038712]">Ordering Euros (EUR) online for home delivery</strong> is the most convenient way to get prepared before your trip. Whether you're planning to splurge in Paris, shop in Milan, or wander through Lisbon, <strong>Travel Money Oz</strong> lets you lock in your <strong>AUD to Euro exchange rate</strong> and have your cash delivered straight to your door — safely and securely.</p>
          </section>

          {/* 5f. In-Store Pickup */}
          <section className="flex gap-[24px] items-start">
            <img src={deliveryImg} alt="Delivery" className="w-[100px] h-[100px] object-contain shrink-0 hidden md:block" />
            <div>
              <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[8px]" style={{ ...F1, fontWeight: 400 }}>Order Euros Online for In-Store Pickup</h3>
              <p className="text-[16px] leading-[24px] text-[#222529]" style={F2}>Need your travel money sooner? You can also <strong className="text-[#038712]">order Euros online for pickup</strong> at one of over 90 <strong>Travel Money Oz</strong> stores across Australia. Select locations even offer <strong>same-day pickup</strong>, perfect for last-minute plans. Lock in today's <strong>AUD to EUR exchange rate</strong>, then collect your Euros at a time that suits you — no stress, no surprises.</p>
            </div>
          </section>

          {/* 5g. 3 Exchange Method Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {[
              { img: dubrovnikImg, title: "Same Day Delivery Foreign Cash", body: "Buy EUR online and have it delivered straight to your home or office.", cta: "Order Same Day Delivery" },
              { img: barcelonaImg, title: "Click and collect Foreign Cash", body: "Reserve your EUR online and pick it up at a convenient Travel Money location near you.", cta: "Reserve Now, Collect In-Store" },
              { img: positanoImg, title: "Load a Currency Pass Travel Money Card", body: "Reload your travel money card with EUR online for a secure and convenient travel experience.", cta: "Load Your Travel Money Card" },
            ].map(c => (
              <div key={c.title} className="bg-[#f8f9fa] rounded-[8px] overflow-hidden flex flex-col">
                <img src={c.img} alt={c.title} className="w-full h-[180px] object-cover" />
                <div className="p-[24px] flex-1 flex flex-col">
                  <h3 className="text-[20px] leading-[28px] text-[#222529] mb-[12px]" style={{ ...F1, fontWeight: 400 }}>{c.title}</h3>
                  <p className="text-[14px] leading-[20px] text-[#4a5056] flex-1" style={F2}>{c.body}</p>
                  <div className="mt-[24px]"><TxtLink>{c.cta}</TxtLink></div>
                </div>
              </div>
            ))}
          </section>

          {/* 5h. Euro to AUD */}
          <section>
            <h2 className="text-[32px] leading-[40px] text-[#222529] mb-[16px]" style={{ ...F1, fontWeight: 400 }}>Euro to AUD – Convert Euros to Australian Dollars</h2>
            <p className="text-[16px] leading-[24px] text-[#222529]" style={F2}>Got leftover Euros from your trip? Travel Money Oz makes it easy to <strong>convert Euro to AUD</strong> at great rates. Whether you're exchanging a handful of notes or converting a larger amount, we offer a fast, reliable way to turn your <strong>Euros to Australian Dollars</strong> — all with expert service at over 90 locations nationwide.</p>
          </section>

          {/* 5i. Buy Back Bonus */}
          <section className="flex gap-[24px] items-start">
            <img src={buyBackImg} alt="Buy Back Bonus" className="w-[100px] h-[60px] object-contain shrink-0 hidden md:block" />
            <div>
              <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[8px]" style={{ ...F1, fontWeight: 400 }}>Buy Back Bonus for Better EUR to AUD Value</h3>
              <p className="text-[16px] leading-[24px] text-[#222529]" style={F2}>If you originally purchased your <strong>Euros</strong> from Travel Money Oz, you may qualify for our <strong className="text-[#038712]">Buy Back Bonus</strong>. Just bring in your receipt when you return, and we'll offer a boosted <strong>EUR to AUD</strong> rate — giving you extra value for your leftover travel money.</p>
            </div>
          </section>

          {/* 5j. UNICEF Feature Banner */}
          <section className="bg-[#f8f9fa] rounded-[8px] flex flex-col-reverse md:flex-row overflow-hidden">
            <div className="flex-1 flex flex-col justify-center gap-[24px] p-[24px] md:p-[40px]">
              <h2 className="text-[28px] lg:text-[56px] leading-[1.15] text-[#222529]" style={{ ...F1, fontWeight: 400 }}>Small Change Big Difference Program</h2>
              <p className="text-[16px] leading-[24px] text-[#4a5056]" style={F2}>Returned from your trip with leftover foreign coins? Change a life by donating them to our Small Change Big Difference program instore which goes to UNICEF to help children all around the world.</p>
              <div><Btn>Donate foreign coins <Arrow color="white" /></Btn></div>
            </div>
            <div className="w-full md:w-[50%]"><img src={unicefImg} alt="UNICEF" className="w-full h-full min-h-[250px] object-cover" /></div>
          </section>

          {/* 5k. Holiday Budget Calculator (simplified) */}
          <section>
            <h2 className="text-[28px] lg:text-[56px] leading-[1.15] text-[#222529] mb-[24px]" style={{ ...F1, fontWeight: 400 }}>Holiday Budget Calculator</h2>
            <p className="text-[16px] leading-[24px] text-[#4a5056] mb-[24px]" style={F2}>We know holiday budgeting can be a snooze fest, but it's important! Just pop in your trip details, and our clever tools will mix crowd-sourced Numbeo data with our exchange rates to show you how much to bring. Easy as!</p>
            <div className="border border-[#dfe2e6] rounded-[8px] p-[32px] bg-[#ebf7ec] text-center"><p className="text-[16px] text-[#4a5056]" style={F2}>Interactive Holiday Budget Calculator -- 5 step planner (Travel Info, Food & Drinks, Shopping, Transport, Summary)</p></div>
          </section>

          {/* 5l. Travel savings tips */}
          <section>
            <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[16px]" style={{ ...F1, fontWeight: 400 }}>How to Save Money for Your Next European Holiday</h3>
            <p className="text-[16px] leading-[24px] text-[#222529] mb-[12px]" style={F2}>Want to explore Europe without overspending? Here are some practical tips to help you make the most of your trip:</p>
            <ul className="list-disc ml-[24px] text-[16px] leading-[24px] text-[#222529] flex flex-col gap-[12px]" style={F2}>
              <li>Travel during off-peak seasons (November to March). Flights and hotels are way cheaper, and you'll avoid the crowds. It's perfect for exploring Europe at your own pace, especially before summer madness kicks in.</li>
              <li>Dining out? Skip the expensive tourist traps and go for street food or local favourites. Whether it's a quick sandwich in Berlin, a bowl of soup in Budapest, or a simple pastry in Lisbon, you can find delicious and affordable options everywhere.</li>
              <li>Public transport is super affordable and efficient in Europe. Hop on a metro, local bus, or train—it's the best way to get around cities like Berlin, Barcelona, or Budapest without blowing your budget.</li>
              <li>Free attractions? Absolutely! Take advantage of free attractions like city parks, historic squares. You can check out the Eiffel Tower gardens, stroll the Spanish Steps, and explore Prague's Old Town—all for zero cost but full of European charm.</li>
              <li>Check to see if there are free museum days! You'll experience a lot of local culture without paying a cent.</li>
              <li>Convert AUD to EUR with Travel Money Oz to get the best exchange rate and make your Euros go further on your trip.</li>
            </ul>
          </section>

          {/* 5m. All about the Euro */}
          <section>
            <h2 className="text-[32px] leading-[40px] text-[#222529] mb-[16px]" style={{ ...F1, fontWeight: 400 }}>All about the Euro</h2>
            <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[8px]" style={{ ...F1, fontWeight: 400 }}>What countries use the Euro currency?</h3>
            <p className="text-[16px] leading-[24px] text-[#222529] mb-[8px]" style={F2}>You'll need to swap AUD to Euro when travelling to any of these countries:</p>
            <p className="text-[16px] leading-[24px] text-[#222529]" style={F2}>Andorra, Austria, Belgium, Cyprus, Estonia, Finland, France, Germany, Greece, Ireland, Italy, Kosovo, Latvia, Lithuania, Luxembourg, Malta, Monaco, Montenegro, the Netherlands, Portugal, San Marino, Slovakia, Slovenia, Spain, and Vatican City.</p>
          </section>

          {/* 5n. Euro coins image + notes/coins info + fun facts */}
          <section className="flex flex-col lg:flex-row gap-[32px]">
            <div className="lg:w-[50%]"><img src={euroImg} alt="EUR Repeating Pattern" className="w-full rounded-[8px] aspect-square object-cover" /></div>
            <div className="lg:w-[50%]">
              <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[12px]" style={{ ...F1, fontWeight: 400 }}>Euro notes and coins</h3>
              <ul className="list-disc ml-[24px] text-[16px] leading-[24px] text-[#222529] flex flex-col gap-[8px] mb-[24px]" style={F2}>
                <li>Like the Australian Dollar, the Euro (€) is divided into 100 cents (c).</li>
                <li>Euro coins come in 1c, 2c, 5c, 10c, 20c, 50c, €1, and €2 denominations. Euro notes are available in €5, €10, €20, €50, €100, €200, and €500 denominations</li>
                <li>While there have been calls for introducing €1 and €2 banknotes, these aren't currently printed (fun fact: producing these would likely cost more than €1 per note!).</li>
              </ul>
              <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[12px]" style={{ ...F1, fontWeight: 400 }}>Fun facts about Euro banknotes</h3>
              <ul className="list-disc ml-[24px] text-[16px] leading-[24px] text-[#222529] flex flex-col gap-[8px]" style={F2}>
                <li>Euro coins have a shared design on one side, but each country adds its own special touch on the other, featuring national symbols, landmarks, or historical figures that reflect its unique culture.</li>
                <li>Euro banknotes feature architectural styles from different periods of European history, including Classical, Romanesque, Gothic, Renaissance, Baroque, and Modern architecture, but they do not depict specific buildings.</li>
              </ul>
            </div>
          </section>

          {/* 5o. Travel Money Trivia */}
          <section>
            <h3 className="text-[24px] leading-[32px] text-[#222529] mb-[12px]" style={{ ...F1, fontWeight: 400 }}>Travel Money Trivia</h3>
            <ul className="list-disc ml-[24px] text-[16px] leading-[24px] text-[#222529] flex flex-col gap-[8px]" style={F2}>
              <li>The Euro currency was introduced in 1999, though the notes and coins weren't physically issued until 2002. Croatia was the most recent country to adopt the Euro, having done so in 2023. Better late than never!</li>
              <li>Euro notes are made from pure cotton fibre, which makes them more durable and gives them their unique texture.</li>
              <li>Each Euro note has a distinctive colour and design that represents a different artistic period of European architecture. Very fancy indeed.</li>
              <li>The reverse (tails) side of every Euro coin features a map of Europe and the coin's value. However, each country that uses the Euro has its own designs for the obverse (heads) side.</li>
            </ul>
          </section>

          {/* 5p. FAQ Accordion */}
          <FAQSection />

          {/* 5q. 4 USP Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {[
              { img: noHiddenFeesImg, title: "No Hidden Fees", body: "Transparent pricing ensures you get the best deal." },
              { img: friendlyServiceImg, title: "Friendly Personalised Service", body: "Foreign exchange by travellers, for travellers" },
              { img: secureTransactionsImg, title: "Secure Transactions", body: "Your money is safe with our secure systems." },
              { img: freeGuidesImg, title: "Free Travel Money Guides", body: "Read our free guides to help you navigate the world of foreign exchange." },
            ].map(u => (
              <div key={u.title} className="bg-white rounded-[8px] overflow-hidden">
                <img src={u.img} alt={u.title} className="w-full h-[120px] object-cover" />
                <div className="p-[24px]">
                  <h3 className="text-[20px] leading-[28px] text-[#222529] mb-[12px]" style={{ ...F1, fontWeight: 400 }}>{u.title}</h3>
                  <p className="text-[14px] leading-[20px] text-[#4a5056]" style={F2}>{u.body}</p>
                </div>
              </div>
            ))}
          </section>

          {/* 5r. 3 Blog Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {[
              { img: hiddenCostsImg, title: "Avoid Hidden Extras in Europe", body: "We've put together a few tips to shine some light on the extras you may come across in Europe." },
              { img: shoppingImg, title: "Best Shopping Spots in Europe", body: "We can tell you where to find the best destinations for shopping in Europe." },
              { img: italyImg, title: "How Much Money Do I Need To Travel Europe?", body: "Let's take a look at a few examples of different kinds of holidays you could have in Europe" },
            ].map(c => (
              <div key={c.title} className="bg-[#f8f9fa] rounded-[8px] overflow-hidden flex flex-col">
                <img src={c.img} alt={c.title} className="w-full h-[180px] object-cover" />
                <div className="p-[24px] flex-1 flex flex-col">
                  <h3 className="text-[20px] leading-[28px] text-[#222529] mb-[12px]" style={{ ...F1, fontWeight: 400 }}>{c.title}</h3>
                  <p className="text-[14px] leading-[20px] text-[#4a5056] flex-1" style={F2}>{c.body}</p>
                  <div className="mt-[24px]"><TxtLink>Learn More</TxtLink></div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

/* ═══════ FAQ SECTION ═══════ */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "How much is 1 AUD in EUR?", a: "The exchange rate from 1 Australian Dollar (AUD) to Euro (EUR) changes frequently (multiple times a day), based on global market conditions. For the most accurate and up-to-date rate, check the live AUD to EUR rate on the Travel Money Oz website before buying. This ensures you lock in a competitive rate at the right time for your travel plans." },
    { q: "Where can I buy Euros in Australia?", a: "You can buy Euros (EUR) at any Travel Money Oz store across Australia — there are over 90 locations to choose from. Prefer to plan ahead? Order online and choose either home delivery or click-and-collect. It's a secure and convenient way to get your Euros sorted before your trip to Europe." },
    { q: "Should I exchange AUD to EUR in Australia or in Europe?", a: "It's often smarter to exchange AUD to EUR in Australia before your trip. Doing so lets you lock in a better rate and avoid high airport fees or poor exchange options overseas. With Travel Money Oz, you can order Euros in advance and travel with peace of mind, knowing your currency is ready when you are." },
    { q: "How do I convert leftover Euros back to AUD?", a: "If you've returned from Europe with spare cash, bring your Euros to any Travel Money Oz store to convert them back into Australian Dollars. If you originally bought your Euros from us, you might even be eligible for our Buy Back Bonus, which gives you a better rate when exchanging unused currency." },
    { q: "What affects the AUD vs EUR exchange rate?", a: "The AUD to EUR exchange rate is influenced by several economic factors, including interest rate decisions by the European Central Bank and the Reserve Bank of Australia, commodity market movements, inflation rates, and geopolitical events." },
  ];
  return (
    <section>
      <h2 className="text-[32px] leading-[40px] text-[#222529] mb-[24px]" style={{ ...F1, fontWeight: 400 }}>FAQs about buying and exchanging Euros</h2>
      <div className="border border-[#dfe2e6] rounded-[4px]">
        {faqs.map((f, i) => (
          <div key={i} className={i > 0 ? "border-t border-[#dfe2e6]" : ""}>
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-[16px] md:p-[24px] cursor-pointer text-left">
              <span className="text-[16px] md:text-[20px] leading-[28px] text-[#222529] flex-1 pr-[16px]" style={{ ...F1, fontWeight: 400 }}>{f.q}</span>
              <span className="shrink-0 w-[24px] h-[24px] flex items-center justify-center">
                <span className={`block w-[12px] h-[2px] bg-[#222529] rounded-full transition-transform ${open === i ? "" : ""}`} />
                {open !== i && <span className="block w-[2px] h-[12px] bg-[#222529] rounded-full absolute" />}
              </span>
            </button>
            {open === i && <div className="px-[16px] md:px-[24px] pb-[24px]"><p className="text-[16px] leading-[24px] text-[#4a5056]" style={F2}>{f.a}</p></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════ 6. TRUSTPILOT ═══════ */
function TrustpilotSection() {
  return (
    <div className="w-full border-t border-[#dfe2e6] py-[48px] px-[16px] md:px-[32px] lg:px-[64px]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-[32px] items-center">
        <div className="flex flex-col items-center gap-[8px] shrink-0 min-w-[180px]">
          <p className="text-[24px] font-[700] text-black" style={F2}>Great</p>
          <div className="flex gap-[2px]">{[1,2,3,4,5].map(i => <div key={i} className="w-[32px] h-[32px] bg-[#00b67a] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M7 0l2.16 4.38L14 5.1l-3.5 3.41.83 4.82L7 11.07l-4.33 2.27.83-4.82L0 5.1l4.84-.72L7 0z" fill="white"/></svg></div>)}</div>
          <p className="text-[14px] text-black" style={F2}>Based on <strong className="underline">6,570 reviews</strong></p>
          <div className="flex items-center gap-[4px]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#00b67a"/></svg><span className="font-[700] text-[16px] text-black" style={F2}>Trustpilot</span></div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-[16px]">
          {[
            { name: "Stephen Kendall", date: "16 March", title: "Fantastic", body: "So easy to Order, on line, and so easy to pick up. Fantastic service, my pic..." },
            { name: "Hans", date: "16 March", title: "Easy to deal with and good rates!", body: "Easy to deal with and gave me a good rate with no hidden fees, charges or..." },
            { name: "Sanaullah Muhammad", date: "15 March", title: "Great customer service", body: "Great customer service" },
            { name: "Thomas", date: "14 March", title: "Purchase and collection of curr...", body: "Only purchase was straight forward. Could choose to pay with debit or..." },
          ].map(r => (
            <div key={r.name} className="p-[16px] flex flex-col gap-[8px]">
              <div className="flex gap-[2px]">{[1,2,3,4,5].map(i => <div key={i} className="w-[24px] h-[24px] bg-[#00b67a] flex items-center justify-center"><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M7 0l2.16 4.38L14 5.1l-3.5 3.41.83 4.82L7 11.07l-4.33 2.27.83-4.82L0 5.1l4.84-.72L7 0z" fill="white"/></svg></div>)}</div>
              <p className="font-[700] text-[16px] text-[#212121]" style={F2}>{r.title}</p>
              <p className="text-[14px] leading-[20px] text-[#4a5056] line-clamp-2" style={F2}>{r.body}</p>
              <p className="text-[13px] text-[#6e757c]" style={F2}>{r.name}, {r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════ 7. FOOTER ═══════ */
function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-[32px] lg:px-[64px] pt-[64px] pb-[48px]">
        {/* Newsletter */}
        <div className="pb-[48px] mb-[48px] border-b border-white/20">
          <h3 className="text-[20px] leading-[28px] text-white mb-[16px]" style={{ ...F1, fontWeight: 400 }}>Join the Travel Money Club</h3>
          <p className="text-[16px] leading-[24px] text-white/85 mb-[24px]" style={F2}>Sign up to automatically go into a monthly draw to win $500. You'll also get exclusive travel money offers, tips & tricks and much more!</p>
          <Btn>Subscribe</Btn>
        </div>
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] mb-[48px]">
          {[
            { h: "Find a Store", links: ["Currency Exchange Sydney","Currency Exchange Melbourne","Currency Exchange Brisbane","Currency Exchange Perth","Currency Exchange Adelaide"] },
            { h: "Legal", links: ["Privacy Notice","Online Orders T&Cs","Website Terms of Use","Currency Pass PDS"] },
            { h: "Customer Service", links: ["Contact Us","FAQs","1300 426 997"] },
            { h: "Who we are", links: ["About Travel Money Oz","Careers"] },
          ].map(col => (
            <div key={col.h}>
              <p className="text-[20px] leading-[28px] text-white mb-[16px]" style={{ ...F1, fontWeight: 400 }}>{col.h}</p>
              <div className="flex flex-col gap-[14px]">{col.links.map(l => <span key={l} className="text-[16px] leading-[24px] text-white/85 cursor-pointer hover:text-white" style={F2}>{l}</span>)}</div>
            </div>
          ))}
        </div>
        {/* Follow Us */}
        <div className="mb-[48px]">
          <p className="text-[14px] font-[600] text-white mb-[16px]" style={F2}>Follow Us</p>
          <div className="flex gap-[24px]">{["Instagram","Facebook"].map(s => <span key={s} className="text-[16px] text-white/75 cursor-pointer hover:text-white" style={F2}>{s}</span>)}</div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white/20 pt-[24px]">
          <p className="text-[12px] leading-[18px] text-white/85" style={F2}>© Travel Money Oz ABN 46 121 451 723. Proudly part of the Flight Centre Travel Group Limited.</p>
          <p className="text-[12px] leading-[18px] text-white/85 mt-[16px]" style={F2}>*Holiday Budget Calculator uses data from Numbeo's Cost of Living Comparison Service, the world's largest database of user-contributed data about countries worldwide. The service is not designed to replace professional personal financial advice; consider whether the suggestions are appropriate for you.</p>
          <p className="text-[12px] leading-[18px] text-white/85 mt-[16px]" style={F2}>Mastercard Prepaid Management Services Australia Pty Ltd (ABN 47 145 452 044, AFSL 386 837) arranges for the issue of the Currency Pass in conjunction with the issuer, EML Payment Solutions Limited ('EML') ABN 30 131 436 532, AFSL 404131. You should consider the Product Disclosure Statement for the relevant product available at Travel Money Oz's website and the Target Market Determination before deciding to acquire the product. Any advice does not take into account your personal needs, financial circumstances or objectives and you should consider if it is appropriate for you. Mastercard and the circles design are registered trademarks of Mastercard International Incorporated.</p>
          <p className="text-[12px] leading-[18px] text-white/85 mt-[16px]" style={F2}>Credit or debit card fees may apply to online transactions, see online ordering terms and conditions.</p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════ MAIN APP ═══════ */
export default function App() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <Header />
      <Breadcrumb />
      <HeroTitle />
      <ConverterSection />
      <BodyContent />
      <TrustpilotSection />
      <Footer />
    </div>
  );
}
