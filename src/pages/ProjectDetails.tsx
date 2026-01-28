import { motion } from "framer-motion"
import { useParams, Link } from "react-router-dom"
import { projectsData } from "@/data/projects"
import { useLanguage } from "@/context/LanguageContext"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import SEO from "@/components/SEO"

const ProjectDetails = () => {
    const { id } = useParams()
    const { t, language } = useLanguage()

    const project = projectsData[language].find(p => p.id === Number(id))

    if (!project) {
        return (
            <div className="container min-h-[50vh] flex flex-col items-center justify-center">
                <SEO title="Project Not Found" description="The requested project could not be found." />
                <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                <Link to="/projects" className="text-primary hover:underline flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Link>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="container px-4 py-16 md:px-6 md:py-24 max-w-4xl mx-auto"
        >
            <SEO
                title={project.title}
                description={project.description}
                image={project.image}
                url={`/projects/${project.id}`}
                keywords={project.tags.join(", ") + ", " + project.category}
            />
            <Link
                to="/projects"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
            </Link>

            <div className="space-y-8">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {project.category}
                        </span>
                    </div>

                    <div className="flex gap-4">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                {t.projects.demo}
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                {t.projects.code}
                            </a>
                        )}
                    </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h3 className="text-xl font-semibold mb-3">Overview</h3>
                    {project.longDescription ? (
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            {project.longDescription.map((desc, idx) => (
                                <p key={idx}>{desc}</p>
                            ))}
                        </div>
                    ) : (
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {project.description}
                        </p>
                    )}

                    {project.features && (
                        <>
                            <h3 className="text-xl font-semibold mt-8 mb-3">Key Features</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="bg-secondary/30 p-4 rounded-lg">
                                        <h4 className="font-medium mb-1">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {project.architecture && (
                        <>
                            <h3 className="text-xl font-semibold mt-8 mb-3">System Architecture</h3>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                {project.architecture.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    <h3 className="text-xl font-semibold mt-8 mb-3">My Responsibilities</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {project.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                        ))}
                    </ul>

                    {project.impact && (
                        <>
                            <h3 className="text-xl font-semibold mt-8 mb-3">Impact & Deliverables</h3>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                {project.impact.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    <h3 className="text-xl font-semibold mt-8 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectDetails
