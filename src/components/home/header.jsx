"use client"

import HubIcon from "@mui/icons-material/Hub"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

function Header({ showSlider, setShowSlider }) {
    return (
        <div
            className="absolute left-12 top-20 z-[101] flex items-center gap-5"
            style={{ width: "calc(100vw - 96px)" }}
        >
            <Image
                src="/assets/logos/vs-infotech.png"
                alt="logo"
                width={60}
                height={60}
            />
            <p className="h-12 w-[1px] bg-secondary rounded" />
            <HubIcon sx={{ color: "#F0EAD6" }} />
            <motion.div
                className="ml-auto"
                animate={{
                    rotate: showSlider ? "180deg" : 0,
                }}
                transition={{
                    duration: 0.5,
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <MenuOpenIcon
                    className="blink cursor-pointer"
                    fontSize="large"
                    sx={{ color: showSlider ? "#F0EAD6" : "#28282B" }}
                    onClick={() => setShowSlider(!showSlider)}
                />
            </motion.div>
        </div>
    )
}

export default Header
