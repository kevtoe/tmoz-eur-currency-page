import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Convert AUD to EUR Exchange Rate | Buy Euros Online | Travel Money Oz",
  description:
    "Get the best AUD to EUR exchange rate with Travel Money Oz. Buy Euros online for home delivery or in-store pickup at 90+ locations across Australia. Price Beat Guarantee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
