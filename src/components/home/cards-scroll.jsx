"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/swiper-bundle.css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { Button } from "@mui/material"
import CallMadeIcon from "@mui/icons-material/CallMade"
import { services } from "./constants"

function SwiperControl({ isLeftToRight }) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            freeMode={true}
            speed={15000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            style={{
                overflow: "hidden",
                direction: isLeftToRight ? "ltr" : "rtl",
            }}
            className="overflow-hidden my-16"
        >
            {services.map((item, index) => (
                <SwiperSlide
                    key={index}
                    className="rounded-xl py-8 px-6 text-secondary shadow-xl"
                    style={{
                        background: `linear-gradient(to right, #353935, rgba(53, 57, 53, 0.9) 50%, rgba(255, 255, 255, 0.1) 100%), url('${item.image}') center/cover`,
                    }}
                >
                    <div style={{ direction: "ltr" }}>
                        <p className="text-l mb-4 font-semibold">
                            {item.title}
                        </p>
                        <p className="font-quicksand line-clamp-4 text-xs w-3/4">
                            {item.description}
                        </p>
                        <Button
                            variant="outlined"
                            className="mt-8"
                            endIcon={<CallMadeIcon />}
                            sx={{ color: "#F0EAD6", borderColor: "#F0EAD6" }}
                        >
                            Click here
                        </Button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

function CardsScroll() {
    return (
        <div className="w-screen h-screen bg-secondary flex flex-col justify-center items-center overflow-hidden">
            <p className="font-quicksand text-5xl font-medium ml-10 text-matte-black">
                Our Services
            </p>
            <div className="w-full">
                <SwiperControl isLeftToRight={true} />
                <SwiperControl isLeftToRight={false} />
                {/* <SwiperControl isLeftToRight={true} /> */}
            </div>
        </div>
    )
}

export default CardsScroll
