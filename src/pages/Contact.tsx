import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import SEO from "@/components/SEO"

const Contact = () => {
    const { t } = useLanguage()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shivamstm01@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `${formData.message}\n\nRegards,\n${formData.name}\n${formData.email}`
        )}`

        window.open(gmailLink, '_blank')

        // Simulate form submission visually
        setTimeout(() => {
            setIsSubmitted(true)
            setFormData({ name: "", email: "", subject: "", message: "" })
        }, 500)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <SEO
                title="Contact Me"
                description="Get in touch with Shivam Kumar for collaboration, job opportunities, or just to say hi."
                url="/contact"
            />
            <div className="space-y-4 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-normal sm:text-4xl pb-2 leading-normal">{t.contact.title}</h2>
                    <p className="text-muted-foreground">{t.contact.subtitle}</p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t.contact.infoTitle}</h3>
                        <p className="text-muted-foreground">
                            {t.contact.infoDesc}
                        </p>

                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                            >
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-medium">{t.contact.email}</p>
                                    <a href="mailto:shivamstm01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        shivamstm01@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                            >
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-medium">{t.contact.call}</p>
                                    <a href="tel:+916201763368" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 6201763368
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                            >
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-medium">{t.contact.location}</p>
                                    <p className="text-muted-foreground">Sitamarhi, Bihar</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-xl border bg-card text-card-foreground shadow-lg p-6 relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400"
                                >
                                    <CheckCircle className="w-10 h-10" />
                                </motion.div>
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-muted-foreground max-w-xs">
                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-4 text-sm text-primary hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            {t.contact.form.name}
                                        </label>
                                        <input
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary"
                                            placeholder={t.contact.form.placeholderName}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            {t.contact.form.email}
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary"
                                            placeholder={t.contact.form.placeholderEmail}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {t.contact.form.subject}
                                    </label>
                                    <input
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary"
                                        placeholder={t.contact.form.placeholderSubject}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {t.contact.form.message}
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all focus:border-primary"
                                        placeholder={t.contact.form.placeholderMessage}
                                        required
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    <Send className="mr-2 h-4 w-4" /> {t.contact.form.send}
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
