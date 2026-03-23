# Figma Make Prompt — Replicate AUD-to-EUR Currency Landing Page

## Master Context Prompt

Use this as the system/context prompt when working with Figma Make or any AI design tool. It establishes the design system, layout rules, and brand constraints before the section-by-section prompts.

---

### SYSTEM CONTEXT

You are designing a currency landing page for **Travel Money Oz** (TMOZ), specifically the **AUD to EUR (Euro)** exchange rate page. This page must be built using the **Rhythm Master Components** design system already established in this Figma file.

**Design reference:**
Use the existing USD currency landing page as the structural and visual reference. Match its layout, spacing, component usage, and visual hierarchy exactly — only the content changes for EUR.
→ https://www.figma.com/design/f8wtYRL2kTqsBCVUI4fnug/Travel-Money-DCA---Rhythm-Master-Components?node-id=648-245765

All components, styles, tokens, and layout patterns should be sourced from this file. Reuse existing component instances wherever possible rather than creating new elements from scratch.

**Brand identity:**
- Primary colour: `#038712` (dark green) — used for all CTAs, active states, links
- Primary light: `#EBF7EC` — light green backgrounds
- Primary 200: `#9AD7A1` — active tab highlights
- Text primary: `#222529` (neutral/900) — headings
- Text secondary: `#4A5056` (neutral/700) — body copy
- Border: `#8C939A` (neutral/550) — form inputs
- White: `#FFFFFF` — cards, backgrounds

**Typography:**
- Display headings: **Prelo Slab SemiBold** — 56px/64px (hero feature text)
- H2: **Prelo Slab SemiBold** — 24px/32px
- Body: **Roboto Regular** — 16px/24px
- Body small: **Roboto Regular** — 14px/20px
- Body heavy: **Roboto SemiBold** — 16px/24px
- CTA labels: **Roboto Bold** — 16px/24px

**Layout:**
- Desktop width: 1440px
- Content area: 1088px wide, centred with 176px left margin
- Page grid margin: 64px
- Standard spacing between sections: 96px vertical padding
- Card border radius: 8px
- Button border radius: 24px (fully rounded pill shape)
- Buttons: Primary = solid green `#038712` with white text + right arrow icon; Secondary = green outline with green text + right arrow icon

**Component library available:**
- Header Nav, Breadcrumb Group, Banner / Media to Side, Convert Currency Card, Image Text Combo, Rich Text, Today's Rate, Table, Card / Basic, Accordion, HBC Widget/Desktop, Trust Pilot/Carousel, Component Sub Header, Footer, Divider, Button Group / Generic

---

## Section-by-Section Prompts

Use these prompts individually to build each section of the page. They are ordered top-to-bottom as they appear on the live site.

**Important:** When using any prompt below in Figma Make, prepend this reference line so Make can pull component styles directly from the existing design:

> Reference the USD currency landing page for component structure and styling: https://www.figma.com/design/f8wtYRL2kTqsBCVUI4fnug/Travel-Money-DCA---Rhythm-Master-Components?node-id=648-245765

---

### PROMPT 1: Header Nav
> Keep the existing Header Nav component as-is. No changes needed — this is a global component shared across all currency pages.
>
> Content: Travel Money Oz logo (left), main navigation (Buy Currency, Travel Money Card, FX Tools & More), utility bar (Contact Us, FAQs, Find a Store, 1300 426 997), action icons (Search, Order Online cart, Account).

---

### PROMPT 2: Breadcrumb
> Add a Breadcrumb Group below the header with 56px vertical padding.
>
> Content: **Home > Rates > EUR**

---

### PROMPT 3: Hero Banner
> Use the **Banner / Media to Side** component. Full width (1440px), 720px tall.
>
> - **Left half**: Solid dark/black background.
>   - H1 heading in white, bold: **"Convert AUD to EUR Exchange Rate"**
>   - No subheading or body text visible on the live page.
> - **Right half**: Full-bleed photograph of a European destination (e.g. the Eiffel Tower, a Mediterranean coastal town, or a European city square — use a placeholder image of a European landmark).
>
> The heading should be bottom-left aligned within the dark panel, large and bold (Display style, white text).

