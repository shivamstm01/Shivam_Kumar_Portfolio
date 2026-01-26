import { motion } from "framer-motion"
import { experienceData } from "@/data/experience"
import { Briefcase } from "lucide-react"

const Experience = () => {
    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h2>
                <p className="text-muted-foreground">My professional journey</p>
            </div>

            <div className="relative max-w-3xl mx-auto pl-8 md:pl-0 border-l md:border-none">
                {experienceData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mb-8 md:mb-12 relative md:grid md:grid-cols-[1fr,auto,1fr] md:gap-8 items-center"
                    >
                        {/* Left Content (Company/Date for even, Role for odd) */}
                        <div className={`md:text-right ${index % 2 === 0 ? "order-1" : "order-3"}`}>
                            {index % 2 === 0 ? (
                                <>
                                    <h3 className="text-xl font-bold">{item.company}</h3>
                                    <span className="text-sm text-muted-foreground">{item.date}</span>
                                </>
                            ) : (
                                <div className="hidden md:block">
                                    <h3 className="text-xl font-bold">{item.role}</h3>
                                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                                </div>
                            )}
                        </div>

                        {/* Icon */}
                        <div className="absolute -left-[41px] md:static md:mx-auto flex items-center justify-center w-10 h-10 rounded-full border bg-background z-10 order-2">
                            <Briefcase className="w-5 h-5 text-primary" />
                        </div>

                        {/* Right Content (Role for even, Company/Date for odd) */}
                        <div className={`${index % 2 === 0 ? "order-3" : "order-1"}`}>
                            {index % 2 === 0 ? (
                                <div>
                                    <h3 className="text-xl font-bold md:hidden">{item.role}</h3> {/* Mobile only */}
                                    <div className="hidden md:block">
                                        <h3 className="text-xl font-bold">{item.role}</h3>
                                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="md:text-left">
                                    <h3 className="text-xl font-bold md:hidden">{item.company}</h3> {/* Mobile only */}
                                    <div className="md:hidden">
                                        <span className="text-sm text-muted-foreground">{item.date}</span>
                                    </div>

                                    {/* Desktop Content showing Company/Date on right for odd items */}
                                    <div className="hidden md:block">
                                        <h3 className="text-xl font-bold">{item.company}</h3>
                                        <span className="text-sm text-muted-foreground">{item.date}</span>
                                    </div>
                                </div>
                            )}
                            {/* Mobile Description */}
                            <p className="text-sm text-muted-foreground mt-2 md:hidden">{item.description}</p>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience
