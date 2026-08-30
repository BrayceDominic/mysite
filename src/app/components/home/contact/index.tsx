import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contact = () => {
    const contactLinks = [
        {
            label: "Email",
            value: "braycedominic@gmail.com",
            href: "mailto:braycedominic@gmail.com"
        },
        {
            label: "WhatsApp",
            value: "+255764827493",
            href: "https://wa.me/255764827493"
        },
        {
            label: "LinkedIn",
            value: "Brayce Dominic",
            href: "https://linkedin.com/in/brayce-dominic-9652a8263"
        },
        {
            label: "GitHub",
            value: "@BrayceDominic",
            href: "https://github.com/BrayceDominic"
        },
    ];

    return (
        <section id="contact">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-10 md:py-16">
                        <div className="flex flex-col gap-4 mb-8">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Contact</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl">Let's build your next product.</h2>
                            <p className="text-secondary font-normal">Tell me what you're building. You'll get a reply within 24 hours with a clear next step.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {contactLinks?.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        target={item.href.startsWith("mailto") ? undefined : "_blank"}
                                        className="flex flex-col gap-1 border border-primary/10 rounded-xl p-4 hover:bg-primary/5 transition-colors"
                                    >
                                        <p className="text-sm text-primary uppercase font-medium">{item.label}</p>
                                        <p className="font-medium">{item.value}</p>
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="border border-primary/10 rounded-xl p-6 sm:p-8 flex flex-col gap-4 bg-muted/30">
                            <p className="text-sm text-primary uppercase font-medium">Open for projects</p>
                            <h3 className="text-xl sm:text-2xl">Have a project in mind? Let's ship it.</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button asChild className="h-auto">
                                    <Link href="https://wa.me/255764827493" target="_blank" className="py-3 px-5">
                                        Start a conversation
                                    </Link>
                                </Button>
                                <Button asChild variant={"outline"} className="h-auto">
                                    <Link href="https://drive.google.com/uc?export=download&id=1GEpRGFasU7wkCjWIPdgXPLAIvNM3Q8wP" target="_blank" className="py-3 px-5">
                                        Download CV
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
