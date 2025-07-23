import React, { useRef, useEffect, useState } from "react";

const mentors = [
  {
    name: "Full Name",
    title: "Title",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    bg: "bg-green-900",
  },
  {
    name: "Full Name",
    title: "Title",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    bg: "bg-black",
  },
  {
    name: "Full Name",
    title: "Title",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    bg: "bg-green-500",
  },
  {
    name: "Full Name",
    title: "Title",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    bg: "bg-black",
  },
  {
    name: "Full Name",
    title: "Title",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    bg: "bg-green-500",
  },
  {
    name: "Full Name",
    title: "Title",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    bg: "bg-green-900",
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
        <h2 className="text-5xl font-bold text-green-900 mb-10">Mentors</h2>
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