import React from "react";

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
        date: "4th August - 1st September",
        rewards: "$ 250 Weekly Rewards",
    },
};

export default function Hero() {
    const config = templateConfig;
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
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6"
                    style={{ minHeight: "90vh" }}
                >
                    {/* Left Block (50%) */}
                    <div
                        className="flex flex-col justify-between p-6 sm:p-10 lg:p-12 h-full"
                        style={{
                            backgroundImage: config.left.backgroundImage,
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                            borderRadius: 32,
                            minHeight: "340px",
                            height: "100%",
                        }}
                    >
                        <div>

                        </div>
                        <button
                            type="button"
                            className="cursor-pointer"
                            style={{
                                background: config.colors.button,
                                color: config.colors.buttonText,
                                borderRadius: 20,
                                fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                fontWeight: 500,
                                textAlign: "center",
                                padding: "18px 0",
                                marginTop: 16,
                                textDecoration: "none",
                                display: "block",
                                width: "100%",
                                maxWidth: "100%",
                                alignSelf: "center",
                            }}
                            onClick={() => window.open('https://lu.ma/7f358ugf', '_blank', 'noopener,noreferrer')}
                        >
                            {config.left.buttonText}
                        </button>
                    </div>

                    {/* Right Grid (50%) */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                        {/* Top Left (Logo 1) */}
                        <div
                            className="flex items-center justify-center w-full h-full aspect-square"
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
                        {/* Top Right (Logo 2) */}
                        <div
                            className="flex items-center justify-center w-full h-full aspect-square"
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
                        {/* Bottom: Stacked Rectangles (Date & Rewards) */}
                        <div className="col-span-2 flex flex-col justify-between h-full">
                            <div
                                className="flex items-center w-full h-1/2 px-12"
                                style={{
                                    background: config.colors.rightBlock4,
                                    borderRadius: 20,
                                    fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                    color: config.colors.rightText,
                                    minHeight: 0,
                                    height: "48%",
                                }}
                            >
                                <div className="flex flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center mr-6">
                                        D
                                    </div>
                                    <div className="text-white text-3xl sm:text-4xl font-bold tracking-wide" style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 2px 8px #0003' }}>
                                        {config.right.date}
                                    </div>
                                </div>

                            </div>
                            <div
                                className="flex items-center w-full h-1/2 px-12"
                                style={{
                                    background: config.colors.rightBlock4,
                                    borderRadius: 20,
                                    fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                    color: config.colors.rightText,
                                    minHeight: 0,
                                    height: "48%",
                                }}
                            >
                                <div className="flex flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center mr-6">
                                        D
                                    </div>
                                    <div className="text-white text-3xl sm:text-4xl font-bold tracking-wide" style={{ fontFamily: 'Inter, sans-serif', textShadow: '0 2px 8px #0003' }}>
                                        {config.right.rewards}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 