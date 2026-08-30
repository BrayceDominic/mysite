import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = ["Web Applications", "Mobile Applications", "Backend Systems", "M-Pesa Integration", "Healthcare Portals", "E-Commerce", "Payment Systems", "API Development", "Progressive Web Apps", "Database Design", "System Architecture"];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">I'm Brayce — a full-stack engineer building <span className="bg-[linear-gradient(90deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.05)_100%)]">web apps, mobile apps, and backend systems</span> with real revenue impact — from <span className="border-b-2">M-Pesa billing platforms</span> to healthcare portals serving thousands.</h2>
                            <h5 className="text-secondary font-normal">Full-stack & mobile engineer shipping production software for startups, NGOs, and growing businesses in East Africa.</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Services</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe