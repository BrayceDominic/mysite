"use client";
import Link from "next/link";
import { useState } from "react";
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
            value: "+255 750 630 671",
            href: "https://wa.me/255750630671"
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

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                setError(data?.error || "Something went wrong. Please try again.");
                return;
            }

            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
            setError("Something went wrong. Please try again.");
        }
    };

    const inputClass =
        "w-full rounded-lg border border-primary/10 bg-transparent px-4 py-3 text-primary placeholder:text-secondary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

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
                                        className="flex flex-col gap-1 border border-primary/10 rounded-lg p-4 hover:bg-primary/5 transition-colors"
                                    >
                                        <p className="text-sm text-primary uppercase font-medium">{item.label}</p>
                                        <p className="font-medium">{item.value}</p>
                                    </Link>
                                )
                            })}
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="border border-primary/10 rounded-lg p-6 sm:p-8 flex flex-col gap-4 bg-muted/20"
                        >
                            <p className="text-sm text-primary uppercase font-medium">Send an inquiry</p>

                            {status === "success" && (
                                <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-primary" role="status">
                                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-sm text-primary">Name *</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className={inputClass}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-sm text-primary">Email *</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-sm text-primary">Project brief *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me what you're building..."
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={status === "sending"}
                                className="h-auto self-start"
                            >
                                <span className="py-2.5 px-5">
                                    {status === "sending" ? "Sending..." : "Send inquiry"}
                                </span>
                            </Button>

                            <p className="text-sm text-secondary">No spam. Just a reply within 24 hours.</p>
                        </form>

                        <div className="border border-primary/10 rounded-lg p-6 sm:p-8 flex flex-col gap-4 bg-muted/30 mt-8">
                            <p className="text-sm text-primary uppercase font-medium">Open for projects</p>
                            <h3 className="text-xl sm:text-2xl">Have a project in mind? Let&apos;s ship it.</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button asChild className="h-auto">
                                    <Link href="https://wa.me/255750630671" target="_blank" className="py-3 px-5">
                                        Start a conversation
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="h-auto">
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
