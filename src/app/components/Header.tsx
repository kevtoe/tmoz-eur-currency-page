import svgPaths from "@/imports/svg-mgl0b1epdy";
import { F2 } from "@/lib/constants";
import { Btn } from "./ui";

function UtilityBar() {
  return (
    <div className="bg-[#222529] w-full">
      <div className="max-w-[1600px] mx-auto flex items-center justify-end gap-[24px] px-[16px] md:px-[32px] lg:px-[64px] py-[8px]">
        {[
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6l-10 7L2 6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            label: "CONTACT US",
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect
                  x="5"
                  y="2"
                  width="14"
                  height="20"
                  rx="2"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <line
                  x1="12"
                  y1="18"
                  x2="12"
                  y2="18.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ),
            label: "1300 426 997",
          },
          {
            icon: (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                <line
                  x1="12"
                  y1="17"
                  x2="12"
                  y2="17.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ),
            label: "FAQS",
          },
        ].map((item) => (
          <span
            key={item.label}
            className="flex items-center gap-[6px] text-[12px] text-white/90 cursor-pointer hover:text-white"
            style={F2}
          >
            {item.icon}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="bg-black w-full">
      <UtilityBar />
      <div className="flex items-center justify-between px-[16px] md:px-[32px] lg:px-[64px] py-[12px] max-w-[1600px] mx-auto">
        <div className="h-[23px] w-[174px] relative shrink-0">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 174 23.1685"
          >
            {[
              svgPaths.p111bc770,
              svgPaths.p3d9eca80,
              svgPaths.p1c0c1b80,
              svgPaths.p250e59c0,
              svgPaths.pb1a1300,
              svgPaths.p291aa300,
              svgPaths.p19b8b400,
              svgPaths.p10503180,
              svgPaths.p2bbd98c0,
              svgPaths.p27b5f180,
            ].map((d, i) => (
              <path key={i} d={d} fill="white" />
            ))}
          </svg>
        </div>
        <nav className="hidden lg:flex items-center gap-[4px]">
          {["Buy Currency", "Travel Money Card", "FX Tools & More"].map(
            (t) => (
              <span
                key={t}
                className="flex items-center gap-[4px] px-[14px] py-[10px] rounded-full text-[14px] font-[600] text-white cursor-pointer hover:bg-white/10 transition-colors"
                style={F2}
              >
                {t}
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )
          )}
        </nav>
        <div className="flex items-center gap-[16px]">
          <div className="hidden lg:flex items-center gap-[16px]">
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" />
              <path
                d="M21 21l-4.35-4.35"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="9" cy="21" r="1" fill="white" />
              <circle cx="20" cy="21" r="1" fill="white" />
              <path
                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="hidden md:flex gap-[12px]">
            <button
              className="inline-flex items-center px-[16px] py-[8px] text-[14px] gap-[8px] rounded-[24px] border-2 border-white text-white font-[700] cursor-pointer hover:bg-white hover:text-black transition-colors"
              style={F2}
            >
              Find a Store
            </button>
            <Btn small>Order Online</Btn>
          </div>
          <button className="lg:hidden text-white p-[8px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
