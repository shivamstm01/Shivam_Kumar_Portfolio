export type Skill = {
    name: string
    category: "Frontend" | "Backend" | "Tools"
}

export const skillsData: Skill[] = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "Redux", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Vite", category: "Tools" },
]
