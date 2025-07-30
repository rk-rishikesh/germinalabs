"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import agendaData from "../data.json";

export default function AgendaDetailPage() {
  const router = useRouter();
  const params = useParams();
  const weekId = params.id as string;
  const weekKey = `week${weekId}` as keyof typeof agendaData;
  const week = agendaData[weekKey] || { name: '', agenda: [], task: { url: "#" } };
  const agenda = week.agenda || [];
  const taskUrl = week.task?.url || "#";
  const weekName = week.name || '';

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0F0F1C]">
      {/* Left side: 40% on desktop */}
      <div className="hidden lg:block w-1/3 min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bootcamp/sideThree.png')" }} />
      {/* Right side: 60% on desktop */}
      <div className="flex-1 lg:w-3/4 flex items-center justify-center p-2 sm:p-6 lg:p-12">
        <div className="w-full max-w-3xl pt-8 pb-8 lg:pt-0 lg:pb-0">
          {/* Week Name Heading */}
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-10 mt-2 tracking-wide">{weekName}</h2>
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-md ml-4 mb-10 cursor-pointer"
              onClick={() => router.push('/bootcamp/profile')}
            >
              <img
                src="/bootcamp/profile.jpg"
                alt="Profile"
                style={{ width: "100%", height: "100%", borderRadius: '9999px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <ul className="divide-y divide-blue-700 mb-12">
            {agenda.map((item, idx) => (
              <li key={idx} className="flex items-center py-6">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-blue-950 font-bold text-lg mr-6">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                {/* Title */}
                <div className="flex-1">
                  <span className="font-semibold text-xl sm:text-2xl">{item.title}</span>
                </div>
                {/* Date */}
                <div className="ml-4 text-lg sm:text-xl font-light tracking-wide">
                  {item.date}
                </div>
              </li>
            ))}
          </ul>

          {/* Task Section */}

          <div className="flex flex-row justify-between items-center">
            <div></div>
            <a
              href={taskUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center gap-x-4">

                Complete Weekly Task

                <div
                  className={`top-4 right-4 flex items-center justify-center`}
                  style={{ width: 32, height: 32, borderRadius: 9999, background: "#1565C0" }}
                >
                  <span
                    className={`text-xl white`}
                    style={{ color: "white" }}
                  >
                    ↗
                  </span>
                </div>

              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
} 