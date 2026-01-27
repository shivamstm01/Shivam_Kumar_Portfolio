import type { Language } from "@/data/translations"

export type Project = {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    category: "Full Stack" | "Frontend" | "Backend"
    demoUrl?: string
    repoUrl?: string
    responsibilities: string[]
    // Extended details
    longDescription?: string[]
    features?: { title: string; description: string }[]
    architecture?: string[]
    impact?: string[]
}

const projectsEn: Project[] = [
    {
        id: 1,
        title: "Betternight (Healthcare Web App)",
        description: "BetterNight is a healthcare technology platform focused on sleep health, specifically sleep apnea diagnosis and treatment.",
        longDescription: [
            "BetterNight is a healthcare technology platform focused on sleep health, especially sleep apnea diagnosis and treatment. It offers a full end-to-end digital care solution that integrates telemedicine consultations with board-certified physicians, home sleep testing, remote monitoring of therapy, and patient support throughout treatment.",
            "All services aim to simplify traditional sleep care and make it easier, accessible, and more patient-centric. The mission is to simplify a complex healthcare journey — moving traditional, fragmented care into a cohesive, tech-enabled experience."
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
        features: [
            {
                title: "Patient Onboarding & Telehealth",
                description: "Seamless account creation, scheduling of telemedicine appointments, and doctor review of sleep data for treatment recommendations."
            },
            {
                title: "Home Sleep Test Workflow",
                description: "Digital ordering and tracking of home test devices, with online result submission for patients."
            },
            {
                title: "Therapy & Remote Monitoring",
                description: "Management of therapy device delivery and ongoing support through guided coaching and adherence monitoring."
            },
            {
                title: "Admin & Partner Portals",
                description: "Comprehensive dashboards for physicians, clinics, and health plans to track patient status and gain data insights."
            }
        ],
        architecture: [
            "Frontend: Angular for responsive, accessible UI components (dashboards, scheduling flows).",
            "Backend: Node.js/Express REST APIs for patient workflows and device tracking.",
            "Database: Normalized MySQL schema for users, appointments, and therapy data.",
            "Security: JWT authentication and role-based access for HIPAA compliance."
        ],
        impact: [
            "Simplified traditional sleep care into a cohesive, tech-enabled experience.",
            "Improved patient access to diagnosis and treatment through telemedicine.",
            "Enhanced therapy adherence through remote monitoring and coaching."
        ],
        responsibilities: [
            "Designed and implemented responsive, accessible UI components using Angular (forms, dashboards, profile pages, scheduling flows).",
            "Built RESTful APIs using Node.js/Express to support patient workflows: signup/login, telehealth scheduling, device tracking, and therapy status.",
            "Designed scalable and normalized MySQL schema for users, sessions, appointments, device results, and therapy progress.",
            "Integrated with backend APIs for authentication, patient data, scheduling, and device data.",
            "Implemented secure APIs with authentication (JWT) and role-based access for patients and clinicians.",
            "Built efficient state-management to handle asynchronous data.",
            "Ensured data integrity and secure storage of PHI (Protected Health Information).",
            "Wrote unit tests and assisted with CI/CD pipelines and deployments."
        ]
    },
    {
        id: 2,
        title: "Sharecare (Health & Wellness)",
        description: "Sharecare is a major digital health and well-being platform designed to help individuals manage all aspects of their health in one place.",
        longDescription: [
            "Sharecare is a major digital health and well-being platform designed to help individuals manage all aspects of their health in one place. It connects users with personalized health insights, tools, and resources — bridging gaps between patients, caregivers, employers, health plans, and providers.",
            "The platform merges medical records, benefits navigation, lifestyle tracking, and care resources under one digital roof. It uses data-driven and evidence-based technology to help improve care quality, lower costs, and empower better health decisions for millions of users."
        ],
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "React", "TypeScript", "MySQL", "REST APIs"],
        category: "Full Stack",
        features: [
            {
                title: "Health Tracking & Insights",
                description: "Tools to log sleep, activity, weight, and stress, providing personalized health action plans and risk assessments like RealAge."
            },
            {
                title: "Central Health Profile",
                description: "A secure central profile storing biometric info, health history, medications, lab results, and care team contacts."
            },
            {
                title: "Benefits Navigation",
                description: "Simplified view of insurance benefits, claim status, and network provider information."
            },
            {
                title: "Digital Therapeutics",
                description: "Tailored educational content and interactive tools to manage chronic conditions and drive behavior change."
            }
        ],
        architecture: [
            "Frontend: Angular for responsive dashboards, trackers, and health profiles.",
            "Backend: Node.js/Express REST APIs for health data analytics and benefits info.",
            "Database: Optimized MySQL schemas for user profiles and health logs.",
            "Security: Secure routes and encryption for HIPAA-compliant data handling."
        ],
        impact: [
            "Created a digital health ecosystem improving daily health management for millions.",
            "Empowered users to make informed wellness decisions through personalized insights.",
            "Connected users, caregivers, and insurers in one unified experience."
        ],
        responsibilities: [
            "Built responsive UI components for dashboards, trackers, profiles, and forms using Angular.",
            "Implemented reusable Angular components with state management (RxJS/NgRx) for app flows.",
            "Designed and developed REST APIs using Node.js/Express for user profiles, health data, analytics, and benefits info.",
            "Implemented secure routes for sensitive health data with proper authentication (JWT, OAuth) and role-based access.",
            "Created and optimized MySQL schemas for user profiles, health metrics, logs, and care data.",
            "Wrote efficient queries, joins, and stored procedures for reporting and analytics modules.",
            "Ensured HIPAA-compliant privacy and encryption standards for all patient data.",
            "Assisted with continuous integration/deployment workflows and wrote unit/integration tests."
        ]
    },
    {
        id: 3,
        title: "PharmaDem (R&D Platform)",
        description: "PharmaDEM is a technology & consulting platform focused on pharmaceutical R&D, drug development, and manufacturing process simulation.",
        longDescription: [
            "PharmaDEM Solutions Private Limited is an Indian technology & consulting company focused on pharmaceutical R&D, drug development, formulation science, and manufacturing process simulation. The company builds digital tools and software platforms that help pharma scientists reduce experimental uncertainty, optimize formulations, and improve production results using simulation, data science, AI/ML, and computational methods.",
            "The core idea behind PharmaDEM is to digitally emulate real pharmaceutical processes (like powder flow, blending, stability prediction, salt screening, etc.) so that scientists can reduce trial-and-error in labs, accelerate drug formulation and API development, optimize manufacturing parameters before actual production, and increase success probability in drug development."
        ],
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "MySQL", "REST APIs", "Python", "Java"],
        category: "Backend",
        features: [
            {
                title: "Digital Twin & Simulation Tools",
                description: "Uses advanced simulation (including molecular and process simulations) to emulate real pharmaceutical operations like mixing, blending, and material behavior. This helps optimize process parameters and reduce waste."
            },
            {
                title: "Formulation & Stability Prediction Engines",
                description: "Modules like Stability prediction, FormSCI, and SolidSMART perform advanced predictions (e.g., salt screening, polymorph ranking, solubility prediction) that significantly reduce the need for laboratory trial and error, leveraging AI/ML and physics-based modeling."
            },
            {
                title: "eLab Notebook (ELN)",
                description: "A digital lab notebook system to capture experimental data securely, facilitate collaboration among scientists, and maintain traceability of experiments and results."
            },
            {
                title: "Formulation & Virtual Formulator",
                description: "Software designed to model and evaluate different formulation scenarios before running physical experiments, thereby speeding up formulation decisions and minimizing costly experiments."
            }
        ],
        architecture: [
            "Microservices / Modular Architecture using Angular frontend, Node.js gateway API, Python compute services, and Java admin modules.",
            "MySQL as common persistence layer for users, simulation configurations, and results.",
            "Message queues (RabbitMQ/Kafka) for offloading heavy computations.",
            "Docker for containerization and Kubernetes for scalable deployments.",
            "Role-based access control and encryption for security and compliance."
        ],
        impact: [
            "Help build a scientific platform that accelerates drug development.",
            "Enable researchers to make data-driven decisions instead of manual lab trial-and-error.",
            "Improve efficiency, consistency, and accuracy of pharmaceutical simulations.",
            "Support scaling of complex workflows in R&D and manufacturing."
        ],
        responsibilities: [
            "Designed and implemented feature-rich, responsive UI screens for dashboards, simulation jobs, and scientific reports using Angular.",
            "Integrate Angular services with backend APIs (Node.js) using efficient state management.",
            "Built clean, scalable REST APIs using Node.js/Express to support frontend workflows and orchestrate long-running simulation jobs.",
            "Triggered Python-based compute services and fetched real-time status updates.",
            "Developed specialized Python backend services for stability score calculations and AI/ML predictions.",
            "Created and maintained enterprise modules like admin portals and license management using Java (Spring Boot).",
            "Designed normalized MySQL schemas to manage users, simulation jobs, and result datasets.",
            "Wrote optimized queries and stored procedures.",
            "Participated in architectural discussions, data modeling, and algorithm reviews.",
            "Wrote unit tests and managed deployments using CI/CD pipelines."
        ]
    },
    {
        id: 4,
        title: "Beej Nigam (Govt Accounting)",
        description: "Beej Nigam is an enterprise-level government accounting and financial management system designed to manage public sector financial records, employee data, and secure transactional workflows.",
        longDescription: [
            "Beej Nigam is an enterprise-level government accounting and financial management system designed to manage public sector financial records, employee data, and secure transactional workflows. The platform supports end-to-end accounting operations while ensuring data accuracy, compliance, auditability, and security, which are critical in government environments.",
            "The system is built to handle large-scale data, multiple user roles, and strict access controls, enabling finance departments to manage budgets, payroll, ledgers, and reports in a centralized and transparent manner."
        ],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
        tags: ["Angular", "React", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
        features: [
            {
                title: "Accounting & Finance",
                description: "General Ledger (GL), vouchers, payments, receipts, budget allocation, and expense tracking."
            },
            {
                title: "Employee & Payroll",
                description: "Comprehensive management of employee master data, salary components, deductions, and payroll processing."
            },
            {
                title: "Secure Transaction Workflows",
                description: "Approval-based financial transactions with multi-level authorization and full audit logs."
            },
            {
                title: "Reporting & Compliance",
                description: "Government-ready financial reports, exportable audit reports, and historical data tracking."
            }
        ],
        architecture: [
            "Frontend: Angular for enterprise UI, React for specific dashboards.",
            "Backend: Node.js + Express.js for RESTful APIs and secure authentication.",
            "Database: Highly normalized MySQL schemas for financial integrity.",
            "Security: Role-based access control (RBAC), JWT authentication, and secure session management."
        ],
        impact: [
            "Successfully delivered a scalable government accounting system.",
            "Improved financial transparency and operational efficiency.",
            "Reduced manual errors through automated workflows and validations.",
            "Enabled faster audits with structured reporting and traceable data."
        ],
        responsibilities: [
            "Led frontend and backend architecture design for the complete accounting system.",
            "Designed and implemented secure REST APIs for accounting transactions and payroll management.",
            "Built reusable UI components for accounting forms, transaction workflows, and reports using Angular.",
            "Led integration of React-based dashboards for advanced reporting and analytics.",
            "Implemented approval-based transaction workflows with multi-level authorization.",
            "Designed normalized database schemas for financial records, employee data, and audit logs.",
            "Enforced strict role-based access controls and maintained complete audit trails.",
            "Mentored junior developers and conducted code reviews."
        ]
    },
    {
        id: 5,
        title: "BHEL-KPMG PIVOT (Project Monitoring)",
        description: "BHEL-KPMG PIVOT is an enterprise real-time project monitoring and analytics platform developed to support Bharat Heavy Electricals Ltd (BHEL) project teams with visibility into project progress, metrics, risks, and performance indicators.",
        longDescription: [
            "BHEL-KPMG PIVOT is an enterprise real-time project monitoring and analytics platform developed to support Bharat Heavy Electricals Ltd (BHEL) project teams with visibility into project progress, metrics, risks, and performance indicators. The platform aggregates data from multiple project sources, visualizes insights, and enables stakeholders to monitor trends, metrics, and KPIs through intuitive dashboards and integrated reports.",
            "The solution integrates interactive dashboards, data visualization using Power BI, and back-end APIs to deliver real-time, actionable insights to project managers, leadership teams, and operational users. It helps drive informed decision-making, performance monitoring, and predictive analysis across large engineering and construction projects."
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "MySQL"],
        category: "Full Stack",
        features: [
            {
                title: "Interactive Dashboards",
                description: "KPI charts showing progress, schedule/cost variance, and custom filterable visualizations for departments and teams."
            },
            {
                title: "Power BI Integration",
                description: "Embedding rich, dynamic Power BI reports with drill-down capabilities directly within the platform."
            },
            {
                title: "Project Metrics & Alerts",
                description: "Tracking of multiple project metrics (on-time delivery, budget variance) with real-time notifications for deviations and risks."
            },
            {
                title: "Audit & Historical Tracking",
                description: "Versioned data capture for audit trails and performance trend analysis."
            }
        ],
        architecture: [
            "Frontend: Angular for modular, responsive SPA screens and dashboards.",
            "Backend: Java Spring Boot for robust RESTful APIs and metric calculations.",
            "BI & Reporting: Power BI Embedded for interactive analytics.",
            "Database: Normalized MySQL schemas for project master data and metric logs.",
            "Security: Role-based security with token/session management."
        ],
        impact: [
            "Delivered an enterprise-grade monitoring solution with real-time insights.",
            "Enabled data transparency and decision support for leadership and field teams.",
            "Reduced time to generate reports via Power BI embedded analytics.",
            "Improved visibility into risk, variance, and progress trends across portfolios."
        ],
        responsibilities: [
            "Designed the overall system architecture ensuring high performance, scalability, and maintainability.",
            "Led the technical team in frontend (Angular) and backend (Spring Boot) development.",
            "Architected and built RESTful APIs to support metrics, dashboards, and data ingestion using Java Spring Boot.",
            "Led the development of highly responsive Angular SPA screens and modular UI components.",
            "Integrated Power BI embedded reports within Angular views.",
            "Designed normalized database schemas for project master data, metric logs, and user roles.",
            "Enforced role-based authentication and secure token management.",
            "Drove code quality standards, architecture reviews, and best practices."
        ]
    },
    {
        id: 6,
        title: "JSW Pivot (Project Management)",
        description: "JSW Pivot is an enterprise-grade project management and analytics platform developed for the JSW Group to enable centralized planning, monitoring, and strategic prioritization of large-scale projects.",
        longDescription: [
            "JSW Pivot is an enterprise-grade project management and analytics platform developed for the JSW Group to enable centralized planning, monitoring, and strategic prioritization of large-scale projects across business units. The platform provides real-time visibility into project health, timelines, dependencies, and performance metrics using dynamic dashboards and embedded Power BI analytics.",
            "It empowers leadership and project teams to make data-driven decisions, identify risks early, and align projects with organizational strategy."
        ],
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "SCSS"],
        category: "Frontend",
        features: [
            {
                title: "Project & Portfolio Management",
                description: "Project lifecycle tracking, dependency monitoring, and cross-portfolio visibility for leadership."
            },
            {
                title: "Dynamic Dashboards",
                description: "Real-time KPIs (schedule, cost, progress, risks) with interactive filters and role-based views."
            },
            {
                title: "Power BI Embedded Analytics",
                description: "Embedded Power BI reports with drill-down analytics for strategic insights and executive-level visualizations."
            },
            {
                title: "Role-Based Access",
                description: "Controlled access for executives, PMs, and analysts with secure navigation."
            }
        ],
        architecture: [
            "Frontend: Angular SPA for enterprise project management with modular SCSS styling.",
            "Backend Integration: Java Spring Boot APIs for project metrics and dashboard data.",
            "Analytics: Power BI Embedded for enterprise-grade reporting.",
            "Design: Consistent design system across dashboards using SCSS."
        ],
        impact: [
            "Delivered a strategic project management platform for enterprise leadership.",
            "Improved visibility and prioritization across multiple project portfolios.",
            "Enabled data-driven decision-making via Power BI analytics.",
            "Reduced manual reporting effort and improved project transparency.",
            "Established a scalable foundation for future enhancements."
        ],
        responsibilities: [
            "Architected and developed a scalable Angular SPA for enterprise project management.",
            "Designed dynamic, reusable dashboard components for KPIs and analytics.",
            "Led implementation of Power BI embedded reports inside Angular views.",
            "Built responsive layouts using SCSS with modular styling architecture.",
            "Collaborated closely with backend teams to define REST API contracts.",
            "Contributed to system design and frontend architecture decisions.",
            "Established UI development standards and best practices.",
            "Focused on performance, maintainability, and scalability."
        ]
    },
]

