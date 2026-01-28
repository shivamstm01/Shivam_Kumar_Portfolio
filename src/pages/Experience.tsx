import { motion } from "framer-motion"
import { experienceData } from "@/data/experience"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import SEO from "@/components/SEO"

const Experience = () => {
    const { t, language } = useLanguage()
    const experiences = experienceData[language]

    return (
        <div className="container px-4 py-16 md:px-6 md:py-24 relative overflow-hidden">
            <SEO
                title="Experience"
                description="My professional experience as a Software Engineer at companies like Tata Consultancy Services."
                url="/experience"
            />
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10 opacity-30 animate-pulse" />

            <div className="space-y-4 text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
                >
                    {t.experience.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-lg"
                >
                    {t.experience.subtitle}
                </motion.p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent transform md:-translate-x-1/2 hidden md:block" />
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:hidden" />

                <div className="space-y-12">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 mt-6 z-20 shadow-[0_0_10px_2px_rgba(var(--primary),0.5)] border-4 border-background" />

                            {/* Content Card */}
                            <div className="ml-16 md:ml-0 md:w-1/2 relative group">
                                <div
                                    className={`p-6 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 md:mx-8 relative overflow-hidden`}
                                >
                                    {/* Hover Gradient Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div className="flex flex-col gap-2 relative z-10">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <h3 className="text-xl font-bold text-primary">{item.role}</h3>
                                            <span className="flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {item.date}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="font-medium text-foreground">{item.company}</span>
                                            <span className="text-xs">•</span>
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{item.location}</span>
                                        </div>

                                        <ul className="space-y-2">
                                            {item.description.map((desc, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for the other side on desktop */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
