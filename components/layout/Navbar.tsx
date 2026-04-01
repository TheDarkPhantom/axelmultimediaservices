"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-black/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-22">
        {/* Logo — mark + brand name */}
        <Link
          href="/"
          aria-label="Axel Multimedia Services home"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt=""
            width={160}
            height={160}
            className="h-12 w-auto md:h-14"
            priority
          />
          <span className="hidden font-heading text-[11px] font-light uppercase leading-tight tracking-[0.2em] text-foreground/90 sm:block">
            Axel
            <br />
            <span className="text-[9px] tracking-[0.15em] text-foreground/50">
              Multimedia Services
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold ${
                pathname === link.href ? "text-gold" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:bg-gold-light hover:shadow-[0_2px_16px_rgba(201,168,76,0.3)]"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-black md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heading text-3xl font-light tracking-wide transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 rounded-sm bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-gold-light"
            >
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
