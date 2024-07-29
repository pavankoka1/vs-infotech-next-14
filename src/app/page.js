import Image from "next/image"
import FirstFold from "@/components/home/first-fold"
import CardsScroll from "@/components/home/cards-scroll"

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-y-scroll no-scrollbar">
            <FirstFold />
            <CardsScroll />
        </div>
    )
}
