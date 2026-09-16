import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = ["Web Applications", "Flutter Mobile Apps", "SaaS Platforms", "Payment Integration", "Event Management Software", "Food Ordering Apps", "POS & Point-of-Sale Apps", "E-Commerce", "API Development", "Backend Systems (Node.js)", "Database Design"];
    return (
        <section id="about">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">I'm Brayce, a <span className="bg-[linear-gradient(90deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.05)_100%)]">fullstack software developer</span> crafting scalable web applications, mobile apps, and <span className="border-b-2">payment-integrated systems</span> for ambitious businesses across East Africa.</h2>
                            <h5 className="text-secondary font-normal">From Dar es Salaam, I develop reliable, high-quality software for startups, growing businesses, and nonprofits across Tanzania.</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Services</p>
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="price-tag group relative rounded-md px-4 py-1.5 pl-7 hover:border-white/50 transition-all duration-300">
                                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out" aria-hidden />
                                            <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-white/40 bg-black group-hover:border-white transition-colors" aria-hidden />
                                            <p className="relative text-xs sm:text-sm font-medium text-primary">{value}</p>
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