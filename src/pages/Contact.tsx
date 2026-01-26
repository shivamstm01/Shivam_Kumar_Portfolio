import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const Contact = () => {
    const { t } = useLanguage()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log("Form submitted")
    }

    return (
        <div className="container px-4 py-16 md:px-6 md:py-24">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t.contact.title}</h2>
                <p className="text-muted-foreground">{t.contact.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t.contact.infoTitle}</h3>
                        <p className="text-muted-foreground">
                            {t.contact.infoDesc}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-medium">{t.contact.email}</p>
                                    <a href="mailto:shivamstm01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        shivamstm01@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-medium">{t.contact.call}</p>
                                    <a href="tel:+916201763368" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 6201763368
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-medium">{t.contact.location}</p>
                                    <p className="text-muted-foreground">Sitamarhi, Bihar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-xl border bg-card text-card-foreground shadow p-6"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {t.contact.form.name}
                                </label>
                                <input
                                    id="name"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder={t.contact.form.placeholderMessage}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            <Send className="mr-2 h-4 w-4" /> {t.contact.form.send}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
