export type Project = {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    category: "Full Stack" | "Frontend" | "Backend"
    demoUrl: string
    repoUrl: string
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and customers. Built with Next.js and Tailwind CSS.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
        category: "Full Stack",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates using Socket.io and React.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        category: "Full Stack",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website with light/dark mode and smooth animations.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        category: "Frontend",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
    },
    {
        id: 4,
        title: "Weather API Service",
        description: "A RESTful API that provides historical and real-time weather data with caching strategies.",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
        tags: ["Node.js", "Express", "Redis", "Docker"],
        category: "Backend",
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
    },
]
