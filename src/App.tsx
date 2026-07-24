import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"

const App = () => {
    return (
        <div className="text-zinc-100 bg-zing-950">

            <NavBar />

            <main className="min-h-screen">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </main>

            <Footer />

        </div>
    )
}
export default App