import { F1 } from "@/lib/constants";

export function HeroTitle() {
  return (
    <div className="bg-black w-full px-[16px] md:px-[32px] lg:px-[64px] pb-[16px]">
      <h1
        className="text-white text-center"
        style={{
          ...F1,
          fontSize: "clamp(36px, 8vw, 68px)",
          lineHeight: 1.2,
          fontWeight: 400,
        }}
      >
        Convert AUD to EUR Exchange Rate
      </h1>
    </div>
  );
}
