"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, ArrowUpRight, Coffee } from "lucide-react";

const FeaturedWork = () => {
    const [featureWork, setFeatureWork] = useState<any[]>([]);
    const [revealed, setRevealed] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [supportOpen, setSupportOpen] = useState(false);
    const supportUrl = "https://snippe.me/pay/keep-the-vibes-alive";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/featured-work')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFeatureWork(data?.featureWork)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        if (previewUrl || supportOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [previewUrl, supportOpen]);

    return (
        <section id="work">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                            <Button asChild variant={"outline"} className="h-auto">
                                <Link href={"https://github.com/BrayceDominic"} target="_blank" className="py-3 px-5">
                                    View all on GitHub
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {!revealed && (
                        <div className="flex flex-col max-w-3xl mx-auto animate-fade-in">
                            <div className="flex flex-col items-center gap-5 py-14 sm:py-20">
                                <button
                                    onClick={() => setSupportOpen(true)}
                                    className="group relative flex items-center justify-center w-44 h-44 sm:w-52 sm:h-52 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                                >
                                    {/* solid ring that spins slowly */}
                                    <span className="absolute inset-0 rounded-full border-[3px] border-white/50 border-t-white animate-spin [animation-duration:6s]" />
                                    {/* comet dot orbiting on the ring */}
                                    <span className="absolute inset-0 animate-spin [animation-duration:6s]">
                                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -mt-[7px] w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,0.75)]" />
                                    </span>
                                    {/* inner background */}
                                    <span className="absolute inset-3 rounded-full bg-black/80" />
                                    {/* content */}
                                    <span className="relative flex flex-col items-center justify-center gap-1 z-10">
                                        <span className="text-sm sm:text-base font-medium text-primary px-2">
                                            View {featureWork?.length || 11} projects
                                        </span>
                                        <svg className="w-4 h-4 text-secondary transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                                <p className="text-xs tracking-[3px] uppercase text-secondary/60">Web & mobile</p>
                            </div>
                        </div>
                    )}

                    {revealed && (
                        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                            {featureWork?.map((value: any, index: number) => {
                                const isRightCol = index % 2 === 1;

                                return (
                                    <div
                                        key={index}
                                        style={{ animationDelay: `${Math.min(index, 8) * 90}ms` }}
                                        className={`animate-reveal group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                    >
                                        <Link href={value?.url} target="_blank" className="overflow-hidden relative block rounded-md border border-primary/10">
                                            <Image
                                                src={value?.image}
                                                alt={value?.alt || value?.title}
                                                width={490}
                                                height={300}
                                                className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                            />
                                            <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-black/80 backdrop-blur-sm border border-white/10 rounded-md px-3 py-1 text-xs font-medium text-white">
                                                {value?.type === "Mobile" ? "Mobile App" : "Live"}
                                                <span className={`w-1.5 h-1.5 rounded-full ${value?.type === "Mobile" ? "bg-white/60" : "bg-emerald-400 animate-pulse"}`} />
                                            </span>
                                        </Link>
                                        <div className="flex flex-col gap-2 sm:gap-3 px-2">
                                            <Link href={value?.url} target="_blank" className="w-fit">
                                                <h4>{value?.title}</h4>
                                            </Link>
                                            <div className="flex flex-wrap gap-1.5">
                                                {value?.roles?.map((role: any, i: number) => (
                                                    <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded-md">{role}</span>
                                                ))}
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2 pt-1.5">
                                                <Link
                                                    href={value?.url}
                                                    target={value?.url?.startsWith("http") ? "_blank" : undefined}
                                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-white/80 transition-colors"
                                                >
                                                    {value?.type === "Mobile"
                                                        ? value?.url?.startsWith("http")
                                                            ? "Download APK"
                                                            : "Get this app"
                                                        : "View live"} <ArrowUpRight className="w-3.5 h-3.5" />
                                                </Link>
                                                {value?.preview && value?.type === "Web" && (
                                                    <button
                                                        onClick={() => setPreviewUrl(value?.url)}
                                                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-secondary hover:text-primary transition-colors"
                                                    >
                                                        Live dashboard <ExternalLink className="w-3.5 h-3.5" />
                                                    </button>
                                                )}
                                                <Link
                                                    href={value?.caseStudy}
                                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-secondary hover:text-primary transition-colors"
                                                >
                                                    Case study
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {supportOpen && !previewUrl && (
                <div
                    className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setSupportOpen(false)}
                >
                    <div
                        className="animate-preview-pop w-full max-w-md rounded-lg border border-primary/15 bg-black p-6 sm:p-8 flex flex-col items-center gap-5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg border border-primary/15 bg-white/5">
                            <Coffee className="w-6 h-6 text-primary" />
                        </span>
                        <div className="flex flex-col gap-2 text-center">
                            <h3 className="text-lg sm:text-xl font-medium text-primary">Keep the vibes alive</h3>
                            <p className="text-sm text-secondary">
                                Every project here is designed, built, and shipped solo. If something caught your eye, a small mobile-money tip keeps the momentum going.
                            </p>
                        </div>
                        <a
                            href={supportUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white py-3 px-5 text-sm font-semibold text-black hover:bg-white/90 transition-colors"
                        >
                            Buy me a coffee <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <button
                            onClick={() => { setSupportOpen(false); setRevealed(true); }}
                            className="w-full rounded-lg border border-primary/15 py-3 px-5 text-sm font-medium text-primary hover:bg-white/10 transition-colors"
                        >
                            Continue anyways
                        </button>
                        <p className="text-xs text-secondary/60 text-center">No pressure, you can keep the vibes alive next time.</p>
                    </div>
                </div>
            )}

            {previewUrl && (
                <div
                    className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-8"
                    onClick={() => setPreviewUrl(null)}
                >
                    <div
                        className="animate-preview-pop w-full max-w-6xl h-[88vh] rounded-lg overflow-hidden bg-black border border-primary/15 flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-primary/10">
                            <span className="truncate text-xs sm:text-sm text-secondary">{previewUrl}</span>
                            <div className="flex items-center gap-2 shrink-0">
                                <a
                                    href={previewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary hover:text-white/80"
                                >
                                    Open live <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                                <button
                                    onClick={() => setPreviewUrl(null)}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-primary/15 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-primary hover:bg-white/10 transition-colors"
                                >
                                    <X className="w-3.5 h-3.5" /> Close
                                </button>
                            </div>
                        </div>
                        <iframe
                            src={previewUrl}
                            title="Live site preview"
                            className="flex-1 w-full bg-white"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}

export default FeaturedWork