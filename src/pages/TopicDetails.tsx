import { motion } from "framer-motion"
import { useParams, Link } from "react-router-dom"
import { topicsData } from "@/data/topics"
import { ArrowLeft, Calendar, Tag } from "lucide-react"

const TopicDetails = () => {
    const { id } = useParams()
    const topic = topicsData.find(t => t.id === id)

    if (!topic) {
        return (
            <div className="container min-h-screen flex flex-col items-center justify-center text-center space-y-4">
                <h2 className="text-2xl font-bold">Topic not found</h2>
                <Link to="/about" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to About
                </Link>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="container px-4 py-8 md:px-6 md:py-12 max-w-4xl mx-auto"
        >
            <Link
                to="/about"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
                <ArrowLeft size={20} />
                Back to About
            </Link>

            <div className="space-y-6">
                <div className="rounded-xl overflow-hidden aspect-video relative shadow-lg">
                    {topic.image ? (
                        <img
                            src={topic.image}
                            alt={topic.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                            <span className="text-muted-foreground">No Image</span>
                        </div>
                    )}
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                    {topic.sections?.map((section, idx) => {
                        switch (section.type) {
                            case "heading":
                                return (
                                    <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">
                                        {section.content as string}
                                    </h2>
                                )
                            case "paragraph":
                                return (
                                    <p key={idx} className="leading-relaxed text-muted-foreground">
                                        {section.content as string}
                                    </p>
                                )
                            case "list":
                                return (
                                    <ul key={idx} className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        {(section.content as string[]).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )
                            case "image":
                                return (
                                    <figure key={idx} className="my-6">
                                        <img
                                            src={section.content as string}
                                            alt={section.alt}
                                            className="rounded-lg shadow-md w-full"
                                        />
                                        {section.alt && (
                                            <figcaption className="text-sm text-center text-muted-foreground mt-2">
                                                {section.alt}
                                            </figcaption>
                                        )}
                                    </figure>
                                )
                            case "code":
                                return (
                                    <div key={idx} className="relative rounded-lg overflow-hidden bg-secondary/50 p-4 font-mono text-sm my-4">
                                        <div className="absolute top-2 right-3 text-xs text-muted-foreground select-none">
                                            {section.language}
                                        </div>
                                        <pre className="overflow-x-auto">
                                            <code>{section.content as string}</code>
                                        </pre>
                                    </div>
                                )
                            default:
                                return null
                        }
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default TopicDetails
