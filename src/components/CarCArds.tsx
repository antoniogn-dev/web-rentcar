import BookNowButton from "./BookNowButton"
import { type UsageCategories } from "../assets/assets"


const CarCArds = ({image, name}: UsageCategories) => {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }} className="h-100 lg:h-95 rounded cursor-pointer flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ease-in-out">

            {/* Text */}
            <div className="bg-linear-to-b w-full from-zinc-950 to transparent p-7">
                <h2 className="text-3xl clash-display">
                    {name}
                </h2>
            </div>

            {/* BTNS */}
            <div className="bottom-0 bg-linear-to-t w-full from-zinc-950 to-transparent centered-row justify-between p-7">
                {/* Price per day */}
                <p className="text-lg clash-display">
                    $150/day
                </p>

                {/* Book Button */}
                <BookNowButton type={2}/>
            </div>
        </div>
    )
}
export default CarCArds