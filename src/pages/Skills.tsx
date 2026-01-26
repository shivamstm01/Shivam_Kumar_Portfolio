import { motion } from "framer-motion"
import { skillsData } from "@/data/skills"
import { useLanguage } from "@/context/LanguageContext"

const Skills = () => {
    const { t } = useLanguage()
    const categories = ["Languages", "Frontend", "Backend", "Databases", "Tools", "Other"] as const

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 text-center mb-12"
            >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl relative inline-block">
                    {t.skills.title}
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/50 rounded-full" />
                </h2>
                <p className="text-muted-foreground">{t.skills.subtitle}</p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
            >
                {categories.map((category) => (
                    <motion.div
                        key={category}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="rounded-xl border bg-card text-card-foreground shadow-sm space-y-4 p-6 hover:shadow-lg transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-center text-primary">{category}</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {skillsData
                                .filter((skill) => skill.category === category)
                                .map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        whileHover={{ scale: 1.1 }}
                                        className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground cursor-default"
                                    >
                                        {skill.name}
                                    </motion.span>
                                ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills
