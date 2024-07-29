"use client";

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import Slider from "./slider";
import Header from "./header";

function FirstFold() {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [showSlider, setShowSlider] = useState(false);

    return (
        <div
            className="relative w-screen h-screen overflow-hidden"
            onMouseMove={(e) => {
                const x = e.clientX;
                const y = e.clientY;
                const width = window.innerWidth;
                const height = window.innerHeight;

                setLeft(((2 * x - width) / width) * 20);
                setTop(((2 * y - height) / height) * 20);
            }}
        >
            <Header showSlider={showSlider} setShowSlider={setShowSlider} />
            <div
                className="w-screen h-screen absolute z-0"
                style={{
                    top,
                    left,
                    background:
                        "url('/assets/images/people-working.jpg') center/cover",
                    transform: "scale(1.04)",
                    overflow: "hidden",
                }}
            />
            <div
                className="absolute left-0 top-0 w-screen h-screen overflow-hidden flex flex-col justify-center gap-12 px-16 z-1"
                style={{
                    background: `linear-gradient(to right, rgba(38,29,109,0.8) 0%, rgba(38,29,109,0.7) 70%, rgba(38,29,109,0.1) 100%), transparent`,
                }}
            >
                <Fade cascade damping={1}>
                    <p
                        className="font-quicksand text-logo-blue/80 text-5xl font-semibold tracking-wide leading-tight"
                        style={{
                            background:
                                "linear-gradient(to top, #869d96, #0ad4de)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Unlock Excellence with <br />
                        Our Comprehensive Service Offerings!
                    </p>
                </Fade>
                <TypeAnimation
                    className="text-linen text-3xl font-semibold tracking-wider"
                    sequence={[
                        1000,
                        "Web Development",
                        2000,
                        "Software Development",
                        2000,
                        "Power BI",
                        2000,
                        "Data Science",
                        2000,
                        "Software Testing",
                        2000,
                        "Sales Force",
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                />
            </div>
            <Slider toggle={showSlider} />
        </div>
    );
}

export default FirstFold;
