"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectImage from "./project-image";

const FeaturedWork = () => {
    const [featureWork, setFeatureWork] = useState<any>(null);

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
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork?.map((value: any, index: number) => {
                            const isRightCol = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                >
                                    <Link href={value?.url} target="_blank" className="overflow-hidden">
                                        <ProjectImage
                                            liveUrl={value?.url}
                                            fallback={value?.image}
                                            alt={value?.title}
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <Link href={value?.url} target="_blank"><h4>{value?.title}</h4></Link>
                                        <div className="flex flex-wrap gap-1.5">
                                            {value?.roles?.map((role: any, i: number) => (
                                                <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded-full">{role}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork