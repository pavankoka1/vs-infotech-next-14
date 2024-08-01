"use client"
import React, { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"

function Box({ number }) {
    return (
        <div className="w-52 h-52 bg-linen flex justify-center items-center text-2xl text-matte-black rounded-lg">
            {number}
        </div>
    )
}

function HorizontalScroll() {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["30%", "-95%"])

    return (
        <div className="w-screen h-screen no-scrollbar">
            <div className="w-screen h-screen text-secondary flex items-center justify-center text-5xl">
                Scroll Up
            </div>
            <div className="relative h-[800vh]">
                <div className="sticky top-0 flex h-screen items-center w-screen overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4">
                        {new Array(20).fill(1).map((item, index) => (
                            <Box
                                key={"horizontal-scroll-box-" + index}
                                number={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen text-secondary flex items-center justify-center text-5xl">
                Scroll Down
            </div>
        </div>
    )
}

export default HorizontalScroll
