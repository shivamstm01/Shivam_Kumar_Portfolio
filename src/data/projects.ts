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
}

const projectsEn: Project[] = [
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

const projectsHi: Project[] = [
    {
        id: 1,
        title: "Betternight (हेल्थकेयर वेब ऐप)",
        description: "स्लीप एप्निया के निदान और उपचार के लिए एक निर्बाध, एंड-टू-एंड वर्चुअल केयर समाधान। टेलीकंसल्टेशन, होम-बेस्ड टेस्टिंग लॉजिस्टिक्स और थेरेपी पालन के लिए डैशबोर्ड जैसी सुविधाएं डिजाइन कीं।",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Sharecare (हेल्थ और वेलनेस)",
        description: "व्यक्तिगत स्वास्थ्य, कल्याण और लाभ समाधानों को एकीकृत करने वाला एक डिजिटल स्वास्थ्य मंच। स्वास्थ्य प्रोफाइल और दावा डेटा के लिए कंडीशन हब और सुरक्षित एपीआई बनाए।",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "React", "TypeScript", "MySQL", "REST APIs"],
        category: "Full Stack",
    },
    {
        id: 3,
        title: "PharmaDem (R&D प्लेटफॉर्म)",
        description: "दवा निर्माण को अनुकूलित करने के लिए इन सिलिको सिमुलेशन की पेशकश करने वाला उन्नत फार्मा आरएंडडी प्लेटफॉर्म। सिमुलेशन ट्रिगर्स और प्रोसेसिंग जॉब्स के लिए Node.js एपीआई के लिए डैशबोर्ड विकसित किए।",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "MySQL", "REST APIs"],
        category: "Backend",
    },
    {
        id: 4,
        title: "Beej Nigam (सरकारी लेखा)",
        description: "वित्तीय रिकॉर्ड और कर्मचारी विवरण संभालने वाला एंटरप्राइज-ग्रेड सरकारी लेखा मंच। लेखांकन मॉड्यूल और सुरक्षित लेनदेन वर्कफ़्लो लागू किए।",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
        tags: ["Angular", "React", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 5,
        title: "BHEL-KPMG PIVOT (प्रोजेक्ट मॉनिटरिंग)",
        description: "इंटरैक्टिव डैशबोर्ड के साथ BHEL के लिए रीयल-टाइम प्रोजेक्ट मॉनिटरिंग प्लेटफॉर्म। Power BI रिपोर्ट्स को एकीकृत किया और प्रोजेक्ट मेट्रिक्स के लिए Spring Boot API बनाए।",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 6,
        title: "JSW Pivot (प्रोजेक्ट प्रबंधन)",
        description: "JSW के लिए एंटरप्राइज प्रोजेक्ट प्रबंधन समाधान। गतिशील डैशबोर्ड बनाए और रणनीतिक प्राथमिकता के लिए एम्बेडेड Power BI एनालिटिक्स।",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "SCSS"],
        category: "Frontend",
    },
]

