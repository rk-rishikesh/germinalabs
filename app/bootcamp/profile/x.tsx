import React from "react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen bg-blue-100">
      <div className="w-full flex flex-col lg:flex-row min-h-screen">
        {/* Left: Wallet & Profile Info */}
        <div className="w-full lg:w-1/3 bg-blue-100 p-4 lg:p-8 overflow-y-auto" >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Profile</h2>
            
            {/* Wallet Connection Status */}
            <div className="bg-white rounded-[24px] p-6 mb-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-900">Wallet Connection</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Connected</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-sm text-blue-700 mb-2">Connected Address</div>
                <div className="font-mono text-blue-900 break-all">
                  0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm text-blue-700">Network:</span>
                  <span className="text-sm font-medium text-blue-900">Ethereum Mainnet</span>
                </div>
              </div>
            </div>

            {/* Player Stats */}
            <div className="grid grid-cols-1 gap-6 mb-6">
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

            {/* Recent Transactions */}
            <div className="bg-white rounded-[24px] p-6 shadow-lg">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-blue-900">Week 3 Task Completed</div>
                    <div className="text-sm text-blue-700">+10 points earned</div>
                  </div>
                  <div className="text-xs text-blue-700">2h ago</div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-blue-900">NFT Certificate Minted</div>
                    <div className="text-sm text-blue-700">Certificate #001</div>
                  </div>
                  <div className="text-xs text-blue-700">1d ago</div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-blue-900">Achievement Unlocked</div>
                    <div className="text-sm text-blue-700">Perfect Score Week 2</div>
                  </div>
                  <div className="text-xs text-blue-700">3d ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 