const projectsHi: Project[] = [
    {
        id: 1,
        title: "Betternight (हेल्थकेयर वेब ऐप)",
        description: "स्लीप एप्निया के निदान और उपचार के लिए एक निर्बाध, एंड-टू-एंड वर्चुअल केयर समाधान। टेलीकंसल्टेशन, होम-बेस्ड टेस्टिंग लॉजिस्टिक्स और थेरेपी पालन के लिए डैशबोर्ड जैसी सुविधाएं डिजाइन कीं।",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "रिमोट डायग्नोसिस के लिए टेलीकंसल्टेशन सुविधाएँ डिजाइन और कार्यान्वित कीं।",
            "होम-बेस्ड टेस्टिंग लॉजिस्टिक्स प्रबंधन प्रणाली विकसित की।",
            "थेरेपी पालन और रोगी की प्रगति की निगरानी के लिए डैशबोर्ड बनाए।",
            "रोगी डेटा गोपनीयता के लिए सुरक्षित डेटा ट्रांसमिशन प्रोटोकॉल एकीकृत किए।"
        ]
    },
    {
        id: 2,
        title: "Sharecare (हेल्थ और वेलनेस)",
        description: "व्यक्तिगत स्वास्थ्य, कल्याण और लाभ समाधानों को एकीकृत करने वाला एक डिजिटल स्वास्थ्य मंच। स्वास्थ्य प्रोफाइल और दावा डेटा के लिए कंडीशन हब और सुरक्षित एपीआई बनाए।",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "React", "TypeScript", "MySQL", "REST APIs"],
        category: "Full Stack",
        responsibilities: [
            "व्यक्तिगत स्वास्थ्य, कल्याण और लाभ समाधानों को एक ही मंच में एकीकृत किया।",
            "लक्षित स्वास्थ्य हस्तक्षेपों के लिए कंडीशन हब बनाए।",
            "स्वास्थ्य प्रोफाइल और दावा डेटा को संभालने के लिए सुरक्षित एपीआई विकसित किए।",
            "हेल्थकेयर डेटा नियमों का अनुपालन सुनिश्चित किया।"
        ]
    },
    {
        id: 3,
        title: "PharmaDem (R&D प्लेटफॉर्म)",
        description: "दवा निर्माण को अनुकूलित करने के लिए इन सिलिको सिमुलेशन की पेशकश करने वाला उन्नत फार्मा आरएंडडी प्लेटफॉर्म। सिमुलेशन ट्रिगर्स और प्रोसेसिंग जॉब्स के लिए Node.js एपीआई के लिए डैशबोर्ड विकसित किए।",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "MySQL", "REST APIs"],
        category: "Backend",
        responsibilities: [
            "सिमुलेशन जॉब्स को ट्रिगर करने और निगरानी करने के लिए डैशबोर्ड विकसित किए।",
            "भारी सिमुलेशन वर्कलोड को प्रोसेस करने के लिए Node.js एपीआई बनाए।",
            "रीयल-टाइम सिमुलेशन ट्रैकिंग के लिए डेटाबेस प्रश्नों को अनुकूलित किया।",
            "सिमुलेशन मॉडल को एकीकृत करने के लिए डेटा वैज्ञानिकों के साथ सहयोग किया।"
        ]
    },
    {
        id: 4,
        title: "Beej Nigam (सरकारी लेखा)",
        description: "वित्तीय रिकॉर्ड और कर्मचारी विवरण संभालने वाला एंटरप्राइज-ग्रेड सरकारी लेखा मंच। लेखांकन मॉड्यूल और सुरक्षित लेनदेन वर्कफ़्लो लागू किए।",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
        tags: ["Angular", "React", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "वित्तीय रिकॉर्ड रखने के लिए कोर अकाउंटिंग मॉड्यूल लागू किए।",
            "सरकारी खर्चों के लिए सुरक्षित लेनदेन वर्कफ़्लो विकसित किए।",
            "कर्मचारी विवरण और पेरोल प्रोसेसिंग मॉड्यूल प्रबंधित किए।",
            "वित्तीय डेटा के लिए सख्त भूमिका-आधारित पहुँच नियंत्रण सुनिश्चित किया।"
        ]
    },
    {
        id: 5,
        title: "BHEL-KPMG PIVOT (प्रोजेक्ट मॉनिटरिंग)",
        description: "इंटरैक्टिव डैशबोर्ड के साथ BHEL के लिए रीयल-टाइम प्रोजेक्ट मॉनिटरिंग प्लेटफॉर्म। Power BI रिपोर्ट्स को एकीकृत किया और प्रोजेक्ट मेट्रिक्स के लिए Spring Boot API बनाए।",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "रीयल-टाइम विजुअल एनालिटिक्स के लिए Power BI रिपोर्ट्स को एकीकृत किया।",
            "प्रोजेक्ट मेट्रिक्स और KPI को प्रदर्शित करने के लिए Spring Boot API बनाए।",
            "प्रोजेक्ट स्थिति ट्रैकिंग के लिए इंटरैक्टिव डैशबोर्ड डिजाइन किए।",
            "रीयल-टाइम रिपोर्टिंग के लिए डेटा अंतर्ग्रहण पाइपलाइन को अनुकूलित किया।"
        ]
    },
    {
        id: 6,
        title: "JSW Pivot (प्रोजेक्ट प्रबंधन)",
        description: "JSW के लिए एंटरप्राइज प्रोजेक्ट प्रबंधन समाधान। गतिशील डैशबोर्ड बनाए और रणनीतिक प्राथमिकता के लिए एम्बेडेड Power BI एनालिटिक्स।",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "SCSS"],
        category: "Frontend",
        responsibilities: [
            "प्रोजेक्ट पोर्टफोलियो प्रबंधन के लिए गतिशील डैशबोर्ड आर्किटेक्ट किए।",
            "रणनीतिक निर्णय लेने के लिए एम्बेडेड Power BI एनालिटिक्स।",
            "प्रोजेक्ट प्राथमिकता वर्कफ़्लो के लिए फ्रंटएंड लॉजिक लागू किया।",
            "एकसमान एंटरप्राइज थीम के लिए SCSS स्टाइल्स को कस्टमाइज किया।"
        ]
    },
]

