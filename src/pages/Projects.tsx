import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projectsData } from "@/data/projects"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const Projects = () => {
    const { t, language } = useLanguage()
    const [filter, setFilter] = useState<"All" | "Full Stack" | "Frontend" | "Backend">("All")

    const projects = projectsData[language]

    const filteredProjects = projects.filter(
        (project) => filter === "All" || project.category === filter
    )

    const categories = ["All", "Full Stack", "Frontend", "Backend"]

    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h2>
                <p className="text-muted-foreground">Some of my recent work</p>
            </div>

            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category as any)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
                layout
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-primary hover:underline group"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> {t.projects.demo}
                                        </a>
                                    )}
                                    {project.repoUrl && (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                                        >
                                            <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" /> {t.projects.code}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Projects
