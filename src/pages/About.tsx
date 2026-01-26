import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto space-y-8"
            >
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                    <p className="text-muted-foreground">Software Engineer based in Bihar, India</p>
                </div>

                <div className="prose prose-gray dark:prose-invert mx-auto">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Software Engineer with strong foundations in computer science, data structures, algorithms, and system design, and hands-on experience building scalable, reliable, production-grade systems. Experienced in React, Angular, Node.js, Express, Java, and Spring Boot, with a focus on end-to-end ownership, code quality, performance, and maintainability. Adept at collaborating in cross-functional teams, reviewing code, and operating systems in real-world production environments. Passionate about building reliable infrastructure and learning large-scale distributed systems.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <div className="space-y-6">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                                <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                                    <div>
                                        <h4 className="font-semibold text-lg">Master of Science in Artificial Intelligence And Cyber Security</h4>
                                        <p className="text-muted-foreground">Indian Institute of Technology, Patna, Bihar</p>
                                    </div>
                                    <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">Dec 2025 – Dec 2027</span>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                                <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                                    <div>
                                        <h4 className="font-semibold text-lg">Bachelor of Technology in Computer Science & Engineering</h4>
                                        <p className="text-muted-foreground">Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, MP</p>
                                    </div>
                                    <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">Aug 2018 – Jul 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Increased user engagement by 30% by implementing advanced React/Angular features, optimizing UI/UX, and improving performance.</li>
                            <li>Authored comprehensive documentation for large-scale React/Angular and full-stack projects, reducing onboarding time by 40%.</li>
                            <li>Optimized backend APIs and database queries, resulting in up to 25% faster response times for high-traffic systems.</li>
                            <li>Successfully delivered multiple enterprise-grade projects within deadlines, ensuring 100% client satisfaction and zero post-deployment critical bugs.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
