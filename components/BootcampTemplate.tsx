import React from "react";

const templateConfig = {
    colors: {
        background: "#D9FF9B",
        leftBlock: "#FF914D",
        button: "#FFB800",
        rightBlock1: "#6B7A3C",
        rightBlock2: "#E6D6FA",
        rightBlock3: "#6B7A3C",
        rightBlock4: "#6B7A3C",
        buttonText: "#7A2F00",
        leftText: "#7A2F00",
        rightText: "#fff",
    },
    left: {
        title: "Threshold Cryptography Bootcamp",
        buttonText: "Join Now",
        buttonLink: "#",
    },
    right: {
        logo1: "LOGO", // Replace with image URL or component
        logo2: "LOGO", // Replace with image URL or component
        date: "4th August - 1st September",
        rewards: "$ 250 Weekly Rewards",
    },
};

export default function BootcampTemplate() {
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
                            background: config.colors.leftBlock,
                            borderRadius: 32,
                            minHeight: "340px",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                color: config.colors.leftText,
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                fontWeight: 500,
                                lineHeight: 1.1,
                                marginBottom: 24,
                            }}
                        >
                            {config.left.title.split(" ").map((word, i, arr) =>
                                i === arr.length - 1 ? (
                                    <span key={i}>{word}</span>
                                ) : (
                                    <span key={i}>{word} </span>
                                )
                            )}
                        </div>
                        <button
                            type="button"
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
                                background: config.colors.rightBlock1,
                                borderRadius: 24,
                                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                                color: "#222",
                                aspectRatio: "1 / 1",
                            }}
                        >
                            {typeof config.right.logo1 === "string" ? config.right.logo1 : <img src={config.right.logo1} alt="Logo 1" style={{ maxWidth: 80, maxHeight: 80 }} />}
                        </div>
                        {/* Top Right (Logo 2) */}
                        <div
                            className="flex items-center justify-center w-full h-full aspect-square"
                            style={{
                                background: config.colors.rightBlock2,
                                borderRadius: 24,
                                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                                color: "#222",
                                aspectRatio: "1 / 1",
                            }}
                        >
                            {typeof config.right.logo2 === "string" ? config.right.logo2 : <img src={config.right.logo2} alt="Logo 2" style={{ maxWidth: 80, maxHeight: 80 }} />}
                        </div>
                        {/* Bottom: Stacked Rectangles (Date & Rewards) */}
                        <div className="col-span-2 flex flex-col justify-between h-full">
                            <div
                                className="flex items-center justify-center w-full h-1/2 mb-4"
                                style={{
                                    background: config.colors.rightBlock3,
                                    borderRadius: 20,
                                    fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                    color: config.colors.rightText,
                                    minHeight: 0,
                                    height: "48%",
                                }}
                            >
                                {config.right.date}
                            </div>
                            <div
                                className="flex items-center justify-center w-full h-1/2"
                                style={{
                                    background: config.colors.rightBlock4,
                                    borderRadius: 20,
                                    fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
                                    color: config.colors.rightText,
                                    minHeight: 0,
                                    height: "48%",
                                }}
                            >
                                {config.right.rewards}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 