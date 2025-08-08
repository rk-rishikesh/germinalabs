import React, { useRef, useEffect, useState } from "react";

const mentors = [
  {
    name: "Yolan Romailler",
    title: "Co-Founder & CSO, Randamu",
    img: "/bootcamp/mentors/one.png",
    bg: "bg-blue-900",
  },
  {
    name: "Patrick McClurg",
    title: "Co-Founder & CTO, Randamu",
    img: "/bootcamp/mentors/two.png",
    bg: "bg-blue-950",
  },
  {
    name: "Andrew Slack",
    title: "Head of Product, Randamu",
    img: "/bootcamp/mentors/three.png",
    bg: "bg-blue-500",
  },
  {
    name: "Dr. Nemitari Ajienka",
    title: "Full-Stack Engineer, Randamu",
    img: "/bootcamp/mentors/four.png",
    bg: "bg-blue-950",
  },
  {
    name: "Robin Müller",
    title: "Full-Stack Engineer, Randamu",
    img: "/bootcamp/mentors/five.png",
    bg: "bg-blue-500",
  },
  {
    name: "Longfei Wang",
    title: "Solution Architect, Germina Labs",
    img: "/bootcamp/mentors/six.png",
    bg: "bg-blue-900",
  },
  {
    name: "Rishikesh Kale",
    title: "Developer Advocate, Germina Labs",
    img: "/bootcamp/mentors/seven.png",
    bg: "bg-blue-500",
  },
];

export default function MentorGrid() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} mt-24 mb-12`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-blue-500 mb-10">Mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className={`rounded-[40px] ${mentor.bg} p-8 flex flex-col items-start min-h-[260px]`}
            >
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-24 h-24 rounded-[28px] object-cover mb-6"
              />
              <div className="text-2xl font-bold text-white mb-1">{mentor.name}</div>
              <div className="text-lg text-white/80">{mentor.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 