---

### PROMPT 4: Convert Currency Layout
> Use the **Convert Currency Layout** section. Full width, light green background (`#EBF7EC`), 744px tall, 64px padding.
>
> **Left side — Convert Currency Card** (416px wide, white background, 8px border radius, positioned at left margin):
> - Heading: **"Convert Currency"** (Prelo Slab SemiBold, 24px)
> - Tab row with two options: **Cash** (active, green highlight `#9AD7A1`) and **Card** (inactive)
> - Form fields:
>   1. Label: **"Choose Currency"** — Dropdown showing **"EUR (Euro)"** with an EU flag icon
>   2. Label: **"You pay AUD"** — Text input showing **"2000"**
>   3. Label: **"You get EUR"** — Helper text: **"1 AUD = 0.5921 EUR"** — Text input showing the converted amount
> - Primary CTA button: **"Buy online"** (solid green `#038712`, white text, right arrow, pill shape)
> - Disclaimer text below button: **"*Online rates not available in store."** (14px, grey)
>
> **Right side — Image Text Combo** (feature text panel, no image needed — text only on green background):
> - H2: **"Best Place to Buy Euros in Australia"** (Prelo Slab SemiBold, 56px/64px, dark text)
> - Body: **"Whether you're planning to stroll the streets of Paris, cruise the canals of Amsterdam, or explore the ruins of Rome, you'll need Euros (EUR) in your wallet. Travel Money Oz makes it simple — order online or visit one of 90+ stores across Australia. With competitive rates on AUD to EUR conversion, your travel money goes further."** (Roboto Regular, 16px, grey `#4A5056`)

---

### PROMPT 5: Intro Rich Text — Exchange Rate Info
> Below the Convert Currency Layout, add a content section (1088px wide, centred).
>
> **Block 1 — Live Rate Intro:**
> - H3: **"Live AUD to EUR Exchange Rate Today"**
> - Body: **"The AUD to EUR exchange rate shifts frequently with global market changes, so it's essential to check today's rate before exchanging your Australian Dollars. At Travel Money Oz, we update our real-time AUD to EUR rates so you always know exactly how much you'll get — no hidden fees, no surprises."**
>
> **Block 2 — Where to Buy:**
> - H3: **"Where to Buy Euros Near Me"**
> - Body: **"Searching for a money exchange near you for Euros? Travel Money Oz has over 90+ currency exchange locations across Australia, making it easy to buy Euros (EUR) in person. Whether you're looking for a Euro money changer near me or just want trusted currency exchange centre for Euros, we've got you covered."**
> - Body continued: **"With our In Stock Promise, we'll always have Euros available in-store. On the rare occasion we don't? You'll receive $10 AUD off when you make a full deposit. Need cash quickly? Take advantage of our same-day service, with competitive rates and no hidden fees. So if you're preparing for Europe and wondering where to buy Euros near me, head to your nearest Travel Money Oz and travel with confidence — quick, simple, and stress-free."**

---

### PROMPT 6: How to Get the Best Rate + Price Beat Guarantee
> Continuing in the content area (1088px wide):
>
> **Block 1 — Best Rate:**
> - H2: **"How to Get the Best AUD to EUR Exchange Rate"**
> - Body: **"The AUD to Euro exchange rate can have a big impact on your travel budget — especially if you're planning a Eurotrip across multiple countries. At Travel Money Oz, we offer competitive, real-time rates so you can get great value when you buy Euros in Australia. Use our live Euro exchange rate tool to monitor market movements and lock in your EUR at the best time before your trip."**
>
> **Block 2 — Price Beat Guarantee** (Image Text Combo layout — image left, text right):
> - Image: Price Beat Guarantee badge/graphic (placeholder — green shield or badge icon)
> - H3: **"Lock In a Better Rate with Our Price Beat Guarantee"**
> - Body: **"Want even more for your Aussie dollars? Thanks to our Price Beat Guarantee, if you find a better published rate for Euros in Australia, Travel Money Oz will beat it. It's our way of making sure you're not only getting Euros, but also getting them at the best available AUD to EUR rate. Just bring proof of the better rate when purchasing in-store, and we'll handle the rest"**
> - Disclaimer: **"*Price Beat Guarantee applies to in-store EUR cash purchases only. Terms and conditions apply."** (14px, grey)

