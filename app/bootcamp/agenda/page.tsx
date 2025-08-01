"use client"
import React from "react";
import { useRouter } from "next/navigation";

const weeks = [
  { id:1, label: "Week 1", bg: "bg-blue-100", iconBg: "bg-white", iconColor: "text-blue-300", img: "bg-blue-400" },
  { id:2, label: "Week 2", bg: "bg-cover bg-center", iconBg: "bg-blue-900", iconColor: "text-white", img: "#40F29A" },
  { id:3, label: "Week 3", bg: "bg-cover bg-center", iconBg: "bg-white", iconColor: "text-blue-300", img: "bg-blue-400" },
  { id:4, label: "Week 4", bg: "bg-blue-100", iconBg: "bg-white", iconColor: "text-blue-300", img: "bg-blue-400" },
];

export default function AgendaPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0F0F1C]">
      {/* Left side: 40% on desktop */}
      <div className="hidden lg:block w-1/3 min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bootcamp/sideThree.png')" }} />
      {/* Right side: 60% on desktop */}
      <div className="flex-1 lg:w-3/4 flex items-center justify-center p-2 sm:p-6 lg:p-12">
        <div
          className="w-full max-w-[600px] grid grid-cols-2 grid-rows-2 gap-6"
          style={{ aspectRatio: "1/1", maxHeight: 600 }}
        >
          {weeks.map((week, i) => (
            <div
              key={week.label}
              className={`relative flex flex-col justify-end overflow-hidden cursor-pointer ${week.img}`}
              style={{
                borderRadius: 32,
                aspectRatio: "1/1",
                backgroundColor: week.img,
                minWidth: 0,
                minHeight: 0,
                boxShadow: "0 0 0 1.5px #0001",
                backgroundImage: "url('/bootcamp/bgOne.png')",
              }}
              onClick={() => router.push(`/bootcamp/agenda/${week.id}`)}
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
                  style={{ color: week.img && i==1 ? "#0D1B2A" : "#fff" }}
                >
                  {week.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 