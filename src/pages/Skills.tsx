import { motion } from "framer-motion"
import { skillsData } from "@/data/skills"

const Skills = () => {
    const categories = ["Languages", "Frontend", "Backend", "Databases", "Tools", "Other"] as const

    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skills</h2>
                <p className="text-muted-foreground">Technologies I work with</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {categories.map((category, index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-xl border bg-card text-card-foreground shadow space-y-4 p-6"
                    >
                        <h3 className="text-xl font-semibold text-center">{category}</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {skillsData
                                .filter((skill) => skill.category === category)
                                .map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
