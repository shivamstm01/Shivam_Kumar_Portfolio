import type { Language } from "@/data/translations"

export type ExperienceItem = {
    id: number
    role: string
    company: string
    location: string
    date: string
    description: string[]
}

const experienceEn: ExperienceItem[] = [
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

const experienceHi: ExperienceItem[] = [
    {
        id: 1,
        role: "सीनियर फ्रंटएंड डेवलपर",
        company: "Newrise Technosys Pvt. Ltd.",
        location: "भोपाल, एमपी",
        date: "अगस्त 2024 – वर्तमान",
        description: [
            "React.js और Angular एप्लिकेशन के विकास का नेतृत्व किया, REST API और बैकएंड सेवाओं के साथ एकीकृत किया।",
            "घटक-आधारित वास्तुकला का पालन करते हुए Angular और React के साथ स्केलेबल वेब एप्लिकेशन डिजाइन और विकसित किए।",
            "Node.js, Express.js और Java Spring Boot का उपयोग करके RESTful बैकएंड सेवाओं का निर्माण और एकीकरण किया।",
            "स्केलेबिलिटी का समर्थन करने के लिए मॉड्यूलर सेवाओं और एपीआई संस्करण सहित सिस्टम डिजाइन फंडामेंटल्स लागू किए।",
            "रेंडरिंग रणनीतियों में सुधार, एपीआई विलंबता को कम करने और कुशल राज्य प्रबंधन को लागू करके एप्लिकेशन प्रदर्शन को अनुकूलित किया।",
            "कोड समीक्षाओं में सक्रिय रूप से भाग लिया, शुद्धता और पठनीयता पर प्रतिक्रिया प्रदान की।",
            "एंड-टू-एंड सुविधाओं को वितरित करने के लिए बैकएंड इंजीनियरों, QA और उत्पाद टीमों के साथ सहयोग किया।"
        ],
    },
    {
        id: 2,
        role: "सॉफ्टवेयर डेवलपर",
        company: "Capital Hub",
        location: "बेंगलुरु, कर्नाटक",
        date: "अप्रैल 2023 – जून 2024",
        description: [
            "उद्यम ग्राहकों के लिए React + Angular आधारित सुविधाएँ विकसित कीं।",
            "सहज डेटा प्रवाह सुनिश्चित करते हुए React घटकों के साथ REST API को एकीकृत किया।",
            "उच्च-ट्रैफिक अनुप्रयोगों के लिए कोडबेस को डीबग और अनुकूलित किया, लोड समय को 30% तक कम किया।",
            "समय पर डिलीवरी के लिए एजाइल स्प्रिंट में उत्पाद प्रबंधकों और क्यूए टीमों के साथ सहयोग किया।"
        ],
    },
    {
        id: 3,
        role: "सॉफ्टवेयर इंजीनियर",
        company: "Wittybrains Software Technologies Pvt. Ltd.",
        location: "नोएडा, यूपी",
        date: "जून 2022 – मार्च 2023",
        description: [
            "पुन: प्रयोज्य यूआई घटकों के साथ स्केलेबल React.js और Angular एप्लिकेशन बनाए और बनाए रखा।",
            "React और TypeScript का उपयोग करके वायरफ्रेम और मॉकअप को उच्च-गुणवत्ता वाले कोड में अनुवादित किया।",
            "दोहराव वाले कार्यों को स्वचालित करके और पुराने कोडबेस को अपडेट करके विकास की गति में सुधार किया।"
        ],
    },
]

const experienceMr: ExperienceItem[] = [
    {
        id: 1,
        role: "वरिष्ठ फ्रंटएंड डेव्हलपर",
        company: "Newrise Technosys Pvt. Ltd.",
        location: "भोपाळ, मध्य प्रदेश",
        date: "ऑगस्ट 2024 – चालू",
        description: [
            "React.js आणि Angular ऍप्लिकेशन्सच्या विकासाचे नेतृत्व केले, REST API आणि बॅकएंड सेवांसह एकत्रित केले.",
            "कंपोनंट-आधारित आर्किटेक्चरचे अनुसरण करून Angular आणि React वापरून स्केलेबल वेब ऍप्लिकेशन्स डिझाइन आणि विकसित केले.",
            "Node.js, Express.js आणि Java Spring Boot वापरून सुरक्षित आणि विश्वसनीय डेटा प्रवाह सुनिश्चित करण्यासाठी RESTful बॅकएंड सेवा तयार केल्या.",
            "स्केलेबिलिटीला समर्थन देण्यासाठी मॉड्युलर सेवा आणि API व्हर्जनिंगसह सिस्टम डिझाइनची मूलभूत तत्त्वे लागू केली.",
            "रेंडरिंग धोरणे सुधारून, API लेटन्सी कमी करून आणि कार्यक्षम स्टेट मॅनेजमेंट लागू करून ऍप्लिकेशन परफॉर्मन्स ऑप्टिमाइझ केला.",
            "कोड रिव्ह्यूमध्ये सक्रिय सहभाग घेतला, अचूकता आणि वाचनीयतेवर अभिप्राय दिला.",
            "एंड-टू-एंड फीचर्स वितरित करण्यासाठी बॅकएंड अभियंते, QA आणि उत्पादन संघांसह क्रॉस-फंक्शनली सहयोग केला."
        ],
    },
    {
        id: 2,
        role: "सॉफ्टवेअर डेव्हलपर",
        company: "Capital Hub",
        location: "बेंगळुरू, कर्नाटक",
        date: "एप्रिल 2023 – जून 2024",
        description: [
            "एंटरप्राइझ क्लायंटसाठी React + Angular आधारित फीचर्स विकसित केली.",
            "अखंड डेटा प्रवाह सुनिश्चित करण्यासाठी React घटकांसह REST API एकत्रित केले.",
            "हाय-ट्रॅफिक ऍप्लिकेशन्ससाठी कोडबेस डीबग आणि ऑप्टिमाइझ केला, लोड वेळ 30% ने कमी केला.",
            "वेळेवर वितरणासाठी एजाइल स्प्रिंट्समध्ये उत्पादन व्यवस्थापक आणि QA टीम्ससह सहयोग केला."
        ],
    },
    {
        id: 3,
        role: "सॉफ्टवेअर इंजिनिअर",
        company: "Wittybrains Software Technologies Pvt. Ltd.",
        location: "नोएडा, उत्तर प्रदेश",
        date: "जून 2022 – मार्च 2023",
        description: [
            "पुन्हा वापरण्यायोग्य UI घटकांसह स्केलेबल React.js आणि Angular ऍप्लिकेशन्स तयार केले आणि देखरेख केली.",
            "React आणि TypeScript वापरून वायरफ्रेम्स आणि मॉकअप्सचे उच्च-गुणवत्तेच्या कोडमध्ये रूपांतर केले.",
            "पुन्हा होणारी कामे स्वयंचलित करून आणि जुने कोडबेस अपडेट करून विकासाचा वेग सुधारला."
        ],
    },
]

const experienceBh: ExperienceItem[] = [
    {
        id: 1,
        role: "सीनियर फ्रंटएंड डेवलपर",
        company: "Newrise Technosys Pvt. Ltd.",
        location: "भोपाल, एमपी",
        date: "अगस्त 2024 – अभी तक",
        description: [
            "React.js अउर Angular एप्लीकेशन बनावे में अगुवाई कइली, REST API अउर बैकएंड सर्विस के साथे जोड़ली।",
            "एंगुलर अउर रिएक्ट के इस्तेमाल करके बढ़िया वेब एप्लीकेशन बनावली, जेकर परफॉर्मेंस शानदार बा।",
            "Node.js, Express.js अउर Java Spring Boot के इस्तेमाल से मजबूर बैकएंड सर्विस बनावली।",
            "सिस्टम डिजाइन के नियमन के पालन कइली ताकि एप्लीकेशन भविष्य में भी बढ़िया से काम करे।",
            "एप्लीकेशन के स्पीड बढ़ावे खातिर रेंडरिंग अउर स्टेट मैनेजमेंट में सुधार कइली।",
            "कोड रिव्यू में हिस्सा लेलीं अउर गलती सुधार के बढ़िया कोड लिखली।",
            "बैकएंड इंजीनियर अउर बाकी टीम के साथे मिलके काम कइली।"
        ],
    },
    {
        id: 2,
        role: "सॉफ्टवेयर डेवलपर",
        company: "Capital Hub",
        location: "बेंगलुरु, कर्नाटक",
        date: "अप्रैल 2023 – जून 2024",
        description: [
            "बड़का क्लाइंट लोग खातिर React + Angular के इस्तेमाल करके फीचर बनावली।",
            "React कंपोनेंट्स के साथ REST API जोड़ली ताकि डेटा सही से आवे।",
            "ज्यादा ट्रैफिक वाला एप्लीकेशन के लोड टाइम 30% कम कइली।",
            "समय पर काम पूरा करे खातिर मैनेजर अउर QA टीम के साथे मिलके काम कइली।"
        ],
    },
    {
        id: 3,
        role: "सॉफ्टवेयर इंजीनियर",
        company: "Wittybrains Software Technologies Pvt. Ltd.",
        location: "नोएडा, यूपी",
        date: "जून 2022 – मार्च 2023",
        description: [
            "React.js अउर Angular के इस्तेमाल से स्केलेबल एप्लीकेशन बनावली।",
            "डिजाइन अउर मॉकअप के हाई-क्वालिटी कोड में बदलनी।",
            "बार-बार होखे वाला काम के ऑटोमेट करके काम के स्पीड बढ़वली।"
        ],
    },
]

export const experienceData: Record<Language, ExperienceItem[]> = {
    en: experienceEn,
    hi: experienceHi,
    mr: experienceMr,
    bh: experienceBh
}
