import { F1, F2 } from "@/lib/constants";

export function Breadcrumb() {
  return (
    <div className="bg-black w-full px-[16px] md:px-[32px] lg:px-[64px] py-[20px]">
      <div
        className="max-w-[1600px] mx-auto flex items-center gap-[8px] text-[14px]"
        style={F2}
      >
        <span className="text-white/75 cursor-pointer flex items-center gap-[4px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Home
        </span>
        <span className="text-[#cfd4d9]">/</span>
        <span className="text-white/75 cursor-pointer">Rates</span>
        <span className="text-[#cfd4d9]">/</span>
        <span className="text-white">EUR</span>
      </div>
    </div>
  );
}
