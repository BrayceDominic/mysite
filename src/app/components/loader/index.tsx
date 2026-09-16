"use client";
import { useEffect, useState } from "react";

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [typed, setTyped] = useState("");
    const fullText = "BRAYCE DOMINIC | WEB & MOBILE APP DEVELOPER";

    useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            index++;
            setTyped(fullText.slice(0, index));
            if (index >= fullText.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setLoading(false);
                }, 600);
            }
        }, 60);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2600);

        return () => {
            clearInterval(typeInterval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
                loading ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/60 font-mono">Welcome to my site</p>
            <h1 className="font-mono text-2xl sm:text-4xl text-white whitespace-pre-wrap text-center px-4 min-h-[2.5rem] sm:min-h-[3rem]">
                {typed}
                <span className="inline-block w-[2px] h-[1em] align-middle bg-white ml-0.5 blink" />
            </h1>
            <style jsx global>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .blink {
                    animation: blink 1s step-end infinite;
                }
            `}</style>
        </div>
    );
};

export default Loader;
