"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur border-b border-primary/10" : "bg-black"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            onClick={handleNav}
            className="text-lg font-medium text-primary tracking-tight"
          >
            Brayce<span className="text-primary/50">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNav}
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://drive.google.com/uc?export=download&id=1GEpRGFasU7wkCjWIPdgXPLAIvNM3Q8wP"
              target="_blank"
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/80 transition-colors"
            >
              Download CV
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <nav
            className="md:hidden border-t border-primary/10 py-4 flex flex-col gap-4 bg-black"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNav}
                className="text-base text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://drive.google.com/uc?export=download&id=1GEpRGFasU7wkCjWIPdgXPLAIvNM3Q8wP"
              target="_blank"
              onClick={handleNav}
              className="inline-flex w-fit items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/80 transition-colors"
            >
              Download CV
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
