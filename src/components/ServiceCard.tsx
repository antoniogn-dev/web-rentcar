import { ArrowRight } from "lucide-react"
import { useRef, useState } from "react"
import { type FleetCard } from "../assets/assets";


const ServiceCard = ({title, description, icon, imageSrc}: FleetCard) => {

    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    // HandleMouse Enter
    const handlemouseEnter = () => {
        if (cardRef.current) {
            cardRef.current.addEventListener("mouseenter", () => {
                setIsHovered(true)
            })
        }
    }

    // HandleMouse Leave
    const handlemouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.addEventListener("mouseleave", () => {
                setIsHovered(false)
            })
        }
    }

    return (
        <div ref={cardRef} onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave} style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }} className="min-h-107.5 relative overflow-hidden cursor-pointer transition-all duration-500">
            {/* TEXT */}
            <div className="bg-linear-to-b from-zinc-950 py-7 px-7 to-transparent">
                <h2 className="text-5xl clash-display">{title}</h2>
            </div>

            {/* OVERLAY TEXT */}
            {
                isHovered && (
                    <div className="absolute flex-col w-full min-h-full bg-linear-to-b from-zinc-950 to-transparent flex-1 px-8 top-0 center-item">
                        <div className="mb-2">
                            {icon}
                        </div>
                        <p className="text-center">{description}</p>
                    </div>
                )
            }

            {/* BUTTON */}
            <div className="bg-linear-to-t absolute bottom-0 from-zinc-950 py-7 px-7 to-transparent flex min-w-full justify-end">
                <div className="h-16 w-16 bg-zinc-100 rounded-full cursor-pointer hover:bg-sky-200 transition-all duration-300 ease-in-out hover:-translate-y-1 center-item">
                    <ArrowRight className="text-zinc-800 font-semibold -rotate-45 hover:-translate-y-1 transition" />
                </div>
            </div>

        </div>
    )
}
export default ServiceCard