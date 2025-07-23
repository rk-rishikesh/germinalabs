import React from "react";

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-[#00E000] flex justify-center items-center">
      <div className="w-full h-screen flex flex-row items-center justify-center gap-2">
        {/* Left: Heading */}
        <div className="hidden lg:block bg-[#00E000] flex-1 min-h-screen" >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-green-900 mb-10">Mentors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              <div
                className="rounded-[40px] p-8 flex flex-col items-start min-h-[260px] bg-pink-200"
              >
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt={"NAME"}
                  className="w-24 h-24 rounded-[28px] object-cover mb-6"
                />
                <div className="text-2xl font-bold text-white mb-1">NAME</div>
                <div className="text-lg text-white/80">TITLE</div>
              </div>

            </div>
          </div>
        </div>
          {/* Center: Info Cards */}
          <div className="flex flex-row gap-8 px-12 w-1/2">
            <div className="flex flex-col gap-8 flex-[1.2]">
              {/* Bootcamp Info */}
              <div className=" bg-[#E9FFE0] rounded-[32px] flex items-center gap-4 px-10 py-8 min-h-[240px]" style={{ backgroundImage: "url('https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630')", backgroundSize: "cover", backgroundPosition: "center" }}>
              </div>
              {/* Points Earned */}
              <div className="w-[240px] bg-[#E9FFE0] rounded-[32px] flex flex-col items-start px-10 py-8 min-h-[180px]">
                <span className="text-[72px] font-black text-black leading-none">49</span>
                <span className="text-2xl font-medium text-black mt-2">Points Earned</span>
              </div>
              {/* Rank */}
              <div className="w-[240px] bg-[#E9FFE0] rounded-[32px] flex flex-col items-start px-10 py-8 min-h-[180px]">
                <span className="text-[72px] font-black text-black leading-none">02</span>
                <span className="text-2xl font-medium text-black mt-2">Rank</span>
              </div>
            </div>
            {/* Right: NFT Card */}
            <div className="flex-1 flex flex-col items-center justify-center min-w-[420px]">
              <div className="w-full max-w-[420px] bg-[#A6F4A6] rounded-[32px] flex flex-col items-center px-8 py-8 gap-6">
                <div className="w-full text-left text-3xl font-medium text-green-900 mb-2">NFT</div>
                {/* NFT Placeholder */}
                <div className="w-full aspect-square bg-[#E9FFE0] rounded-2xl mb-2" />
                {/* Buttons */}
                <div className="w-full flex flex-col gap-4 mt-2">
                  <button className="w-full bg-[#E9FFE0] rounded-2xl py-4 text-xl font-medium text-black transition hover:bg-green-200">
                    View On Explorer
                  </button>
                  <button className="w-full bg-[#E9FFE0] rounded-2xl py-4 text-xl font-medium text-black transition hover:bg-green-200">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
} 