const projectsMr: Project[] = [
    {
        id: 1,
        title: "Betternight (आरोग्यसेवा वेब अँप)",
        description: "स्लीप ऍप्नियाचे निदान आणि उपचार करण्यासाठी एक अखंड, एंड-टू-एंड व्हर्च्युअल केअर सोल्यूशन. टेलीकंसल्टेशन, होम-बेस्ड टेस्टिंग लॉजिस्टिक्स आणि थेरपी पालनासाठी डॅशबोर्ड डिझाइन केले.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "दूरस्थ निदानासाठी टेलीकन्सल्टेशन वैशिष्ट्ये डिझाइन आणि अंमलात आणली.",
            "होम-बेस्ड टेस्टिंग लॉजिस्टिक्स मॅनेजमेंट सिस्टम विकसित केली.",
            "थेरपी पालन आणि रुग्णाच्या प्रगतीवर लक्ष ठेवण्यासाठी डॅशबोर्ड तयार केले.",
            "रुग्णाच्या डेटा गोपनीयतेसाठी सुरक्षित डेटा ट्रान्समिशन प्रोटोकॉल समाकलित केले."
        ]
    },
    {
        id: 2,
        title: "Sharecare (आरोग्य आणि कल्याण)",
        description: "वैयक्तिकृत आरोग्य, कल्याण आणि फायदे समाकलित करणारे डिजिटल आरोग्य प्लॅटफॉर्म. आरोग्य प्रोफाइल आणि क्लेम डेटासाठी कंडिशन हब आणि सुरक्षित एपीआय तयार केले.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "React", "TypeScript", "MySQL", "REST APIs"],
        category: "Full Stack",
        responsibilities: [
            "एकाच व्यासपीठावर वैयक्तिकृत आरोग्य, कल्याण आणि लाभ उपाय एकत्रित केले.",
            "लक्ष्यित आरोग्य हस्तक्षेपांसाठी कंडिशन हब तयार केले.",
            "आरोग्य प्रोफाइल आणि क्लेम डेटा हाताळण्यासाठी सुरक्षित API विकसित केले.",
            "आरोग्यसेवा डेटा नियमांचे पालन सुनिश्चित केले."
        ]
    },
    {
        id: 3,
        title: "PharmaDem (R&D प्लॅटफॉर्म)",
        description: "औषध निर्मिती इष्टतम करण्यासाठी इन सिलिको सिम्युलेशन देणारा प्रगत फार्मा आर अँड डी प्लॅटफॉर्म. सिम्युलेशन ट्रिगर आणि प्रोसेसिंग जॉब्ससाठी Node.js एपीआयसाठी डॅशबोर्ड विकसित केले.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "MySQL", "REST APIs"],
        category: "Backend",
        responsibilities: [
            "सिम्युलेशन जॉब्स ट्रिगर करण्यासाठी आणि देखरेख करण्यासाठी डॅशबोर्ड विकसित केले.",
            "जड सिम्युलेशन वर्कलोड्सवर प्रक्रिया करण्यासाठी Node.js API तयार केले.",
            "रिअल-टाइम सिम्युलेशन ट्रॅकिंगसाठी डेटाबेस क्वेरी ऑप्टिमाइझ केल्या.",
            "सिम्युलेशन मॉडेल्स एकत्रित करण्यासाठी डेटा वैज्ञानिकांशी सहकार्य केले."
        ]
    },
    {
        id: 4,
        title: "Beej Nigam (सरकारी लेखा)",
        description: "आर्थिक नोंदी आणि कर्मचारी तपशील हाताळणारे एंटरप्राइझ-ग्रेड सरकारी लेखा प्लॅटफॉर्म. लेखा मॉड्यूल आणि सुरक्षित व्यवहार वर्कफ्लो लागू केले.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
        tags: ["Angular", "React", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "आर्थिक नोंदी ठेवण्यासाठी मुख्य लेखा मॉड्यूल लागू केले.",
            "सरकारी खर्चासाठी सुरक्षित व्यवहार वर्कफ्लो विकसित केले.",
            "कर्मचारी तपशील आणि पेरोल प्रक्रिया मॉड्यूल व्यवस्थापित केले.",
            "आर्थिक डेटासाठी कडक भूमिका-आधारित प्रवेश नियंत्रण सुनिश्चित केले."
        ]
    },
    {
        id: 5,
        title: "BHEL-KPMG PIVOT (प्रकल्प देखरेख)",
        description: "इंटरअॅक्टिव्ह डॅशबोर्डसह BHEL साठी रिअल-टाइम प्रकल्प देखरेख प्लॅटफॉर्म. Power BI अहवाल एकत्रित केले आणि प्रकल्प मेट्रिक्ससाठी Spring Boot API तयार केले.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "रिअल-टाइम व्हिज्युअल अॅनालिटिक्ससाठी Power BI अहवाल एकत्रित केले.",
            "प्रकल्प मेट्रिक्स आणि KPI प्रदर्शित करण्यासाठी Spring Boot API तयार केले.",
            "प्रकल्प स्थिती ट्रॅकिंगसाठी इंटरअॅक्टिव्ह डॅशबोर्ड डिझाइन केले.",
            "रिअल-टाइम रिपोर्टिंगसाठी डेटा इनजेशन पाइपलाइन ऑप्टिमाइझ केल्या."
        ]
    },
    {
        id: 6,
        title: "JSW Pivot (प्रकल्प व्यवस्थापन)",
        description: "JSW साठी एंटरप्राइझ प्रकल्प व्यवस्थापन समाधान. डायनॅमिक डॅशबोर्ड तयार केले आणि धोरणात्मक प्राधान्यासाठी एम्बेड केलेले Power BI ॲनालिटिक्स.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "SCSS"],
        category: "Frontend",
        responsibilities: [
            "प्रकल्प पोर्टफोलिओ व्यवस्थापनासाठी डायनॅमिक डॅशबोर्ड तयार केले.",
            "धोरणात्मक निर्णय घेण्यासाठी एम्बेड केलेले Power BI ॲनालिटिक्स.",
            "प्रकल्प प्राधान्य वर्कफ्लोसाठी फ्रंटएंड लॉजिक लागू केले.",
            "एकसमान एंटरप्राइझ थीमसाठी SCSS शैली सानुकूलित केल्या."
        ]
    },
]

