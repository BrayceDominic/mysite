"use client";
import { useEffect, useState } from "react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className={`fixed bottom-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-black/90 backdrop-blur text-primary transition-all duration-300 hover:bg-white/10 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden>
                <path d="M8 13V3m0 0L3.5 7.5M8 3l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
};

export default BackToTop;