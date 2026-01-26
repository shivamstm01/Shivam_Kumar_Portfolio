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
                    <p className="text-muted-foreground">My journey as a developer</p>
                </div>

                <div className="prose prose-gray dark:prose-invert mx-auto">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        I am a dedicated Full Stack Developer with a passion for creating efficient, scalable, and user-friendly web applications.
                        With a strong foundation in both front-end and back-end technologies, I enjoy solving complex problems and turning ideas into reality.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                            <h3 className="font-semibold mb-2">Frontend Development</h3>
                            <p className="text-sm text-muted-foreground">
                                Specialized in React, Next.js, and modern CSS frameworks like Tailwind. I focus on creating responsive and accessible user interfaces.
                            </p>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                            <h3 className="font-semibold mb-2">Backend Development</h3>
                            <p className="text-sm text-muted-foreground">
                                Experienced with Node.js, Express, and database management. I build robust APIs and server-side logic to power applications.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">My Philosophy</h3>
                        <p className="text-muted-foreground">
                            I believe in continuous learning and staying updated with the latest industry trends.
                            My goal is to write clean, maintainable code and deliver high-quality software that adds value to users.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
