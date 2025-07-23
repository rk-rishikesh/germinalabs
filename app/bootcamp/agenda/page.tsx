"use client"
import React from "react";
import { useRouter } from "next/navigation";

const weeks = [
  { id:1, label: "Week 1", bg: "bg-blue-100", iconBg: "bg-blue-900", iconColor: "text-blue-300" },
  { id:2, label: "Week 2", bg: "bg-cover bg-center", img: true, iconBg: "bg-white", iconColor: "text-blue-500" },
  { id:3, label: "Week 3", bg: "bg-cover bg-center", img: true, iconBg: "bg-blue-900", iconColor: "text-blue-300" },
  { id:4, label: "Week 4", bg: "bg-blue-100", iconBg: "bg-blue-900", iconColor: "text-blue-300" },
];

// Placeholder image URLs for demo (replace with your own later)
const images = [
  null,
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // fern
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // leaf
  null,
];

export default function AgendaPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-blue-500">
      {/* Left half: only on desktop */}
      <div className="hidden lg:block bg-blue-950 flex-1 min-h-screen" />
      {/* Right half: grid always visible, centered */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 lg:p-12">
        <div
          className="w-full max-w-[600px] grid grid-cols-2 grid-rows-2 gap-6"
          style={{ aspectRatio: "1/1", maxHeight: 600 }}
        >
          {weeks.map((week, i) => (
            <div
              key={week.label}
              className={`relative flex flex-col justify-end overflow-hidden cursor-pointer`}
              style={{
                borderRadius: 32,
                aspectRatio: "1/1",
                background: week.img ? `url(${images[i]}) center center / cover no-repeat` : undefined,
                backgroundColor: !week.img ? "#E9FFE0" : undefined,
                minWidth: 0,
                minHeight: 0,
                boxShadow: "0 0 0 1.5px #0001",
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
                  style={{ color: week.iconBg === "bg-white" ? "#1976D2" : "#90CAF9" }}
                >
                  ↗
                </span>
              </div>
              {/* Week label */}
              <div className="p-6 pb-4">
                <span
                  className="font-bold text-2xl"
                  style={{ color: week.img && i === 1 ? "#fff" : "#0D1B2A", textShadow: week.img ? "0 2px 8px #000a" : undefined }}
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