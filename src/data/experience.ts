export type ExperienceItem = {
    id: number
    role: string
    company: string
    date: string
    description: string
}

export const experienceData: ExperienceItem[] = [
    {
        id: 1,
        role: "Senior Full Stack Developer",
        company: "Tech Innovators Inc.",
        date: "2023 - Present",
        description: "Leading the development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing code quality standards.",
    },
    {
        id: 2,
        role: "Frontend Developer",
        company: "Creative Solutions Ltd.",
        date: "2021 - 2023",
        description: "Developed responsive user interfaces for e-commerce platforms. Improved site performance and accessibility scores by 40%.",
    },
    {
        id: 3,
        role: "Junior Web Developer",
        company: "StartUp Hub",
        date: "2020 - 2021",
        description: "Collaborated with designers to implement landing pages. Gained hands-on experience with modern JavaScript frameworks and version control.",
    },
]
