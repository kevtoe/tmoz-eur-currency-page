import { F1, F2 } from "@/lib/constants";

export function TrustpilotSection() {
  return (
    <div className="w-full border-t border-[#dfe2e6] py-[48px] px-[16px] md:px-[32px] lg:px-[64px]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-[32px] items-center">
        <div className="flex flex-col items-center gap-[8px] shrink-0 min-w-[180px]">
          <p className="text-[24px] font-[700] text-black" style={F2}>
            Great
          </p>
          <div className="flex gap-[2px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-[32px] h-[32px] bg-[#00b67a] flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M7 0l2.16 4.38L14 5.1l-3.5 3.41.83 4.82L7 11.07l-4.33 2.27.83-4.82L0 5.1l4.84-.72L7 0z"
                    fill="white"
                  />
                </svg>
              </div>
            ))}
          </div>
          <p className="text-[14px] text-black" style={F2}>
            Based on <strong className="underline">6,570 reviews</strong>
          </p>
          <div className="flex items-center gap-[4px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="#00b67a"
              />
            </svg>
            <span className="font-[700] text-[16px] text-black" style={F2}>
              Trustpilot
            </span>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-[16px]">
          {[
            {
              name: "Stephen Kendall",
              date: "16 March",
              title: "Fantastic",
              body: "So easy to Order, on line, and so easy to pick up. Fantastic service, my pic...",
            },
            {
              name: "Hans",
              date: "16 March",
              title: "Easy to deal with and good rates!",
              body: "Easy to deal with and gave me a good rate with no hidden fees, charges or...",
            },
            {
              name: "Sanaullah Muhammad",
              date: "15 March",
              title: "Great customer service",
              body: "Great customer service",
            },
            {
              name: "Thomas",
              date: "14 March",
              title: "Purchase and collection of curr...",
              body: "Only purchase was straight forward. Could choose to pay with debit or...",
            },
          ].map((r) => (
            <div key={r.name} className="p-[16px] flex flex-col gap-[8px]">
              <div className="flex gap-[2px]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-[24px] h-[24px] bg-[#00b67a] flex items-center justify-center"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M7 0l2.16 4.38L14 5.1l-3.5 3.41.83 4.82L7 11.07l-4.33 2.27.83-4.82L0 5.1l4.84-.72L7 0z"
                        fill="white"
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <p
                className="font-[700] text-[16px] text-[#212121]"
                style={F2}
              >
                {r.title}
              </p>
              <p
                className="text-[14px] leading-[20px] text-[#4a5056] line-clamp-2"
                style={F2}
              >
                {r.body}
              </p>
              <p className="text-[13px] text-[#6e757c]" style={F2}>
                {r.name}, {r.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
