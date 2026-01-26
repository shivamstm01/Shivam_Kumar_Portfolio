export type Project = {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    category: "Full Stack" | "Frontend" | "Backend"
    demoUrl?: string // Optional now since some might not have links
    repoUrl?: string // Optional
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Betternight (Healthcare Web App)",
        description: "A seamless, end-to-end virtual care solution for diagnosing and treating sleep apnea. Designed features for teleconsultations, home-based testing logistics, and dashboards for therapy adherence.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Sharecare (Health & Wellness)",
        description: "A digital health platform unifying personalized health, wellness, and benefits solutions. Built condition hubs and secure APIs for health profiles and claims data.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "React", "TypeScript", "MySQL", "REST APIs"],
        category: "Full Stack",
    },
    {
        id: 3,
        title: "PharmaDem (R&D Platform)",
        description: "Advanced pharma R&D platform offering in silico simulations to optimize drug formulation. Developed dashboards for simulation triggers and Node.js APIs for processing jobs.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "MySQL", "REST APIs"],
        category: "Backend",
    },
    {
        id: 4,
        title: "Beej Nigam (Govt Accounting)",
        description: "Enterprise-grade government accounting platform handling financial records and employee details. Implemented accounting modules and secure transaction workflows.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
        tags: ["Angular", "React", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 5,
        title: "BHEL-KPMG PIVOT (Project Monitoring)",
        description: "Real-time project monitoring platform for BHEL with interactive dashboards. Integrated Power BI reports and built Spring Boot APIs for project metrics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 6,
        title: "JSW Pivot (Project Management)",
        description: "Enterprise project management solution for JSW. Architected dynamic dashboards and embedded Power BI analytics for strategic prioritization.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "SCSS"],
        category: "Frontend",
    },
]
