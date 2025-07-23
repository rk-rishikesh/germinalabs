import React from "react";

const agenda = [
  { title: "Add section title", date: "DD-MM-YY" },
  { title: "Add section title", date: "DD-MM-YY" },
  { title: "Add section title", date: "DD-MM-YY" },
  { title: "Add section title", date: "DD-MM-YY" },
  { title: "Add section title", date: "DD-MM-YY" },
  { title: "Add section title", date: "DD-MM-YY" },
];

export default function AgendaDetailPage() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left half: placeholder for image/pattern */}
      <div className="flex-1 min-h-[200px] bg-blue-950 flex items-center justify-center">
        {/* Add your image or pattern here later */}
      </div>
      {/* Right half: agenda list */}
      <div className="flex-1 bg-blue-900 text-white flex flex-col items-center justify-start p-6 sm:p-12">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-light mb-10 mt-2 tracking-wide">AGENDA</h2>
          <ul className="divide-y divide-blue-700">
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
        </div>
      </div>
    </div>
  );
} 