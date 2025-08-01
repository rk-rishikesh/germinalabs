import React from "react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="w-full h-screen flex flex-row items-center justify-center gap-2">
        {/* Left: Heading */}
        <div className="hidden lg:block bg-blue-100 flex-1 min-h-screen" >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-blue-900 mb-10 p-8">Hello</h2>

            {/* Player Stats */}
            <div className="grid grid-cols-1 gap-6 mb-6 p-8">
              {/* Player ID */}
              <div className="bg-white rounded-[24px] p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Player ID</h3>
                    <div className="text-3xl font-black text-blue-900">#BC-2024-001</div>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎮</span>
                  </div>
                </div>
              </div>

              {/* Account Balance */}
              <div className="bg-white rounded-[24px] p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Account Balance</h3>
                    <div className="text-3xl font-black text-blue-900">2.45 ETH</div>
                    <div className="text-sm text-blue-700">≈ $4,890.50 USD</div>
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
              </div>

              {/* Bootcamp Progress */}
              <div className="bg-white rounded-[24px] p-6 shadow-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Bootcamp Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-blue-700">Overall Progress</span>
                      <span className="text-sm font-bold text-blue-900">75%</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-900">3</div>
                      <div className="text-sm text-blue-700">Weeks Done</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-900">1</div>
                      <div className="text-sm text-blue-700">Week Left</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Center: Info Cards */}
        <div className="flex flex-row gap-8 px-12 w-1/2">
          <div className="flex flex-col gap-8 flex-[1.2]">
            {/* Bootcamp Info */}
            <div
              className=" bg-blue-50 rounded-[32px] flex items-center gap-4 px-10 py-8 min-h-[240px] w-[240px]"
              style={{
                backgroundImage: "url('/bootcamp/heroBanner.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
            </div>
            {/* Points Earned */}
            <div className="w-[240px] bg-blue-50 rounded-[32px] flex flex-col items-start px-10 py-8 min-h-[180px]">
              <span className="text-[72px] font-black text-blue-900 leading-none">49</span>
              <span className="text-2xl font-medium text-blue-900 mt-2">Points Earned</span>
            </div>
            {/* Rank */}
            <div className="w-[240px] bg-blue-50 rounded-[32px] flex flex-col items-start px-10 py-8 min-h-[180px]">
              <span className="text-[72px] font-black text-blue-900 leading-none">02</span>
              <span className="text-2xl font-medium text-blue-900 mt-2">Rank</span>
            </div>
          </div>
          {/* Right: NFT Card */}
          <div className="flex-1 flex flex-col items-center justify-center min-w-[420px]">
            <div className="w-full max-w-[420px] bg-blue-200 rounded-[32px] flex flex-col items-center px-8 py-8 gap-6">
              <div className="w-full text-left text-3xl font-medium text-blue-900 mb-2">NFT</div>
              {/* NFT Placeholder */}
              <div className="w-full aspect-square bg-blue-50 rounded-2xl mb-2" style={{
                backgroundImage: "url('/bootcamp/nft.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} />
              {/* Buttons */}
              <div className="w-full flex flex-col gap-4 mt-2">
                <button className="w-full bg-blue-50 rounded-2xl py-4 text-xl font-medium text-blue-900 transition hover:bg-blue-200">
                  View On Explorer
                </button>
                <button className="w-full bg-blue-50 rounded-2xl py-4 text-xl font-medium text-blue-900 transition hover:bg-blue-200">
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