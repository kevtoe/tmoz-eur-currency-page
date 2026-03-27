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

export function BodyContent() {
  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto px-[16px] md:px-[32px] lg:px-[64px]">
        <div className="max-w-[960px] mx-auto py-[64px] flex flex-col gap-[40px]">
          {/* 5a. Best Exchange Rate */}
          <section>
            <h2
              className="text-[32px] leading-[40px] text-[#222529] mb-[16px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              How to Get the Best AUD to EUR Exchange Rate
            </h2>
            <p
              className="text-[16px] leading-[24px] text-[#222529]"
              style={F2}
            >
              The <strong>AUD to Euro exchange rate</strong> can have a big
              impact on your travel budget — especially if you&apos;re planning
              a Eurotrip across multiple countries. At{" "}
              <strong>Travel Money Oz</strong>, we offer competitive, real-time
              rates so you can get great value when you buy Euros in Australia.
              Use our{" "}
              <strong className="text-[#038712]">
                live Euro exchange rate tool
              </strong>{" "}
              to monitor market movements and lock in your EUR at the best time
              before your trip.
            </p>
          </section>

          {/* 5b. Price Beat Guarantee */}
          <section className="flex gap-[24px] items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={priceBeatImg}
              alt="Price Beat Guarantee"
              className="w-[100px] h-[60px] object-contain shrink-0 hidden md:block"
            />
            <div>
              <h3
                className="text-[24px] leading-[32px] text-[#222529] mb-[8px]"
                style={{ ...F1, fontWeight: 400 }}
              >
                Lock In a Better Rate with Our Price Beat Guarantee
              </h3>
              <p
                className="text-[16px] leading-[24px] text-[#222529]"
                style={F2}
              >
                Want even more for your Aussie dollars? Thanks to our{" "}
                <strong className="text-[#038712]">
                  Price Beat Guarantee
                </strong>
                , if you find a better published rate for{" "}
                <strong>Euros in Australia</strong>, Travel Money Oz will{" "}
                <strong>beat it</strong>. It&apos;s our way of making sure
                you&apos;re not only getting Euros, but also getting them at the
                best available AUD to EUR rate. Just bring proof of the better
                rate when purchasing in-store, and we&apos;ll handle the rest
              </p>
              <p
                className="text-[12px] text-[#6e757c] mt-[16px] italic"
                style={F2}
              >
                *Price Beat Guarantee applies to in-store EUR cash purchases
                only. Terms and conditions apply.
              </p>
            </div>
          </section>

          {/* 5c. Feature Banner */}
          <section className="bg-[#ebf7ec] rounded-[8px] flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-[50%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cashInDestImg}
                alt="EUR Cash In Destination"
                className="w-full h-full min-h-[250px] object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center gap-[24px] p-[24px] md:p-[40px]">
              <h2
                className="text-[28px] lg:text-[56px] leading-[1.15] text-[#222529]"
                style={{ ...F1, fontWeight: 400 }}
              >
                Ready to Buy Euros
              </h2>
              <p
                className="text-[16px] leading-[24px] text-[#4a5056]"
                style={F2}
              >
                Heading to Spain for tapas or Germany for Oktoberfest, having
                Euro cash in hand saves stress on arrival. You can order online
                and collect in-store, or buy directly from one of our 90+
                branches.
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <Btn>
                  Find A Store Near You <Arrow color="white" />
                </Btn>
                <Btn secondary>Order Online</Btn>
              </div>
            </div>
          </section>

          {/* 5d. Today's Rate Card */}
          <section className="bg-[#f8f9fa] rounded-[8px]">
            <div className="border border-[#dfe2e6] rounded-[8px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <div className="p-[24px] md:p-[32px] border-b md:border-b-0 md:border-r border-[#dfe2e6]">
                <h4
                  className="text-[20px] leading-[28px] text-[#222529] mb-[8px]"
                  style={{ ...F1, fontWeight: 400 }}
                >
                  Cash rate
                </h4>
                <p
                  className="text-[20px] leading-[28px] text-[#4a5056] mb-[20px]"
                  style={F2}
                >
                  1 AUD = 0.5921 EUR
                </p>
                <Btn small>
                  Buy online <Arrow color="white" s={12} />
                </Btn>
              </div>
              <div className="p-[24px] md:p-[32px] border-b xl:border-b-0 xl:border-r border-[#dfe2e6]">
                <h4
                  className="text-[20px] leading-[28px] text-[#222529] mb-[8px]"
                  style={{ ...F1, fontWeight: 400 }}
                >
                  Card rate
                </h4>
                <p
                  className="text-[20px] leading-[28px] text-[#4a5056] mb-[20px]"
                  style={F2}
                >
                  1 AUD = 0.5745 EUR
                </p>
                <div className="flex flex-wrap gap-[12px]">
                  <Btn small>
                    Reload card <Arrow color="white" s={12} />
                  </Btn>
                  <Btn secondary small>
                    Buy new card <Arrow color="#038712" s={12} />
                  </Btn>
                </div>
              </div>
              <div className="p-[24px] md:p-[32px] md:col-span-2 xl:col-span-1">
                <div className="grid grid-cols-2 gap-[20px]">
                  <div>
                    <h5
                      className="text-[16px] text-[#222529] mb-[4px]"
                      style={{ ...F1, fontWeight: 400 }}
                    >
                      Code
                    </h5>
                    <p className="text-[16px] text-[#4a5056]" style={F2}>
                      EUR
                    </p>
                  </div>
                  <div>
                    <h5
                      className="text-[16px] text-[#222529] mb-[4px]"
                      style={{ ...F1, fontWeight: 400 }}
                    >
                      Symbol
                    </h5>
                    <p className="text-[16px] text-[#4a5056]" style={F2}>
                      &euro;
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h5
                      className="text-[16px] text-[#222529] mb-[4px]"
                      style={{ ...F1, fontWeight: 400 }}
                    >
                      Coins
                    </h5>
                    <p className="text-[16px] text-[#4a5056]" style={F2}>
                      Cents &amp; Euros - 1c, 2c, 5c, 10c, 20c, 50c, &euro;1,
                      &euro;2
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h5
                      className="text-[16px] text-[#222529] mb-[4px]"
                      style={{ ...F1, fontWeight: 400 }}
                    >
                      Banknotes
                    </h5>
                    <p className="text-[16px] text-[#4a5056]" style={F2}>
                      Euros - &euro;5, &euro;10, &euro;20, &euro;50, &euro;100,
                      &euro;200, &euro;500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5e. Order Euros Online */}
          <section>
            <h2
              className="text-[32px] leading-[40px] text-[#222529] mb-[16px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Order Euros Online for Home Delivery
            </h2>
            <p
              className="text-[16px] leading-[24px] text-[#222529]"
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
              <strong>Travel Money Oz</strong> lets you lock in your{" "}
              <strong>AUD to Euro exchange rate</strong> and have your cash
              delivered straight to your door — safely and securely.
            </p>
          </section>

          {/* 5f. In-Store Pickup */}
          <section className="flex gap-[24px] items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={deliveryImg}
              alt="Delivery"
              className="w-[100px] h-[100px] object-contain shrink-0 hidden md:block"
            />
            <div>
              <h3
                className="text-[24px] leading-[32px] text-[#222529] mb-[8px]"
                style={{ ...F1, fontWeight: 400 }}
              >
                Order Euros Online for In-Store Pickup
              </h3>
              <p
                className="text-[16px] leading-[24px] text-[#222529]"
                style={F2}
              >
                Need your travel money sooner? You can also{" "}
                <strong className="text-[#038712]">
                  order Euros online for pickup
                </strong>{" "}
                at one of over 90 <strong>Travel Money Oz</strong> stores across
                Australia. Select locations even offer{" "}
                <strong>same-day pickup</strong>, perfect for last-minute plans.
                Lock in today&apos;s <strong>AUD to EUR exchange rate</strong>,
                then collect your Euros at a time that suits you — no stress, no
                surprises.
              </p>
            </div>
          </section>

          {/* 5g. 3 Exchange Method Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {[
              {
                img: dubrovnikImg,
                title: "Same Day Delivery Foreign Cash",
                body: "Buy EUR online and have it delivered straight to your home or office.",
                cta: "Order Same Day Delivery",
              },
              {
                img: barcelonaImg,
                title: "Click and collect Foreign Cash",
                body: "Reserve your EUR online and pick it up at a convenient Travel Money location near you.",
                cta: "Reserve Now, Collect In-Store",
              },
              {
                img: positanoImg,
                title: "Load a Currency Pass Travel Money Card",
                body: "Reload your travel money card with EUR online for a secure and convenient travel experience.",
                cta: "Load Your Travel Money Card",
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
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-[24px] flex-1 flex flex-col">
                  <h3
                    className="text-[20px] leading-[28px] text-[#222529] mb-[12px]"
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
                  <div className="mt-[24px]">
                    <TxtLink>{c.cta}</TxtLink>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* 5h. Euro to AUD */}
          <section>
            <h2
              className="text-[32px] leading-[40px] text-[#222529] mb-[16px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Euro to AUD – Convert Euros to Australian Dollars
            </h2>
            <p
              className="text-[16px] leading-[24px] text-[#222529]"
              style={F2}
            >
              Got leftover Euros from your trip? Travel Money Oz makes it easy
              to <strong>convert Euro to AUD</strong> at great rates. Whether
              you&apos;re exchanging a handful of notes or converting a larger
              amount, we offer a fast, reliable way to turn your{" "}
              <strong>Euros to Australian Dollars</strong> — all with expert
              service at over 90 locations nationwide.
            </p>
          </section>

          {/* 5i. Buy Back Bonus */}
          <section className="flex gap-[24px] items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={buyBackImg}
              alt="Buy Back Bonus"
              className="w-[100px] h-[60px] object-contain shrink-0 hidden md:block"
            />
            <div>
              <h3
                className="text-[24px] leading-[32px] text-[#222529] mb-[8px]"
                style={{ ...F1, fontWeight: 400 }}
              >
                Buy Back Bonus for Better EUR to AUD Value
              </h3>
              <p
                className="text-[16px] leading-[24px] text-[#222529]"
                style={F2}
              >
                If you originally purchased your <strong>Euros</strong> from
                Travel Money Oz, you may qualify for our{" "}
                <strong className="text-[#038712]">Buy Back Bonus</strong>.
                Just bring in your receipt when you return, and we&apos;ll offer
                a boosted <strong>EUR to AUD</strong> rate — giving you extra
                value for your leftover travel money.
              </p>
            </div>
          </section>

          {/* 5j. UNICEF Feature Banner */}
          <section className="bg-[#f8f9fa] rounded-[8px] flex flex-col-reverse md:flex-row overflow-hidden">
            <div className="flex-1 flex flex-col justify-center gap-[24px] p-[24px] md:p-[40px]">
              <h2
                className="text-[28px] lg:text-[56px] leading-[1.15] text-[#222529]"
                style={{ ...F1, fontWeight: 400 }}
              >
                Small Change Big Difference Program
              </h2>
              <p
                className="text-[16px] leading-[24px] text-[#4a5056]"
                style={F2}
              >
                Returned from your trip with leftover foreign coins? Change a
                life by donating them to our Small Change Big Difference program
                instore which goes to UNICEF to help children all around the
                world.
              </p>
              <div>
                <Btn>
                  Donate foreign coins <Arrow color="white" />
                </Btn>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={unicefImg}
                alt="UNICEF"
                className="w-full h-full min-h-[250px] object-cover"
              />
            </div>
          </section>

          {/* 5k. Holiday Budget Calculator */}
          <section>
            <h2
              className="text-[28px] lg:text-[56px] leading-[1.15] text-[#222529] mb-[24px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Holiday Budget Calculator
            </h2>
            <p
              className="text-[16px] leading-[24px] text-[#4a5056] mb-[24px]"
              style={F2}
            >
              We know holiday budgeting can be a snooze fest, but it&apos;s
              important! Just pop in your trip details, and our clever tools will
              mix crowd-sourced Numbeo data with our exchange rates to show you
              how much to bring. Easy as!
            </p>
            <div className="border border-[#dfe2e6] rounded-[8px] p-[32px] bg-[#ebf7ec] text-center">
              <p className="text-[16px] text-[#4a5056]" style={F2}>
                Interactive Holiday Budget Calculator -- 5 step planner (Travel
                Info, Food &amp; Drinks, Shopping, Transport, Summary)
              </p>
            </div>
          </section>

          {/* 5l. Travel savings tips */}
          <section>
            <h3
              className="text-[24px] leading-[32px] text-[#222529] mb-[16px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              How to Save Money for Your Next European Holiday
            </h3>
            <p
              className="text-[16px] leading-[24px] text-[#222529] mb-[12px]"
              style={F2}
            >
              Want to explore Europe without overspending? Here are some
              practical tips to help you make the most of your trip:
            </p>
            <ul
              className="list-disc ml-[24px] text-[16px] leading-[24px] text-[#222529] flex flex-col gap-[12px]"
              style={F2}
            >
              <li>
                Travel during off-peak seasons (November to March). Flights and
                hotels are way cheaper, and you&apos;ll avoid the crowds.
                It&apos;s perfect for exploring Europe at your own pace,
                especially before summer madness kicks in.
              </li>
              <li>
                Dining out? Skip the expensive tourist traps and go for street
                food or local favourites. Whether it&apos;s a quick sandwich in
                Berlin, a bowl of soup in Budapest, or a simple pastry in
                Lisbon, you can find delicious and affordable options everywhere.
              </li>
              <li>
                Public transport is super affordable and efficient in Europe. Hop
                on a metro, local bus, or train—it&apos;s the best way to get
                around cities like Berlin, Barcelona, or Budapest without blowing
                your budget.
              </li>
              <li>
                Free attractions? Absolutely! Take advantage of free attractions
                like city parks, historic squares. You can check out the Eiffel
                Tower gardens, stroll the Spanish Steps, and explore
                Prague&apos;s Old Town—all for zero cost but full of European
                charm.
              </li>
              <li>
                Check to see if there are free museum days! You&apos;ll
                experience a lot of local culture without paying a cent.
              </li>
              <li>
                Convert AUD to EUR with Travel Money Oz to get the best exchange
                rate and make your Euros go further on your trip.
              </li>
            </ul>
          </section>

          {/* 5m. All about the Euro */}
          <section>
            <h2
              className="text-[32px] leading-[40px] text-[#222529] mb-[16px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              All about the Euro
            </h2>
            <h3
              className="text-[24px] leading-[32px] text-[#222529] mb-[8px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              What countries use the Euro currency?
            </h3>
            <p
              className="text-[16px] leading-[24px] text-[#222529] mb-[8px]"
              style={F2}
            >
              You&apos;ll need to swap AUD to Euro when travelling to any of
              these countries:
            </p>
            <p
              className="text-[16px] leading-[24px] text-[#222529]"
              style={F2}
            >
              Andorra, Austria, Belgium, Cyprus, Estonia, Finland, France,
              Germany, Greece, Ireland, Italy, Kosovo, Latvia, Lithuania,
              Luxembourg, Malta, Monaco, Montenegro, the Netherlands, Portugal,
              San Marino, Slovakia, Slovenia, Spain, and Vatican City.
            </p>
          </section>

          {/* 5n. Euro coins + notes */}
          <section className="flex flex-col lg:flex-row gap-[32px]">
            <div className="lg:w-[50%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={euroImg}
                alt="EUR Repeating Pattern"
                className="w-full rounded-[8px] aspect-square object-cover"
              />
            </div>
            <div className="lg:w-[50%]">
              <h3
                className="text-[24px] leading-[32px] text-[#222529] mb-[12px]"
                style={{ ...F1, fontWeight: 400 }}
              >
                Euro notes and coins
              </h3>
              <ul
                className="list-disc ml-[24px] text-[16px] leading-[24px] text-[#222529] flex flex-col gap-[8px] mb-[24px]"
                style={F2}
              >
                <li>
                  Like the Australian Dollar, the Euro (&euro;) is divided into
                  100 cents (c).
                </li>
                <li>
                  Euro coins come in 1c, 2c, 5c, 10c, 20c, 50c, &euro;1, and
                  &euro;2 denominations. Euro notes are available in &euro;5,
                  &euro;10, &euro;20, &euro;50, &euro;100, &euro;200, and
                  &euro;500 denominations
                </li>
                <li>
                  While there have been calls for introducing &euro;1 and
                  &euro;2 banknotes, these aren&apos;t currently printed (fun
                  fact: producing these would likely cost more than &euro;1 per
                  note!).
                </li>
              </ul>
              <h3
                className="text-[24px] leading-[32px] text-[#222529] mb-[12px]"
                style={{ ...F1, fontWeight: 400 }}
              >
                Fun facts about Euro banknotes
              </h3>
              <ul
                className="list-disc ml-[24px] text-[16px] leading-[24px] text-[#222529] flex flex-col gap-[8px]"
                style={F2}
              >
                <li>
                  Euro coins have a shared design on one side, but each country
                  adds its own special touch on the other, featuring national
                  symbols, landmarks, or historical figures that reflect its
                  unique culture.
                </li>
                <li>
                  Euro banknotes feature architectural styles from different
                  periods of European history, including Classical, Romanesque,
                  Gothic, Renaissance, Baroque, and Modern architecture, but
                  they do not depict specific buildings.
                </li>
              </ul>
            </div>
          </section>

          {/* 5o. Travel Money Trivia */}
          <section>
            <h3
              className="text-[24px] leading-[32px] text-[#222529] mb-[12px]"
              style={{ ...F1, fontWeight: 400 }}
            >
              Travel Money Trivia
            </h3>
            <ul
              className="list-disc ml-[24px] text-[16px] leading-[24px] text-[#222529] flex flex-col gap-[8px]"
              style={F2}
            >
              <li>
                The Euro currency was introduced in 1999, though the notes and
                coins weren&apos;t physically issued until 2002. Croatia was the
                most recent country to adopt the Euro, having done so in 2023.
                Better late than never!
              </li>
              <li>
                Euro notes are made from pure cotton fibre, which makes them
                more durable and gives them their unique texture.
              </li>
              <li>
                Each Euro note has a distinctive colour and design that
                represents a different artistic period of European architecture.
                Very fancy indeed.
              </li>
              <li>
                The reverse (tails) side of every Euro coin features a map of
                Europe and the coin&apos;s value. However, each country that
                uses the Euro has its own designs for the obverse (heads) side.
              </li>
            </ul>
          </section>

          {/* 5p. FAQ Accordion */}
          <FAQSection />

          {/* 5q. 4 USP Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {[
              {
                img: noHiddenFeesImg,
                title: "No Hidden Fees",
                body: "Transparent pricing ensures you get the best deal.",
              },
              {
                img: friendlyServiceImg,
                title: "Friendly Personalised Service",
                body: "Foreign exchange by travellers, for travellers",
              },
              {
                img: secureTransactionsImg,
                title: "Secure Transactions",
                body: "Your money is safe with our secure systems.",
              },
              {
                img: freeGuidesImg,
                title: "Free Travel Money Guides",
                body: "Read our free guides to help you navigate the world of foreign exchange.",
              },
            ].map((u) => (
              <div
                key={u.title}
                className="bg-white rounded-[8px] overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={u.img}
                  alt={u.title}
                  className="w-full h-[120px] object-cover"
                />
                <div className="p-[24px]">
                  <h3
                    className="text-[20px] leading-[28px] text-[#222529] mb-[12px]"
                    style={{ ...F1, fontWeight: 400 }}
                  >
                    {u.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[20px] text-[#4a5056]"
                    style={F2}
                  >
                    {u.body}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* 5r. 3 Blog Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
            {[
              {
                img: hiddenCostsImg,
                title: "Avoid Hidden Extras in Europe",
                body: "We've put together a few tips to shine some light on the extras you may come across in Europe.",
              },
              {
                img: shoppingImg,
                title: "Best Shopping Spots in Europe",
                body: "We can tell you where to find the best destinations for shopping in Europe.",
              },
              {
                img: italyImg,
                title: "How Much Money Do I Need To Travel Europe?",
                body: "Let's take a look at a few examples of different kinds of holidays you could have in Europe",
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
                  className="w-full h-[180px] object-cover"
                />
                <div className="p-[24px] flex-1 flex flex-col">
                  <h3
                    className="text-[20px] leading-[28px] text-[#222529] mb-[12px]"
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
                  <div className="mt-[24px]">
                    <TxtLink>Learn More</TxtLink>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
