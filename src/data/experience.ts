export type ExperienceItem = {
    id: number
    role: string
    company: string
    location: string
    date: string
    description: string[] // Changed to array for bullet points
}

export const experienceData: ExperienceItem[] = [
    {
        id: 1,
        role: "Senior Frontend Developer",
        company: "Newrise Technosys Pvt. Ltd.",
        location: "Bhopal, MP",
        date: "Aug 2024 – Present",
        description: [
            "Led development of React.js and Angular applications, integrating with REST APIs and backend services.",
            "Designed and developed scalable web applications using Angular and React with TypeScript, following component-based architecture.",
            "Built and integrated RESTful backend services using Node.js, Express.js, and Java Spring Boot, ensuring secure and reliable data flow.",
            "Applied system design fundamentals including modular services, separation of concerns, and API versioning to support scalability.",
            "Optimized application performance by improving rendering strategies, reducing API latency, and implementing efficient state management.",
            "Actively participated in code reviews, providing feedback on correctness, readability, and production safety.",
            "Collaborated cross-functionally with backend engineers, QA, and product teams to deliver end-to-end features."
        ],
    },
    {
        id: 2,
        role: "Software Developer",
        company: "Capital Hub",
        location: "Bengaluru, Karnataka",
        date: "Apr 2023 – Jun 2024",
        description: [
            "Developed React + Angular based features for enterprise clients with responsive UI/UX.",
            "Integrated REST APIs with React components ensuring seamless data flow.",
            "Debugged and optimized codebase for high-traffic applications, reducing load time by 30%.",
            "Collaborated with product managers and QA teams in Agile sprints for timely delivery."
        ],
    },
    {
        id: 3,
        role: "Software Engineer",
        company: "Wittybrains Software Technologies Pvt. Ltd.",
        location: "Noida, UP",
        date: "Jun 2022 – Mar 2023",
        description: [
            "Built and maintained scalable React.js & Angular applications with reusable UI components.",
            "Translated wireframes and mockups into high-quality code using React & TypeScript.",
            "Improved development speed by automating repetitive tasks and updating legacy codebases."
        ],
    },
]
