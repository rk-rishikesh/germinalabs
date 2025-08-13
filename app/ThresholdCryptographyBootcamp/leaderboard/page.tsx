"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type LeaderboardItem = {
  address: string;
  score: number;
};

export default function LeaderboardPage() {
  const router = useRouter();
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('/api/leaderboard');
        if (response.ok) {
          const data = await response.json();
          setLeaderboard(data);
        } else {
          console.error('Failed to fetch leaderboard data');
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0F0F1C]">
        <div className="hidden lg:block min-w-1/3 min-h-screen bg-cover bg-center fixed z-1" style={{ backgroundImage: "url('/bootcamp/sideThree.png')" }} />
        <div className="flex-1 lg:w-3/4 flex items-center bg-blue-500 text-white justify-center p-2 sm:p-6 lg:p-12 right-0 sm:fixed">
          <div className="w-full max-w-4xl flex flex-col h-screen px-3">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-10 mt-2 tracking-wide text-white">LEADERBOARD</h2>
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-md ml-4 mb-10 cursor-pointer"
              onClick={() => router.push('/ThresholdCryptographyBootcamp')}
            >
              <img
                src="/bootcamp/back.svg"
                alt="Profile"
                style={{ width: "100%", height: "100%", borderRadius: '9999px', objectFit: 'cover' }}
              />
            </div>
          </div>
            <div className="flex items-center justify-center flex-1">
              <div className="text-xl">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#0F0F1C]">
      {/* Left half: placeholder for image/pattern */}
      <div className="hidden lg:block min-w-1/3 min-h-screen bg-cover bg-center fixed z-1" style={{ backgroundImage: "url('/bootcamp/sideThree.png')" }} />

      {/* Right half: leaderboard list, heading fixed, cards scrollable */}
      <div className="flex-1 lg:w-3/4 flex items-center bg-blue-500 text-white justify-center p-2 lg:p-12 right-0 sm:fixed">

        <div className="w-full max-w-4xl flex flex-col h-screen sm:px-3 lg:px-8">
          {/* Sticky Heading */}
          <div className="bg-blue-500 z-10 sticky top-0 px-6 sm:px-12 pt-2 pb-4 flex flex-row justify-between items-center">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-wide -mt-8">LEADERBOARD</h2>
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-md ml-4 mb-10 cursor-pointer"
              onClick={() => router.push('/ThresholdCryptographyBootcamp')}
            >
              <img
                src="/bootcamp/back.svg"
                alt="Profile"
                style={{ width: "100%", height: "100%", borderRadius: '9999px', objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Scrollable List */}
          <ul className="flex flex-col gap-6 px-6 sm:px-12 pb-24 overflow-y-auto scrollbar-hide" style={{ flex: 1, minHeight: 0 }}>
            {leaderboard.map((item, idx) => (
              <li key={idx} className="flex items-center rounded-2xl bg-blue-900 px-8 py-6 w-full shadow-sm">
                {/* Rank number */}
                <div className="text-blue-300 font-medium text-2xl w-10 text-left">
                  {idx + 1}
                </div>
                {/* Address and Score */}
                <div className="flex-1 min-w-0 ml-4">
                  <span className="block truncate text-base sm:text-xl font-medium">{item.address}</span>
                </div>
                {/* Arrow icon in circle */}
                <div className="flex-shrink-0 ml-4">
                  <div className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center p-2 text-sm">
                    {item.score}
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