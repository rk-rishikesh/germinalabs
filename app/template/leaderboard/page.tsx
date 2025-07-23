import React from "react";

const leaderboard = [
  { address: "0x000" },
  { address: "0x000" },
  { address: "0x000" },
  { address: "0x000" },
  { address: "0x000" },
  { address: "0x000" },
  { address: "0x000" },
  { address: "0x000" },  
  { address: "0x000" },
  { address: "0x000" },
  { address: "0x000" },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left half: placeholder for image/pattern */}
      <div className="flex-1 min-h-[200px] bg-black flex items-center justify-center">
        {/* Add your image or pattern here later */}
      </div>
      {/* Right half: leaderboard list, heading fixed, cards scrollable */}
      <div className="flex-1 bg-blue-500 text-white flex flex-col items-center justify-start p-0 h-screen">
        <div className="w-full max-w-4xl flex flex-col h-screen">
          {/* Sticky Heading */}
          <div className="bg-blue-500 z-10 sticky top-0 px-6 sm:px-12 pt-8 pb-4">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-wide">LEADERBOARD</h2>
          </div>
          {/* Scrollable List */}
          <ul className="flex flex-col gap-6 px-6 sm:px-12 pb-8 overflow-y-auto" style={{ flex: 1, minHeight: 0 }}>
            {leaderboard.map((item, idx) => (
              <li key={idx} className="flex items-center rounded-2xl bg-neutral-800 px-8 py-6 w-full shadow-sm">
                {/* Rank number */}
                <div className="text-green-300 font-medium text-2xl w-10 text-left">
                  {idx + 1}
                </div>
                {/* Address */}
                <div className="flex-1 text-xl font-medium ml-4">
                  {item.address}
                </div>
                {/* Arrow icon in circle */}
                <div className="flex-shrink-0 ml-4">
                  <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center">
                    <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 