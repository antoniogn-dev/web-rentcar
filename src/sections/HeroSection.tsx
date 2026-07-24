import { Sparkles } from "lucide-react"

const HeroSection = () => {
    return (
        <div className=" relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[url(/car2.png)] bg-no-repeat bg-top">
            {/* Container */}
            <div className="container absolute mx-auto px-6 bottom-10 z-10">
                <div className="z-50 gap-4 md:centered-row lg:gap-80">
                    {/* LEFT */}
                    <div className="z-10 left">
                        <div className="col max-w-3xl mx-auto">
                            {/* Sub Head */}
                            <div className="">
                                <div className="">
                                    <Sparkles className="" /> Your Journey, ELevated
                                </div>
                            </div>
                            {/* Main Head */}

                            <h1 className="">
                                <span className="">Premium</span> car, <br /> rental
                            </h1>
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="">
                        <p className="">
                            Unlock unparalleled freedom with our premium car rental service. <br className="" /> Experience luxury, confort, and seamless booking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection