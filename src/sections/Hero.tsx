import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { ArrowRight, Github, Instagram, Linkedin, Mail, Code, Database, Server, Globe, Cpu } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "@/context/LanguageContext"
import { useRef } from "react"

const Hero = () => {
    const { t } = useLanguage()
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    }

    // Floating animation for background elements
    const floatingAnimation = (delay: number) => ({
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut" as const,
            delay: delay
        }
    })

    // Animation for "Welcome to my portfolio" text
    const welcomeText = t.hero.welcome
    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section ref={targetRef} className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-10 overflow-hidden relative perspective-1000">
            {/* Dynamic Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-20"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] -z-20"
            />

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <motion.div animate={floatingAnimation(0)} className="absolute top-[15%] left-[15%] opacity-20 text-primary">
                    <Code size={48} />
                </motion.div>
                <motion.div animate={floatingAnimation(2)} className="absolute top-[25%] right-[20%] opacity-20 text-purple-500">
                    <Database size={64} />
                </motion.div>
                <motion.div animate={floatingAnimation(1)} className="absolute bottom-[20%] left-[20%] opacity-20 text-blue-500">
                    <Server size={56} />
                </motion.div>
                <motion.div animate={floatingAnimation(3)} className="absolute bottom-[30%] right-[15%] opacity-20 text-green-500">
                    <Globe size={40} />
                </motion.div>
                <motion.div animate={floatingAnimation(1.5)} className="absolute top-[40%] left-[5%] opacity-10 text-orange-500">
                    <Cpu size={32} />
                </motion.div>
            </div>

            <motion.div
                className="container px-4 md:px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ opacity, scale, y }}
            >
                <div className="flex flex-col items-center space-y-8 text-center">
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-full bg-muted/80 backdrop-blur-md border border-primary/20 px-6 py-2 text-sm font-medium text-primary shadow-lg ring-1 ring-primary/20"
                    >
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            transition={{ staggerChildren: 0.05 }}
                            className="inline-block"
                        >
                            {(() => {
                                // Use Intl.Segmenter if available for correct grapheme splitting
                                if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
                                    const segmenter = new (Intl as any).Segmenter(undefined, { granularity: 'grapheme' });
                                    const segments = Array.from(segmenter.segment(welcomeText));
                                    return segments.map((s: any, index) => (
                                        <motion.span key={index} variants={letterVariants} className="inline-block whitespace-pre">
                                            {s.segment}
                                        </motion.span>
                                    ));
                                }
                                // Fallback
                                return Array.from(welcomeText).map((char, index) => (
                                    <motion.span key={index} variants={letterVariants} className="inline-block whitespace-pre">
                                        {char}
                                    </motion.span>
                                ));
                            })()}
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="relative text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                    >
                        Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Shivam Kumar</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed"
                    >
                        {t.hero.role}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <Link to="/projects">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(var(--primary), 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-xl transition-all"
                            >
                                <span className="relative z-10 flex items-center">
                                    {t.hero.projectsBtn}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.button>
                        </Link>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--background), 0.8)" }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-primary/20 bg-background/50 backdrop-blur-sm px-8 text-base font-medium shadow-sm transition-colors hover:border-primary/50"
                            >
                                {t.hero.contactBtn}
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex space-x-8 mt-8"
                    >
                        {[
                            { href: "https://github.com/shivamstm01", Icon: Github, label: "GitHub" },
                            { href: "https://www.linkedin.com/in/shivam-kumar-31ba7b169/", Icon: Linkedin, label: "LinkedIn" },
                            { href: "https://www.instagram.com/shivamshri6201/", Icon: Instagram, label: "Instagram" },
                            { href: "mailto:shivamstm01@gmail.com", Icon: Mail, label: "Email" }
                        ].map(({ href, Icon, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="sr-only">{label}</span>
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-primary/20 opacity-0 group-hover:opacity-100"
                                    layoutId="social-ring"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
