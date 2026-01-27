import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { Link } from "react-router-dom"
import { topicsData } from "@/data/topics"

const About = () => {
    const { t } = useLanguage()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
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
        <div className="container px-4 py-16 md:px-6 md:py-24 overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-8"
            >
                <motion.div variants={itemVariants} className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl relative inline-block">
                        {t.about.title}
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/50 rounded-full" />
                    </h2>
                    <p className="text-muted-foreground">{t.about.subtitle}</p>
                </motion.div>

                <div className="prose prose-gray dark:prose-invert mx-auto">
                    <motion.p variants={itemVariants} className="text-lg leading-relaxed text-muted-foreground">
                        {t.about.description}
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            {t.about.education}
                        </h3>
                        <div className="space-y-6">
                            {[
                                { title: "Master of Science in Artificial Intelligence And Cyber Security", school: "Indian Institute of Technology, Patna, Bihar", date: "Dec 2025 – Dec 2027" },
                                { title: "Bachelor of Technology in Computer Science & Engineering", school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, MP", date: "Aug 2018 – Jul 2022" }
                            ].map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-all"
                                >
                                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                                        <div>
                                            <h4 className="font-semibold text-lg">{edu.title}</h4>
                                            <p className="text-muted-foreground">{edu.school}</p>
                                        </div>
                                        <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">{edu.date}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-8">
                        <h3 className="text-xl font-bold mb-4">{t.about.achievements}</h3>
                        <ul className="grid gap-3">
                            {[
                                "Increased user engagement by 30% by implementing advanced React/Angular features, optimizing UI/UX, and improving performance.",
                                "Authored comprehensive documentation for large-scale React/Angular and full-stack projects, reducing onboarding time by 40%.",
                                "Optimized backend APIs and database queries, resulting in up to 25% faster response times for high-traffic systems.",
                                "Successfully delivered multiple enterprise-grade projects within deadlines, ensuring 100% client satisfaction and zero post-deployment critical bugs."
                            ].map((ach, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={itemVariants}
                                    className="flex items-start gap-2 text-muted-foreground p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>{ach}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12">
                        <h3 className="text-xl font-bold mb-6">Research & Insights</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            {topicsData.map((topic) => (
                                <Link to={`/about/topic/${topic.id}`} key={topic.id} className="group cursor-pointer">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="h-full rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-all"
                                    >
                                        <div className="aspect-video relative overflow-hidden">
                                            {topic.image ? (
                                                <img
                                                    src={topic.image}
                                                    alt={topic.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                                                    No Image
                                                </div>
                                            )}
                                            <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                                                {topic.category}
                                            </div>
                                        </div>
                                        <div className="p-5 space-y-2">
                                            <div className="text-sm text-muted-foreground">{topic.date}</div>
                                            <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                                                {topic.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {topic.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