const projectsMr: Project[] = [
    {
        id: 1,
        title: "Betternight (आरोग्यसेवा वेब अँप)",
        description: "स्लीप ऍप्नियाचे निदान आणि उपचार करण्यासाठी एक अखंड, एंड-टू-एंड व्हर्च्युअल केअर सोल्यूशन. टेलीकन्सल्टेशन, होम-बेस्ड टेस्टिंग लॉजिस्टिक्स आणि थेरपी पालनासाठी डॅशबोर्ड डिझाइन केले.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Sharecare (आरोग्य आणि कल्याण)",
        description: "वैयक्तिकृत आरोग्य, कल्याण आणि फायदे समाकलित करणारे डिजिटल आरोग्य प्लॅटफॉर्म. आरोग्य प्रोफाइल आणि क्लेम डेटासाठी कंडिशन हब आणि सुरक्षित एपीआय तयार केले.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "React", "TypeScript", "MySQL", "REST APIs"],
        category: "Full Stack",
    },
    {
        id: 3,
        title: "PharmaDem (R&D प्लॅटफॉर्म)",
        description: "औषध निर्मिती इष्टतम करण्यासाठी इन सिलिको सिम्युलेशन देणारा प्रगत फार्मा आर अँड डी प्लॅटफॉर्म. सिम्युलेशन ट्रिगर आणि प्रोसेसिंग जॉब्ससाठी Node.js एपीआयसाठी डॅशबोर्ड विकसित केले.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "MySQL", "REST APIs"],
        category: "Backend",
    },
    {
        id: 4,
        title: "Beej Nigam (सरकारी लेखा)",
        description: "आर्थिक नोंदी आणि कर्मचारी तपशील हाताळणारे एंटरप्राइझ-ग्रेड सरकारी लेखा प्लॅटफॉर्म. लेखा मॉड्यूल आणि सुरक्षित व्यवहार वर्कफ्लो लागू केले.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
        tags: ["Angular", "React", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 5,
        title: "BHEL-KPMG PIVOT (प्रकल्प देखरेख)",
        description: "इंटरअॅक्टिव्ह डॅशबोर्डसह BHEL साठी रिअल-टाइम प्रकल्प देखरेख प्लॅटफॉर्म. Power BI अहवाल एकत्रित केले आणि प्रकल्प मेट्रिक्ससाठी Spring Boot API तयार केले.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 6,
        title: "JSW Pivot (प्रकल्प व्यवस्थापन)",
        description: "JSW साठी एंटरप्राइझ प्रकल्प व्यवस्थापन समाधान. डायनॅमिक डॅशबोर्ड तयार केले आणि धोरणात्मक प्राधान्यासाठी एम्बेड केलेले Power BI ॲनालिटिक्स.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "SCSS"],
        category: "Frontend",
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
    },
    {
        id: 2,
        title: "Sharecare (हेल्थ अउर वेलनेस)",
        description: "स्वास्थ्य अउर भलाई के समाधान के एगो डिजिटल प्लेटफार्म. सेहत प्रोफाइल अउर दावा डेटा खातिर सुरक्षित API बनवली.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "React", "TypeScript", "MySQL", "REST APIs"],
        category: "Full Stack",
    },
    {
        id: 3,
        title: "PharmaDem (R&D प्लेटफॉर्म)",
        description: "दवा बनावे में मदद करे वाला आधुनिक R&D प्लेटफॉर्म. सिमुलेशन अउर प्रोसेसिंग खातिर डैशबोर्ड अउर API बनवली.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
        tags: ["Angular", "Node.js", "MySQL", "REST APIs"],
        category: "Backend",
    },
    {
        id: 4,
        title: "Beej Nigam (सरकारी लेखा)",
        description: "पैसा-कौड़ी अउर कर्मचारी के हिसाब रखे वाला सरकारी प्लेटफार्म. लेखा मॉड्यूल अउर सुरक्षित लेन-देन के सुविधा दिहनी.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
        tags: ["Angular", "React", "Node.js", "Express.js", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 5,
        title: "BHEL-KPMG PIVOT (प्रोजेक्ट मॉनिटरिंग)",
        description: "BHEL खातिर प्रोजेक्ट पर नजर रखे वाला प्लेटफार्म. Power BI रिपोर्ट्स अउर Spring Boot API के इस्तेमाल कइली.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 6,
        title: "JSW Pivot (प्रोजेक्ट मैनेजमेंट)",
        description: "JSW खातिर प्रोजेक्ट मैनेजमेंट के समाधान. पावर BI एनालिटिक्स के साथे डायनॅमिक डैशबोर्ड बनवली.",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        tags: ["Angular", "Java Spring Boot", "Power BI", "SCSS"],
        category: "Frontend",
    },
]

export const projectsData: Record<Language, Project[]> = {
    en: projectsEn,
    hi: projectsHi,
    mr: projectsMr,
    bh: projectsBh
}
