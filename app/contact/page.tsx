import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, ExternalLink, MapPin } from "lucide-react";
import { SITE_URL, BUSINESS_INFO } from "@/lib/constants";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/metadata";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Axel Multimedia Services. Tell us about your event and we'll provide a custom production quote within 24 hours.",
  openGraph: {
    title: "Contact Us | Axel Multimedia Services",
    description:
      "Get in touch with Axel Multimedia Services for a custom event production quote.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: `${SITE_URL}/contact` },
  ]);

  const webPageSchema = generateWebPageSchema(
    "Contact Us",
    "Get in touch with Axel Multimedia Services for a custom event production quote.",
    `${SITE_URL}/contact`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, webPageSchema]),
        }}
      />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <h1 className="font-heading text-4xl font-light text-foreground md:text-6xl">
              Get in Touch
            </h1>
          </FadeUp>
          <GoldDivider className="my-6" />
          <FadeUp delay={0.1}>
            <p className="mx-auto max-w-2xl text-base text-foreground/60 md:text-lg">
              Tell us about your event and we&apos;ll get back to you within 24
              hours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left: Contact Info */}
            <FadeUp>
              <div>
                <SectionLabel text="REACH US DIRECTLY" centered={false} />

                <div className="mt-8 space-y-6">
                  {/* Email */}
                  <Link
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-center gap-3 text-foreground/70 transition-colors hover:text-gold"
                  >
                    <Mail className="shrink-0 text-gold" size={20} />
                    <span className="text-sm">{BUSINESS_INFO.email}</span>
                  </Link>

                  {/* Phone */}
                  {/* TODO: Add phone number */}
                  <div className="flex items-center gap-3 text-foreground/40">
                    <Phone className="shrink-0 text-gold/50" size={20} />
                    <span className="text-sm italic">
                      Phone number coming soon
                    </span>
                  </div>

                  {/* Facebook */}
                  <Link
                    href={BUSINESS_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/70 transition-colors hover:text-gold"
                  >
                    <ExternalLink className="shrink-0 text-gold" size={20} />
                    <span className="text-sm">
                      Facebook — Axel Multimedia Services
                    </span>
                  </Link>
                </div>

                {/* Note Block */}
                <div className="mt-10 rounded-sm border-l-2 border-gold bg-surface p-4 pl-4">
                  <p className="text-sm leading-relaxed text-foreground/70">
                    <span className="font-medium text-foreground">
                      Not sure what you need?
                    </span>{" "}
                    We recommend starting with a quick discovery call. Tell us
                    the basics — event type, date, venue, and audience size — and
                    we&apos;ll recommend the right production scope. No
                    obligation, no hard sell.
                  </p>
                </div>

                {/* Service Area */}
                <div className="mt-8 flex items-center gap-2 text-foreground/40">
                  <MapPin className="shrink-0 text-gold/50" size={16} />
                  <span className="text-sm">
                    Based in Iloilo City &middot; Serving Region 6 and beyond
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Right: Contact Form */}
            <FadeUp delay={0.15}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