---

### PROMPT 7: Ready to Buy Euros + Rate Widget
> **Feature section** with image and text, followed by the Today's Rate component:
>
> **Image Text Combo:**
> - Image: European destination photo (e.g. cash/Euro notes in front of a European scene)
> - H2: **"Ready to Buy Euros"**
> - Body: **"Heading to Spain for tapas or Germany for Oktoberfest, having Euro cash in hand saves stress on arrival. You can order online and collect in-store, or buy directly from one of our 90+ branches."**
> - Two CTAs side by side: **"Find A Store Near You"** (secondary, green outline) | **"Order Online"** (secondary, green outline)
>
> **Today's Rate widget** (use the `Today's Rate` component):
> - Cash rate row: **"Cash rate"** label, **"1 AUD = 0.5921 EUR"**, green **"Buy online"** button
> - Card rate row: **"Card rate"** label, **"1 AUD = 0.5745 EUR"**, **"Reload card"** + **"Buy new card"** buttons
> - Currency info row:
>   - Code: **EUR**
>   - Symbol: **€**
>   - Coins: **Cents & Euros - 1c, 2c, 5c, 10c, 20c, 50c, €1, €2**
>   - Banknotes: **Euros - €5, €10, €20, €50, €100, €200, €500**

---

### PROMPT 8: Order Online Sections
> Two rich text blocks with accompanying images:
>
> **Block 1 — Home Delivery:**
> - H2: **"Order Euros Online for Home Delivery"**
> - Body: **"Want to skip the queues and sort your travel money without leaving the house? Ordering Euros (EUR) online for home delivery is the most convenient way to get prepared before your trip. Whether you're planning to splurge in Paris, shop in Milan, or wander through Lisbon, Travel Money Oz lets you lock in your AUD to Euro exchange rate and have your cash delivered straight to your door — safely and securely."**
>
> **Block 2 — In-Store Pickup** (Image Text Combo — image left, text right):
> - Image: European destination photo (Dubrovnik, Croatia)
> - H3: **"Order Euros Online for In-Store Pickup"**
> - Body: **"Need your travel money sooner? You can also order Euros online for pickup at one of over 90 Travel Money Oz stores across Australia. Select locations even offer same-day pickup, perfect for last-minute plans. Lock in today's AUD to EUR exchange rate, then collect your Euros at a time that suits you — no stress, no surprises."**

---

### PROMPT 9: Ways to Exchange — 3 Cards
> Use three **Card / Basic** components in a horizontal row (341px each, 32px gap between).
>
> **Card 1:**
> - Image: European city photo (Barcelona street scene)
> - H3: **"Same Day Delivery Foreign Cash"**
> - Body: **"Buy EUR online and have it delivered straight to your home or office."**
> - CTA link: **"Order Same Day Delivery →"** (green text with arrow)
>
> **Card 2:**
> - Image: European city photo (Barcelona or similar)
> - H3: **"Click and collect Foreign Cash"**
> - Body: **"Reserve your EUR online and pick it up at a convenient Travel Money location near you."**
> - CTA link: **"Reserve Now, Collect In-Store →"** (green text with arrow)
>
> **Card 3:**
> - Image: Person using Currency Pass travel money card in Europe (Positano, Italy backdrop)
> - H3: **"Load a Currency Pass Travel Money Card"**
> - Body: **"Reload your travel money card with EUR online for a secure and convenient travel experience."**
> - CTA link: **"Load Your Travel Money Card →"** (green text with arrow)

---

### PROMPT 10: Euro to AUD + Buy Back Bonus
> Two **Image Text Combo** blocks stacked:
>
> **Block 1 — Sell Back:**
> - H2: **"Euro to AUD – Convert Euros to Australian Dollars"**
> - Body: **"Got leftover Euros from your trip? Travel Money Oz makes it easy to convert Euro to AUD at great rates. Whether you're exchanging a handful of notes or converting a larger amount, we offer a fast, reliable way to turn your Euros to Australian Dollars — all with expert service at over 90 locations nationwide."**
>
> **Block 2 — Buy Back Bonus** (image left, text right):
> - Image: Buy Back Bonus promotional graphic
> - H3: **"Buy Back Bonus for Better EUR to AUD Value"**
> - Body: **"If you originally purchased your Euros from Travel Money Oz, you may qualify for our Buy Back Bonus. Just bring in your receipt when you return, and we'll offer a boosted EUR to AUD rate — giving you extra value for your leftover travel money."**

---

### PROMPT 11: UNICEF Small Change Big Difference
> **Image Text Combo** (image left, text right):
> - Image: UNICEF program graphic (children / donation theme)
> - H2: **"Small Change Big Difference Program"**
> - Body: **"Returned from your trip with leftover foreign coins? Change a life by donating them to our Small Change Big Difference program instore which goes to UNICEF to help children all around the world."**
> - CTA: **"Donate foreign coins →"** (green text link with arrow)

---

### PROMPT 12: USP Icons Strip
> Four icon-and-text cards in a single horizontal row (248px each, equal spacing across 1088px content width).
>
> Each card has: Material icon (34px, green), heading (Roboto SemiBold 16px), body text (Roboto Regular 14px, grey).
>
> 1. Shield icon — **"No Hidden Fees"** — "Transparent pricing ensures you get the best deal."
> 2. Handshake/people icon — **"Friendly Personalised Service"** — "Foreign exchange by travellers, for travellers"
> 3. Lock/shield icon — **"Secure Transactions"** — "Your money is safe with our secure systems."
> 4. Book/guide icon — **"Free Travel Money Guides"** — "Read our free guides to help you navigate the world of foreign exchange."

---

### PROMPT 13: Holiday Budget Calculator
> Use the existing **HBC Widget/Desktop** component as-is. This is a global widget — no EUR-specific changes needed.
>
> Content: "Holiday Budget Calculator" heading, 5-step wizard (Travel Information → Food & Drinks → Shopping → Transport → Summary), destination search, travel style selector, people/days dropdowns, Add destination / Reset / Next buttons.

---

### PROMPT 14: SEO Content — How to Save Money
> Rich text block (1088px wide):
>
> - H3: **"How to Save Money for Your Next European Holiday"**
> - Body: **"Want to explore Europe without overspending? Here are some practical tips to help you make the most of your trip:"**
> - Bullet list:
>   - **"Travel during off-peak seasons (November to March). Flights and hotels are way cheaper, and you'll avoid the crowds. It's perfect for exploring Europe at your own pace, especially before summer madness kicks in."**
>   - **"Dining out? Skip the expensive tourist traps and go for street food or local favourites. Whether it's a quick sandwich in Berlin, a bowl of soup in Budapest, or a simple pastry in Lisbon, you can find delicious and affordable options everywhere."**
>   - **"Public transport is super affordable and efficient in Europe. Hop on a metro, local bus, or train — it's the best way to get around cities like Berlin, Barcelona, or Budapest without blowing your budget."**
>   - **"Free attractions? Absolutely! Take advantage of free attractions like city parks, historic squares. You can check out the Eiffel Tower gardens, stroll the Spanish Steps, and explore Prague's Old Town — all for zero cost but full of European charm."**
>   - **"Check to see if there are free museum days! You'll experience a lot of local culture without paying a cent."**
>   - **"Convert AUD to EUR with Travel Money Oz to get the best exchange rate and make your Euros go further on your trip."**

---

### PROMPT 15: SEO Content — All About the Euro
> Rich text blocks with images:
>
> **Block 1:**
> - H2: **"All about the Euro"**
> - H3: **"What countries use the Euro currency?"**
> - Body: **"You'll need to swap AUD to Euro when travelling to any of these countries:"**
> - Body: **"Andorra, Austria, Belgium, Cyprus, Estonia, Finland, France, Germany, Greece, Ireland, Italy, Kosovo, Latvia, Lithuania, Luxembourg, Malta, Monaco, Montenegro, the Netherlands, Portugal, San Marino, Slovakia, Slovenia, Spain, and Vatican City."**
> - Image: EUR repeating pattern card graphic
>
> **Block 2:**
> - H3: **"Euro notes and coins"**
> - Bullets:
>   - "Like the Australian Dollar, the Euro (€) is divided into 100 cents (c)."
>   - "Euro coins come in 1c, 2c, 5c, 10c, 20c, 50c, €1, and €2 denominations. Euro notes are available in €5, €10, €20, €50, €100, €200, and €500 denominations"
>   - "While there have been calls for introducing €1 and €2 banknotes, these aren't currently printed (fun fact: producing these would likely cost more than €1 per note!)."
>
> **Block 3:**
> - H3: **"Fun facts about Euro banknotes"**
> - Bullets:
>   - "Euro coins have a shared design on one side, but each country adds its own special touch on the other, featuring national symbols, landmarks, or historical figures that reflect its unique culture."
>   - "Euro banknotes feature architectural styles from different periods of European history, including Classical, Romanesque, Gothic, Renaissance, Baroque, and Modern architecture, but they do not depict specific buildings."
>
> **Block 4:**
> - H3: **"Travel Money Trivia"**
> - Bullets:
>   - "The Euro currency was introduced in 1999, though the notes and coins weren't physically issued until 2002. Croatia was the most recent country to adopt the Euro, having done so in 2023. Better late than never!"
>   - "Euro notes are made from pure cotton fibre, which makes them more durable and gives them their unique texture."
>   - "Each Euro note has a distinctive colour and design that represents a different artistic period of European architecture. Very fancy indeed."
>   - "The reverse (tails) side of every Euro coin features a map of Europe and the coin's value. However, each country that uses the Euro has its own designs for the obverse (heads) side."

---

### PROMPT 16: Travel Blog Cards (3 cards)
> Three **Card / Basic** components in a horizontal row:
>
> **Card 1:**
> - Image: European travel scene (hidden costs theme)
> - H3: **"Avoid Hidden Extras in Europe"**
> - Body: **"We've put together a few tips to shine some light on the extras you may come across in Europe."**
> - CTA: **"Learn More →"** (green text link)
>
> **Card 2:**
> - Image: France/shopping scene
> - H3: **"Best Shopping Spots in Europe"**
> - Body: **"We can tell you where to find the best destinations for shopping in Europe."**
> - CTA: **"Learn More →"** (green text link)
>
> **Card 3:**
> - Image: Italy panoramic
> - H3: **"How Much Money Do I Need To Travel Europe?"**
> - Body: **"Let's take a look at a few examples of different kinds of holidays you could have in Europe"**
> - CTA: **"Learn More →"** (green text link)

---

### PROMPT 17: FAQ Accordion
> Use the **Accordion** component (1088px wide):
>
> - Section heading: **"FAQs about buying and exchanging Euros"**
> - 5 expandable items:
>
> **Q1: "How much is 1 AUD in EUR?"**
> A: "The exchange rate from 1 Australian Dollar (AUD) to Euro (EUR) changes frequently (multiple times a day), based on global market conditions. For the most accurate and up-to-date rate, check the live AUD to EUR rate on the Travel Money Oz website before buying. This ensures you lock in a competitive rate at the right time for your travel plans."
>
> **Q2: "Where can I buy Euros in Australia?"**
> A: "You can buy Euros (EUR) at any Travel Money Oz store across Australia — there are over 90 locations to choose from. Prefer to plan ahead? Order online and choose either home delivery or click-and-collect. It's a secure and convenient way to get your Euros sorted before your trip to Europe."
>
> **Q3: "Should I exchange AUD to EUR in Australia or in Europe?"**
> A: "It's often smarter to exchange AUD to EUR in Australia before your trip. Doing so lets you lock in a better rate and avoid high airport fees or poor exchange options overseas. With Travel Money Oz, you can order Euros in advance and travel with peace of mind, knowing your currency is ready when you are."
>
> **Q4: "How do I convert leftover Euros back to AUD?"**
> A: "If you've returned from Europe with spare cash, bring your Euros to any Travel Money Oz store to convert them back into Australian Dollars. If you originally bought your Euros from us, you might even be eligible for our Buy Back Bonus, which gives you a better rate when exchanging unused currency."
>
> **Q5: "What affects the AUD vs EUR exchange rate?"**
> A: "The AUD to EUR exchange rate is influenced by several economic factors, including interest rate decisions by the European Central Bank and the Reserve Bank of Australia, commodity market movements, inflation rates, and geopolitical events."

---

### PROMPT 18: Trustpilot Carousel
> Use the existing **Trust Pilot/Carousel** component as-is. This is a global widget.
>
> Content: "Excellent" Trustpilot badge (green stars), "Based on 456 reviews", 3 review cards showing 5-star ratings with reviewer names and snippets.

---

### PROMPT 19: Newsletter CTA Banner
> Use the **Component Sub Header** component. Full width, dark/black background, 256px tall.
>
> - H3: **"Join the Travel Money Club"** (white text, Prelo Slab, left side)
> - Body: **"Sign up to automatically go into a monthly draw to win $500. You'll also get exclusive travel money offers, tips & tricks and much more!"** (white text, right side)
> - CTA: **"Subscribe →"** (green primary button)

---

### PROMPT 20: Footer
> Use the existing **Footer** component as-is. This is a global component.
>
> Content: Travel Money Oz + Flight Centre logos, link columns (Find a Store, Legal, Customer Service, Who we are), Follow Us social icons (Instagram, Facebook), copyright text, legal disclaimers.

---

## Full-Page Assembly Prompt

If using a single prompt to generate the entire page at once:

> **Reference design:** Use the existing USD currency landing page as the structural template — match its layout, spacing, and component usage exactly, replacing only the content for EUR:
> → https://www.figma.com/design/f8wtYRL2kTqsBCVUI4fnug/Travel-Money-DCA---Rhythm-Master-Components?node-id=648-245765
>
> Design a full desktop landing page (1440px wide) for the **Travel Money Oz AUD to EUR exchange rate page**. Use the Rhythm Master Components design system with green primary (`#038712`), Prelo Slab headings, and Roboto body text. Source all components from the referenced file.
>
> The page sections from top to bottom are:
> 1. Header Nav (global component)
> 2. Breadcrumb: Home > Rates > EUR
> 3. Hero Banner — dark left panel with H1 "Convert AUD to EUR Exchange Rate", European landmark photo right
> 4. Convert Currency Layout — light green bg, white currency converter card (left) with Cash/Card tabs, EUR selected, rate 1 AUD = 0.5921 EUR, "Buy online" CTA; feature text (right) "Best Place to Buy Euros in Australia"
> 5. Rich text — "Live AUD to EUR Exchange Rate Today" + "Where to Buy Euros Near Me" body copy
> 6. "How to Get the Best AUD to EUR Exchange Rate" + Price Beat Guarantee image-text combo
> 7. "Ready to Buy Euros" with destination image + Today's Rate widget (cash 0.5921, card 0.5745, EUR denominations)
> 8. "Order Euros Online" — Home Delivery text + In-Store Pickup image-text combo
> 9. 3 Cards row: Same Day Delivery, Click & Collect, Currency Pass Card — European photos
> 10. "Euro to AUD" sell-back copy + Buy Back Bonus image-text combo
> 11. UNICEF Small Change Big Difference — image-text combo with "Donate foreign coins" CTA
> 12. 4 USP icon cards: No Hidden Fees, Friendly Service, Secure Transactions, Free Guides
> 13. Holiday Budget Calculator (global widget)
> 14. "How to Save Money for Your Next European Holiday" — 6 bullet tips
> 15. "All about the Euro" — countries list, notes & coins, fun facts, trivia
> 16. 3 Blog cards: Avoid Hidden Extras, Best Shopping Spots, How Much Money for Europe
> 17. FAQ Accordion — 5 EUR-specific questions with full answers
> 18. Trustpilot Carousel (global widget)
> 19. Newsletter CTA — "Join the Travel Money Club" dark banner with Subscribe button
> 20. Footer (global component)
