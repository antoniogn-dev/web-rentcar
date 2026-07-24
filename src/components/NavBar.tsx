import { Gauge, Menu, User, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    // Navlinks Data
    const navlinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Fleet",
            path: "/fleet"
        },
        {
            name: "About Us",
            path: "/about"
        }
    ]

    return (
        <header className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-90 transition-all duration-300 rounded-full h-15 ${isScrolled ? "h-14 bg-zinc-900/50 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-3xl" : "bg-zinc-200 w-[95%] max-w-4xl"}`}>

            <div className="mx-auto h-full px-6">

                <nav className="centered-row justify-between h-full">
                    {/* 🟦 Logo */}

                    <NavLink to="/" className="flex items-center" >
                        <div className="h-auto relative centered-row gap-2">
                            {/* Icon */}
                            <Gauge className={`h-8 w-8 ${isScrolled ? "text-zinc-100" : "text-zinc-700"
                                }`} />

                            {/* text */}
                            <p className={`tracking-tighter cursor-pointer text-xl clash-display font-medium ${isScrolled ? "text-zinc-200" : "text-zinc-700"
                                }`}>
                                DriveWell <sup className="text-xs ml-1">TM</sup>
                            </p>
                        </div>
                    </NavLink>


                    {/* 🟦 Desktop Navigation */}
                    <div className="hidden md:centered-row gap-6">
                        {
                            navlinks.map((item, index) => (
                                <a key={index} href={item.path} className={`text-sm md:text-lg hover:font-semibold hover:-translate-y-1 ease-out transition-all durtation-300 ${isScrolled ? "text-white hover:text-yellow-300" : "text-zinc-800"
                                    }`}>{item.name}</a>
                            ))
                        }
                    </div>

                    {/* 🟦 Button */}
                    <div className="md:centered-row gap-2 hidden">
                        <Link to="/rent">
                            <button className="clash-display text-base bg-linear-to-r from-zinc-700 to-zinc-950 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out">
                                Rent Today
                            </button>
                        </Link>
                    </div>

                    {/* User Icon */}
                    <div className="w-10 h-10 bg-zinc-800 rounded-full center-item cursor-pointer">
                        <User />
                    </div>

                    {/* 🟦 Mobile Nav Icon */}
                    <div className="md:hidden p-1 rounded-md">
                        <button className="md:hidden text-white hover:text-zinc-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                            
                            {
                                isOpen ? 
                                <X size={34} className="text-zinc-800"/> 
                                : 
                                <Menu size={40} className="text-zinc-800 mt-2" />
                            }
                            
                            
                        </button>
                    </div>

                    {/* 🟦 Mobile Nav menu */}
                    {/* <div className=""></div> */}

                </nav>

            </div>

        </header>
    )
}
export default NavBar