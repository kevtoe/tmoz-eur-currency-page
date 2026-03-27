import { F2 } from "@/lib/constants";

export function Arrow({
  color = "#222529",
  s = 16,
}: {
  color?: string;
  s?: number;
}) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#a)">
        <path
          fill={color}
          d="M10.707 2.293a1 1 0 0 0-1.414 1.414L12.586 7H1a1 1 0 0 0 0 2h11.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414z"
        />
      </g>
    </svg>
  );
}

export function Btn({
  children,
  secondary,
  small,
  onClick,
}: {
  children: React.ReactNode;
  secondary?: boolean;
  small?: boolean;
  onClick?: () => void;
}) {
  const base = small
    ? "px-[16px] py-[8px] text-[14px] gap-[8px]"
    : "px-[24px] py-[12px] text-[16px] gap-[12px]";
  if (secondary)
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center ${base} rounded-[24px] border-2 border-[#038712] text-[#038712] font-[700] cursor-pointer hover:bg-[#038712] hover:text-white transition-colors`}
        style={F2}
      >
        {children}
      </button>
    );
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center ${base} rounded-[24px] bg-[#038712] text-white font-[700] cursor-pointer hover:bg-[#026c0e] transition-colors`}
      style={F2}
    >
      {children}
    </button>
  );
}

export function TxtLink({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-[8px] text-[#038712] font-[700] text-[16px] cursor-pointer"
      style={F2}
    >
      {children}
      <Arrow color="#038712" />
    </span>
  );
}
