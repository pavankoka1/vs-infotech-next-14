"use client"

import "swiper/css"
import "swiper/css/effect-cards"

import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"
import { EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { services } from "./constants"

function Slider({ toggle }) {
    const [screenWidth, setScreenWidth] = useState(0)

    useEffect(() => {
        setScreenWidth(window?.screen?.width)
    }, [])

    return (
        <motion.div
            className="absolute left-full top-0 z-[100] h-screen w-screen bg-matte-black"
            animate={{
                x: toggle ? -screenWidth : 0,
            }}
            transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 200,
                damping: 30,
            }}
            style={{
                background: `linear-gradient(to right, #353935, rgba(38,29,109,0.1) 100%)`,
            }}
        >
            <div className="relative flex h-screen w-screen bg-matte-black">
                <div
                    className="h-screen w-1/2 overflow-hidden"
                    style={{
                        background: `linear-gradient(to right, #353935, rgba(38,29,109,0.1) 100%), url('/assets/images/working-woman.jpg') center/cover`,
                    }}
                />
                <div className="flex h-screen w-1/2 flex-col items-center justify-center">
                    <Swiper
                        effect="cards"
                        grabCursor
                        modules={[EffectCards]}
                        className="mySwiper h-96 w-72 rounded text-matte-black"
                    >
                        {services.map((item) => (
                            <SwiperSlide
                                key={item.title}
                                className="size-16 rounded-xl border border-matte-black bg-dark-gray px-5 py-6"
                            >
                                <p className="font-quicksand text-l mb-4 font-semibold">
                                    {item.title}
                                </p>
                                <p className="line-clamp-[14] w-full text-xs">
                                    {item.description}
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.div>
    )
}

export default Slider
