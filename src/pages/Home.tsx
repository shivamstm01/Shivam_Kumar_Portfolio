import Hero from "@/sections/Hero"
import SEO from "@/components/SEO"

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Home"
                description="Senior Software Development Engineer specializing in Full Stack Development with React, Angular, Node.js, and Java Spring Boot."
                keywords="Software Engineer, Full Stack Developer, React, Angular, Node.js, Java Spring Boot, Shivam Kumar"
            />
            <Hero />
        </div>
    )
}

export default Home
