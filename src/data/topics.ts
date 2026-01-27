
export type TopicSection = {
    type: "paragraph" | "heading" | "list" | "image" | "code"
    content: string | string[]
    alt?: string // For images
    language?: string // For code
}

export type Topic = {
    id: string
    title: string
    category: "Blog" | "Research"
    description: string
    date: string
    image?: string
    sections?: TopicSection[]
    link?: string
    tags?: string[]
}

export const topicsData: Topic[] = [
    {
        id: "tech-blog-1",
        title: "The Future of Frontend Architecture",
        category: "Blog",
        description: "Exploring the shift towards micro-frontends and server components.",
        date: "Jan 2026",
        tags: ["Frontend Architecture", "React", "Micro-Frontends", "Server Components", "Web Performance"],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
        sections: [
            {
                type: "heading",
                content: "Introduction"
            },
            {
                type: "paragraph",
                content: "Frontend development has evolved far beyond simple UI rendering. Modern applications are expected to scale across millions of users, support large distributed teams, and deliver near-instant performance. Traditional monolithic frontend architectures struggle to meet these demands, leading to slow deployments, tight coupling, and fragile codebases."
            },
            {
                type: "paragraph",
                content: "To address these challenges, the industry is shifting toward micro-frontends and server-driven rendering models, redefining how frontend systems are architected and delivered."
            },
            {
                type: "heading",
                content: "Limitations of Traditional Frontend Architectures"
            },
            {
                type: "paragraph",
                content: "Monolithic frontend applications typically involve:"
            },
            {
                type: "list",
                content: [
                    "A single codebase",
                    "Shared dependencies across features",
                    "One deployment pipeline"
                ]
            },
            {
                type: "paragraph",
                content: "While effective for small teams, this approach creates issues at scale:"
            },
            {
                type: "list",
                content: [
                    "Small changes require full application redeployment",
                    "High risk of regression",
                    "Difficult parallel development across teams",
                    "Performance degradation due to large JavaScript bundles"
                ]
            },
            {
                type: "paragraph",
                content: "These limitations have pushed enterprises to rethink frontend architecture fundamentally."
            },
            {
                type: "heading",
                content: "Micro-Frontends: Scaling Teams and Codebases"
            },
            {
                type: "paragraph",
                content: "Micro-frontends apply microservice principles to frontend development. Instead of a single UI application, the frontend is divided into independent, self-contained modules, each responsible for a specific domain or feature."
            },
            {
                type: "heading",
                content: "Core Characteristics"
            },
            {
                type: "list",
                content: [
                    "Independent development and deployment",
                    "Feature-based ownership",
                    "Clear integration contracts",
                    "Technology-agnostic implementation"
                ]
            },
            {
                type: "heading",
                content: "Benefits at Scale"
            },
            {
                type: "list",
                content: [
                    "Independent releases without cross-team blockers",
                    "Reduced blast radius when failures occur",
                    "Faster onboarding for new teams",
                    "Long-term maintainability for enterprise systems"
                ]
            },
            {
                type: "paragraph",
                content: "Micro-frontends are particularly effective in large organizations, multi-product ecosystems, and platform-driven applications."
            },
            {
                type: "heading",
                content: "Server Components & the Shift Toward Server-Driven UI"
            },
            {
                type: "paragraph",
                content: "Server Components, popularized by React 18 and Next.js, represent a paradigm shift in frontend rendering. Unlike traditional client components, server components execute entirely on the server."
            },
            {
                type: "heading",
                content: "Why Server Components Matter"
            },
            {
                type: "list",
                content: [
                    "No JavaScript sent to the browser",
                    "Secure server-side data access",
                    "Smaller client bundles",
                    "Faster initial render"
                ]
            },
            {
                type: "paragraph",
                content: "By moving data fetching and heavy computation to the server, applications achieve better performance, security, and SEO."
            },
            {
                type: "heading",
                content: "Example Use Case"
            },
            {
                type: "paragraph",
                content: "Fetching project data directly on the server eliminates unnecessary API calls from the client, improving both speed and reliability."
            },
            {
                type: "code",
                language: "tsx",
                content: `// Server Component Example
async function UserDashboard() {
  const projects = await db.projects.findMany(); // Direct DB access

  return (
    <section>
      <h1>Your Projects</h1>
      <ul>
        {projects.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </section>
  );
}`
            },
            {
                type: "heading",
                content: "The Future State of Frontend Systems"
            },
            {
                type: "paragraph",
                content: "Modern frontend architectures are becoming:"
            },
            {
                type: "list",
                content: [
                    "Composable (micro-frontends)",
                    "Server-aware (server components)",
                    "Performance-first",
                    "Team-scalable"
                ]
            },
            {
                type: "paragraph",
                content: "The most successful systems will combine these patterns thoughtfully rather than adopting them blindly."
            },
            {
                type: "heading",
                content: "Conclusion"
            },
            {
                type: "paragraph",
                content: "The future of frontend architecture lies in modularity, performance optimization, and server-driven rendering. Developers who master these concepts will be able to build frontend systems that scale not just technically, but organizationally as well."
            }
        ]
    },
    {
        id: "research-ai-1",
        title: "AI in Healthcare: Predictive Analytics",
        category: "Research",
        description: "Researching the impact of ML models on early disease detection.",
        date: "Dec 2025",
        tags: ["Artificial Intelligence", "Healthcare", "Machine Learning", "Predictive Analytics"],
        image: "https://images.unsplash.com/photo-1576091160550-2187d80018fd?q=80&w=2070&auto=format&fit=crop",
        sections: [
            {
                type: "heading",
                content: "Introduction"
            },
            {
                type: "paragraph",
                content: "Healthcare systems generate massive volumes of clinical and diagnostic data. Traditionally, much of this data remained underutilized due to human limitations in analyzing complex patterns. Artificial Intelligence has emerged as a powerful tool to unlock insights from this data and enable predictive healthcare."
            },
            {
                type: "paragraph",
                content: "Predictive analytics uses machine learning models to forecast health outcomes, enabling early disease detection, preventive care, and personalized treatment."
            },
            {
                type: "heading",
                content: "Role of AI in Predictive Healthcare"
            },
            {
                type: "paragraph",
                content: "AI systems analyze:"
            },
            {
                type: "list",
                content: [
                    "Medical imaging",
                    "Patient history",
                    "Laboratory results",
                    "Demographic and lifestyle factors"
                ]
            },
            {
                type: "paragraph",
                content: "By identifying hidden correlations, AI helps clinicians detect diseases before symptoms become severe, significantly improving treatment success rates."
            },
            {
                type: "heading",
                content: "Research Methodology"
            },
            {
                type: "paragraph",
                content: "This research focuses on deep learning-based predictive models for early disease detection."
            },
            {
                type: "heading",
                content: "Approach Used"
            },
            {
                type: "list",
                content: [
                    "Convolutional Neural Networks (CNNs) trained on anonymized medical imaging data",
                    "Feature extraction to identify early biomarkers",
                    "Model evaluation using accuracy, recall, and precision metrics"
                ]
            },
            {
                type: "paragraph",
                content: "The models were trained under strict ethical and data privacy constraints."
            },
            {
                type: "heading",
                content: "Results & Observations"
            },
            {
                type: "list",
                content: [
                    "Achieved 94% accuracy in early-stage disease detection",
                    "Reduced false positives by 15% compared to traditional screening methods",
                    "Discovered novel biomarkers correlated with disease progression"
                ]
            },
            {
                type: "paragraph",
                content: "These outcomes demonstrate AI’s potential as a clinical decision-support tool."
            },
            {
                type: "heading",
                content: "Clinical Significance"
            },
            {
                type: "paragraph",
                content: "Predictive analytics allows:"
            },
            {
                type: "list",
                content: [
                    "Earlier intervention",
                    "Reduced healthcare costs",
                    "Improved patient survival rates",
                    "Personalized treatment planning"
                ]
            },
            {
                type: "paragraph",
                content: "Rather than replacing doctors, AI enhances medical decision-making by providing data-driven insights."
            },
            {
                type: "heading",
                content: "Challenges & Considerations"
            },
            {
                type: "list",
                content: [
                    "Model explainability",
                    "Bias in training data",
                    "Regulatory compliance",
                    "Ethical AI deployment"
                ]
            },
            {
                type: "paragraph",
                content: "Addressing these challenges is critical for large-scale adoption."
            },
            {
                type: "heading",
                content: "Conclusion"
            },
            {
                type: "paragraph",
                content: "AI-driven predictive analytics is transforming healthcare by enabling earlier diagnosis and smarter treatment decisions. With responsible implementation, these systems have the potential to redefine clinical care and improve global health outcomes."
            }
        ]
    },
    {
        id: "tech-js-ecosystem",
        title: "The Modern JavaScript Ecosystem",
        category: "Blog",
        description: "A comprehensive deep dive into frameworks, libraries, backend tech, state management, and deployment strategies.",
        date: "Feb 2026",
        tags: ["JavaScript", "React", "Angular", "Node.js", "DevOps", "State Management"],
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
        sections: [
            {
                type: "heading",
                content: "Introduction"
            },
            {
                type: "paragraph",
                content: "The JavaScript ecosystem is vast and ever-expanding. To be a senior engineer in 2026, one must navigate a complex landscape of tools that handle everything from UI rendering to server-side logic and cloud deployment. This guide provides a full overview of the current state of the art."
            },
            {
                type: "heading",
                content: "1. Frontend Frameworks & Libraries"
            },
            {
                type: "paragraph",
                content: "The frontend layer has matured into a component-driven architecture. The dominant players are:"
            },
            {
                type: "list",
                content: [
                    "React: The undisputed industry standard. Known for its Virtual DOM, huge ecosystem, and 'Learn Once, Write Anywhere' philosophy. React 19 introduced atomic updates and compiler optimizations.",
                    "Angular: A robust, full-featured framework by Google. Using TypeScript by default, it includes everything out of the box (Routing, Forms, HTTP Client) and relies on Dependency Injection and RxJS for scalable enterprise apps.",
                    "Vue.js: The progressive framework. It offers a gentle learning curve with its Options API while scaling up powerfully with the Composition API. It strikes a balance between React's flexibility and Angular's structure.",
                    "Svelte: A radical approach that shifts work from the browser to the build step. It compiles components into tiny, imperative vanilla JS, resulting in incredible performance and no Virtual DOM overhead.",
                    "SolidJS: Similar syntax to React but uses fine-grained reactivity (Signals) for maximum performance, often topping benchmarks."
                ]
            },
            {
                type: "heading",
                content: "2. Backend Technologies"
            },
            {
                type: "paragraph",
                content: "JavaScript is no longer just for browsers. Server-side JS allows for full-stack capability:"
            },
            {
                type: "list",
                content: [
                    "Node.js: The runtime that started it all, built on Chrome's V8 engine. It excels at I/O-heavy, real-time applications.",
                    "Express.js: The minimalist, unopinionated web framework for Node. It remains the most popular choice for building REST APIs quickly.",
                    "NestJS: A progressive Node.js framework for building efficient, scalable server-side applications. Heavily inspired by Angular, it uses decorators, modules, and dependency injection.",
                    "Fastify: Focused on performance and low overhead. It is one of the fastest web frameworks in the Node ecosystem.",
                    "Bun & Deno: Modern runtimes that aim to improve upon Node.js by including built-in TypeScript support, faster startup times, and better security models."
                ]
            },
            {
                type: "heading",
                content: "3. State Management"
            },
            {
                type: "paragraph",
                content: "As applications grow, managing data flow becomes critical. The landscape has shifted from global monolithic stores to more specialized solutions:"
            },
            {
                type: "list",
                content: [
                    "Redux Toolkit (RTK): The standard way to write Redux logic. It simplifies store setup, reduces boilerplate, and includes tools like RTK Query for data fetching.",
                    "Zustand: A small, fast, and scalable bearbones state-management solution using simplified flux principles. It has a tiny API and is very hook-centric.",
                    "Context API: React's built-in tool for sharing data without passing props. Best for low-frequency updates like themes or user authentication.",
                    "TanStack Query (React Query): The de-facto standard for managing server state. It handles caching, deduplication, and background updates, removing the need to put API data into a global store.",
                    "RxJS: A library for reactive programming using Observables. Essential for complex asynchronous event handling, especially in Angular."
                ]
            },
            {
                type: "heading",
                content: "4. Build Tools & Bundlers"
            },
            {
                type: "paragraph",
                content: "The developer experience has been revolutionized by faster tooling:"
            },
            {
                type: "list",
                content: [
                    "Vite: A next-generation frontend tool that offers instant server start and lightning-fast HMR (Hot Module Replacement). It has largely replaced Webpack for new projects.",
                    "Webpack: The granddaddy of bundlers. extremely configurable and powerful, still deeply entrenched in large enterprise codebases.",
                    "Turborepo: A high-performance build system for JavaScript and TypeScript monorepos."
                ]
            },
            {
                type: "heading",
                content: "5. Deployment & DevOps"
            },
            {
                type: "paragraph",
                content: "Sending your code to production has never been easier, yet more powerful:"
            },
            {
                type: "list",
                content: [
                    "Vercel & Netlify: The platforms for Frontend Cloud. They offer seamless Git integration, automatic deployments, and support for Edge Functions and Serverless computing.",
                    "Docker: The standard for containerization. Wrapping your Node.js app in a Docker container ensures it runs the same way in prod as it does on your machine.",
                    "CI/CD (GitHub Actions): Automating the testing and deployment pipeline. Ensuring that every code push is linted, tested, and securely deployed.",
                    "AWS/Azure/GCP: The major cloud providers. For enterprise scale, you might deploy containers to AWS ECS or Kubernetes (EKS), or use serverless functions directly."
                ]
            },
            {
                type: "heading",
                content: "Conclusion"
            },
            {
                type: "paragraph",
                content: "The JavaScript ecosystem provides a tool for every problem. The key to mastery isn't knowing every single library, but understanding the architectural patterns—Component composition, State management strategies, and Server-Client boundaries."
            }
        ]
    }
]
