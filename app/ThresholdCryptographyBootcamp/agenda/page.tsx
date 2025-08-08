"use client"
import React from "react";
import { useRouter } from "next/navigation";

const weeks = [
  { id: 1, label: "Week 1", bg: "bg-blue-100", iconBg: "bg-white", iconColor: "text-blue-300", img: "bg-blue-400" },
  { id: 2, label: "Week 2", bg: "bg-cover bg-center", iconBg: "bg-blue-900", iconColor: "text-white", img: "#40F29A" },
  { id: 3, label: "Week 3", bg: "bg-cover bg-center", iconBg: "bg-white", iconColor: "text-blue-300", img: "bg-blue-400" },
  { id: 4, label: "Week 4", bg: "bg-blue-100", iconBg: "bg-white", iconColor: "text-blue-300", img: "bg-blue-400" },
];

export default function AgendaPage() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0F0F1C]">
        {/* Left side: 40% on desktop */}
        <div className="hidden lg:block min-w-1/3 min-h-screen bg-cover bg-center fixed" style={{ backgroundImage: "url('/bootcamp/sideThree.png')" }} />
        {/* Right side: 60% on desktop */}
        <div className="flex-1 lg:w-3/4 flex items-center justify-center p-2 sm:p-6 lg:p-12 right-0 sm:fixed lg:mt-12">
          <div
            className="w-full max-w-[600px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-6 grid-container lg:ml-24"
            style={{
              maxHeight: 600,
              aspectRatio: "auto"
            }}
          >
            {weeks.map((week, i) => (
              <div
                key={week.label}
                className={`relative flex flex-col justify-end overflow-hidden cursor-pointer h-30 md:aspect-square ${week.img} min-w-0 min-h-0 sm:min-w-[250px] sm:min-h-[250px]`}
                style={{
                  borderRadius: 32,
                  backgroundColor: week.img,
                  boxShadow: "0 0 0 1.5px #0001",
                  backgroundImage: "url('/bootcamp/bgOne.png')",
                }}
                onClick={() => router.push(`/ThresholdCryptographyBootcamp/agenda/${week.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") router.push(`/bootcamp/agenda/${week.id}`); }}
              >
                {/* Top-right icon */}
                <div
                  className={`absolute top-4 right-4 flex items-center justify-center`}
                  style={{ width: 48, height: 48, borderRadius: 9999, background: week.iconBg === "bg-white" ? "#fff" : "#1565C0" }}
                >
                  <span
                    className={`text-3xl ${week.iconColor}`}
                    style={{ color: week.iconBg === "bg-blue-900" ? "#fff" : "#1976D2" }}
                  >
                    ↗
                  </span>
                </div>
                {/* Week label */}
                <div className="p-6 pb-4">
                  <span
                    className="font-bold text-2xl"
                    style={{ color: week.img && i == 1 ? "#0D1B2A" : "#fff" }}
                  >
                    {week.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 