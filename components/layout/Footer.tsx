import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ExternalLink } from "lucide-react";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
import { BUSINESS_INFO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-black pt-16 pb-8">
      {/* Top gradient edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Axel Multimedia Services"
              width={200}
              height={200}
              className="mb-5 h-auto w-36"
            />
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-foreground/50">
              Broadcast-quality live streaming and event production based in
              Iloilo City, serving Western Visayas and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/40 transition-all hover:border-gold/40 hover:text-gold hover:shadow-[0_0_12px_rgba(201,168,76,0.15)]"
              >
                <FacebookIcon size={16} />
              </a>
              {BUSINESS_INFO.social.youtube && (
                <a
                  href={BUSINESS_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground/40 transition-all hover:border-gold/40 hover:text-gold hover:shadow-[0_0_12px_rgba(201,168,76,0.15)]"
                >
                  <YoutubeIcon size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-silver">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/50 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-silver">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-gold"
                >
                  <Mail size={16} className="text-gold/50" />
                  {BUSINESS_INFO.email}
                </a>
              </li>
              {BUSINESS_INFO.telephone && (
                <li>
                  <a
                    href={`tel:${BUSINESS_INFO.telephone}`}
                    className="flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-gold"
                  >
                    <Phone size={16} className="text-gold/50" />
                    {BUSINESS_INFO.telephoneDisplay}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={BUSINESS_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-gold"
                >
                  <ExternalLink size={16} className="text-gold/50" />
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} Axel Multimedia Services. All
            rights reserved. &middot; Iloilo City, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
