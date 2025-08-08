import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const templateConfig = {
    colors: {
        background: "#E3F0FF",
        leftBlock: "#1976D2",
        button: "#64B5F6",
        rightBlock1: "#1565C0",
        rightBlock2: "#B3D8FF",
        rightBlock3: "#1565C0",
        rightBlock4: "#1565C0",
        buttonText: "#fff",
        leftText: "#fff",
        rightText: "#fff",
    },
    left: {
        backgroundImage: "url('/bootcamp/heroBanner.svg')",
        buttonText: "Join Now",
        buttonLink: "#",
    },
    right: {
        logo1: "url('/bootcamp/logo1.svg')", // Replace with image URL or component
        logo2: "url('/bootcamp/logo2.svg')", // Replace with image URL or component
        startDate: "4th Aug",
        endDate: "1st Sep",
        rewards: "$1000 Prize Pool",
    },
};

export default function Hero() {
    const config = templateConfig;
    const router = useRouter();

    return (
        <div
            style={{
                background: config.colors.background,
                minHeight: "100vh",
                boxSizing: "border-box",
            }}
            className="flex items-center justify-center px-2 sm:px-6 py-8"
        >
            <div className="w-full max-w-[1440px]">
                {/* Responsive grid: desktop 2 cols (50/50), mobile 1 col */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4"
                    style={{ minHeight: "90vh" }}
                >
                    {/* Left Block (50%) */}
                    <div
                        className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 h-full"
                        style={{
                            backgroundImage: config.left.backgroundImage,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            borderRadius: 32,
                            minHeight: "340px",
                            height: "100%",
                        }}
                    >
                    </div>

                    {/* Right Grid (50%) */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                        {/* Row 1: 2 columns */}
                        <div
                            className="flex items-center justify-center w-full aspect-square"
                            style={{
                                background: config.right.logo1,
                                borderRadius: 24,
                                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                                color: "#222",
                                aspectRatio: "1 / 1",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >

                        </div>
                        <div
                            className="flex items-center justify-center w-full aspect-square"
                            style={{
                                background: config.right.logo2,
                                borderRadius: 24,
                                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                                color: "#222",
                                aspectRatio: "1 / 1",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                        </div>

                        {/* Row 2: 3 columns - spans both columns with 3-column grid */}
                        <div className="col-span-2 grid grid-cols-3 gap-4">
                            <div
                                className="flex items-center justify-center w-full aspect-square px-4 sm:px-6 cursor-pointer hover:opacity-90 transition-opacity"
                                style={{
                                    background: config.colors.rightBlock4,
                                    borderRadius: 20,
                                    fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                    color: config.colors.rightText,
                                    aspectRatio: "1 / 1",
                                }}
                                onClick={() => router.push('/ThresholdCryptographyBootcamp/agenda')}
                            >
                                <div className="flex flex-col items-center text-center text-white text-sm sm:text-base md:text-lg font-bold tracking-wide gap-2" style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 2px 8px #0003' }}>
                                    <div className="relative w-16 sm:w-20 md:w-24 lg:w-32 aspect-square rounded-lg flex items-center justify-center">
                                        <Image src="/bootcamp/agenda.svg" alt="date" fill className="object-contain p-1 sm:p-2" sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 128px" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-center w-full aspect-square px-4 sm:px-6"
                                style={{
                                    background: config.colors.rightBlock4,
                                    borderRadius: 20,
                                    fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                    color: config.colors.rightText,
                                    aspectRatio: "1 / 1",
                                }}
                            >
                                <div className="flex flex-col items-center text-center text-white text-sm sm:text-base md:text-lg font-bold tracking-wide gap-2" style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 2px 8px #0003' }}>
                                    <div className="relative w-16 sm:w-20 md:w-24 lg:w-32 aspect-square rounded-lg flex items-center justify-center">
                                        <Image src="/bootcamp/leaderboard.svg" alt="date" fill className="object-contain p-1 sm:p-2" sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 128px" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-center w-full aspect-square px-4 sm:px-6 cursor-pointer hover:opacity-90 transition-opacity"
                                style={{
                                    background: config.colors.rightBlock4,
                                    borderRadius: 20,
                                    fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                    color: config.colors.rightText,
                                    aspectRatio: "1 / 1",
                                }}
                                onClick={() => window.open('https://t.me/+4_W_wPgPSd00YjZl', '_blank', 'noopener,noreferrer')}
                            >
                                <div className="flex flex-col items-center text-center text-white text-sm sm:text-base md:text-lg font-bold tracking-wide gap-2" style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 2px 8px #0003' }}>
                                <div className="relative w-16 sm:w-20 md:w-24 lg:w-32 aspect-square rounded-lg flex items-center justify-center">
                                        <Image src="/bootcamp/connect.svg" alt="date" fill className="object-contain p-1 sm:p-2" sizes="(max-width: 640px) 90px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 128px" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: 1 column (spans both columns) */}
                        <div
                            className="col-span-2 flex items-center justify-center w-full h-24 sm:h-28 md:h-32 lg:h-36 px-4 sm:px-6 md:px-8"
                            style={{
                                background: "#1E3CFF",
                                borderRadius: 20,
                                fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                color: "blue",
                            }}
                        >
                                <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-tight uppercase flex items-center justify-center text-center" style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 2px 8px #0003' }}>
                                    4-WEEK VIRTUAL BOOTCAMP DESIGNED SPECIFICALLY FOR BUILDERS READY TO INNOVATE.
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 