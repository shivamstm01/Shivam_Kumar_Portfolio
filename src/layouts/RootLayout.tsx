import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const RootLayout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans antialiased overflow-x-hidden">
            <Navbar />
            <main className="flex-1 flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout
