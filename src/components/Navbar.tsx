import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Globe } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { useLanguage } from "@/context/LanguageContext"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const { language, setLanguage, t } = useLanguage()

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/" className="text-xl font-bold">
                    Shivam
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6">
                    <Link to="/" className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.home}</Link>
                    <Link to="/about" className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/about' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.about}</Link>
                    <Link to="/skills" className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/skills' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.skills}</Link>
                    <Link to="/experience" className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/experience' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.experience}</Link>
                    <Link to="/projects" className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/projects' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.projects}</Link>
                    <Link to="/contact" className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/contact' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.contact}</Link>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <button className="p-2 hover:bg-accent rounded-full transition-colors" aria-label="Select Language">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Switch Language</span>
                        </button>
                        <div className="absolute right-0 top-full mt-2 w-32 rounded-md border bg-popover text-popover-foreground shadow-md invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50">
                            <div className="py-1">
                                <button onClick={() => setLanguage('en')} className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${language === 'en' ? 'font-bold' : ''}`}>English</button>
                                <button onClick={() => setLanguage('hi')} className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${language === 'hi' ? 'font-bold' : ''}`}>हिंदी</button>
                                <button onClick={() => setLanguage('mr')} className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${language === 'mr' ? 'font-bold' : ''}`}>मराठी</button>
                                <button onClick={() => setLanguage('bh')} className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${language === 'bh' ? 'font-bold' : ''}`}>भोजपुरी</button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex">
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-b bg-background">
                    <div className="flex flex-col space-y-4 p-4">
                        <Link to="/" onClick={() => setIsOpen(false)} className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.home}</Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/about' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.about}</Link>
                        <Link to="/skills" onClick={() => setIsOpen(false)} className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/skills' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.skills}</Link>
                        <Link to="/experience" onClick={() => setIsOpen(false)} className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/experience' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.experience}</Link>
                        <Link to="/projects" onClick={() => setIsOpen(false)} className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/projects' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.projects}</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)} className={`text-sm font-medium leading-normal py-1 transition-colors hover:text-primary ${location.pathname === '/contact' ? 'text-primary' : 'text-muted-foreground'}`}>{t.nav.contact}</Link>

                        <div className="pt-4 flex justify-between items-center border-t">
                            <span className="text-sm font-medium">{t.nav.switchTheme}</span>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
