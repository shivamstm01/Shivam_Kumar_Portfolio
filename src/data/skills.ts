export type Skill = {
    name: string
    category: "Languages" | "Frontend" | "Backend" | "Databases" | "Tools" | "Other"
}

export const skillsData: Skill[] = [
    // Languages
    { name: "JavaScript", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "C#", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "HTML5", category: "Languages" },
    { name: "CSS3", category: "Languages" },

    // Frontend
    { name: "Angular (8+)", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Context API", category: "Frontend" },
    { name: "RxJS", category: "Frontend" },
    { name: "NgRx", category: "Frontend" },
    { name: "Redux", category: "Frontend" },
    { name: "Fluent UI", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Material UI", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Java Spring Boot", category: "Backend" },

    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },

    // Tools
    { name: "Git", category: "Tools" },
    { name: "Azure DevOps", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Prisma", category: "Tools" },
    { name: "REST APIs", category: "Tools" },
    { name: "CI/CD pipelines", category: "Tools" },
    { name: "XUnit", category: "Tools" },
    { name: "Debugging", category: "Tools" },
    { name: "Performance Optimization", category: "Tools" },

    // Other
    { name: "Power BI (Embedded)", category: "Other" },
    { name: "Agile Methodologies", category: "Other" },
]