const projectsBh: Project[] = [
    {
        id: 1,
        title: "Betternight (हेल्थकेयर वेब ऐप)",
        description: "स्लीप एप्निया के इलाज खातिर एगो बढ़िया वर्चुअल केयर समाधान. टेलीकंसल्टेशन अउर घर पर टेस्टिंग खातिर सुविधा बनवली.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "रिमोट जांच खातिर टेलीकंसल्टेशन फीचर बनवली अउर लागू कइली.",
            "घर पर टेस्टिंग लॉजिस्टिक्स मैनेजमेंट सिस्टम बनवली.",
            "इलाज के पालन अउर मरीज के सुधार देखे खातिर डैशबोर्ड बनवली.",
            "मरीज के डेटा गोपनीयता खातिर सुरक्षित डेटा ट्रांसमिशन प्रोटोकॉल जोड़ली."
        ]
    },
    {
        id: 2,
        title: "Sharecare (हेल्थ अउर वेलनेस)",
        description: "स्वास्थ्य अउर भलाई के समाधान के एगो डिजिटल प्लेटफार्म. सेहत प्रोफाइल अउर दावा डेटा खातिर सुरक्षित API बनवली.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "React", "TypeScript", "MySQL", "REST APIs"],
        category: "Full Stack",
        responsibilities: [
            "पर्सनल सेहत, भलाई अउर फायदा के समाधान एकही प्लेटफार्म पर ले अइली.",
            "खास सेहत सुधार खातिर कंडीशन हब बनवली.",
            "सेहत प्रोफाइल अउर क्लेम डेटा संभाले खातिर सुरक्षित API बनवली.",
            "हेल्थकेयर डेटा नियम के पालन पक्का कइली."
        ]
    },
    {
        id: 3,
        title: "PharmaDem (R&D प्लेटफॉर्म)",
        description: "दवा बनावे में मदद करे वाला आधुनिक R&D प्लेटफॉर्म. सिमुलेशन अउर प्रोसेसिंग खातिर डैशबोर्ड अउर API बनवली.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "MySQL", "REST APIs"],
        category: "Backend",
        responsibilities: [
            "सिमुलेशन जॉब शुरू करे अउर देखे खातिर डैशबोर्ड बनवली.",
            "भारी सिमुलेशन काम संभाले खातिर Node.js API बनवली.",
            "तुरंत सिमुलेशन ट्रैकिंग खातिर डेटाबेस क्वेरी ठीक कइली.",
            "सिमुलेशन मॉडल जोड़े खातिर डेटा वैज्ञानिक लोग के साथ मिल के काम कइली."
        ]
    },
    {
        id: 4,
        title: "Beej Nigam (सरकारी लेखा)",
        description: "पैसा-कौड़ी अउर कर्मचारी के हिसाब रखे वाला सरकारी प्लेटफार्म. लेखा मॉड्यूल अउर सुरक्षित लेन-देन के सुविधा दिहनी.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
        tags: ["Angular", "React", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "पैसा-कौड़ी के हिसाब रखे खातिर मुख्य अकाउंटिंग मॉड्यूल लागू कइली.",
            "सरकारी खर्चा खातिर सुरक्षित लेन-देन वर्कफ़्लो बनवली.",
            "कर्मचारी के जानकारी अउर वेतन प्रक्रिया मॉड्यूल संभालनी.",
            "वित्तीय डेटा खातिर कड़ा सुरक्षा नियम पक्का कइली."
        ]
    },
    {
        id: 5,
        title: "BHEL-KPMG PIVOT (प्रोजेक्ट मॉनिटरिंग)",
        description: "BHEL खातिर प्रोजेक्ट पर नजर रखे वाला प्लेटफार्म. Power BI रिपोर्ट्स अउर Spring Boot API के इस्तेमाल कइली.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "MySQL"],
        category: "Full Stack",
        responsibilities: [
            "तुरंत देखे वाला एनालिटिक्स खातिर Power BI रिपोर्ट जोड़ली.",
            "प्रोजेक्ट मेट्रिक्स अउर KPI दिखावे खातिर Spring Boot API बनवली.",
            "प्रोजेक्ट स्थिति देखे खातिर इंटरैक्टिव डैशबोर्ड डिजाइन कइली.",
            "तुरंत रिपोर्टिंग खातिर डेटा पाइपलाइन ठीक कइली."
        ]
    },
    {
        id: 6,
        title: "JSW Pivot (प्रोजेक्ट मैनेजमेंट)",
        description: "JSW खातिर प्रोजेक्ट मैनेजमेंट के समाधान. पावर BI एनालिटिक्स के साथे डायनॅमिक डैशबोर्ड बनवली.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "SCSS"],
        category: "Frontend",
        responsibilities: [
            "प्रोजेक्ट पोर्टफोलियो मैनेजमेंट खातिर डायनॅमिक डैशबोर्ड बनवली.",
            "रणनीतिक फैसला लेवे खातिर Power BI एनालिटिक्स जोड़ली.",
            "प्रोजेक्ट प्राथमिकता वर्कफ़्लो खातिर फ्रंटएंड लॉजिक लागू कइली.",
            "एक जइसन थीम खातिर SCSS स्टाइल कस्टमाइज कइली."
        ]
    },
]

export const projectsData: Record<Language, Project[]> = {
    en: projectsEn,
    hi: projectsHi,
    mr: projectsMr,
    bh: projectsBh
}
