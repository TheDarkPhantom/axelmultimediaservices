import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import {
  getServiceBySlug,
  getServiceSlugs,
  getAllServices,
} from "@/lib/services-data";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/metadata";
import { FadeUp } from "@/components/shared/FadeUp";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { ServiceCard } from "@/components/services/ServiceCard";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: `${service.seo.title} | Axel Multimedia Services`,
      description: service.seo.description,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();
  const relatedServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
  ]);

  const serviceSchema = generateServiceSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema]),
        }}
      />

      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp>
            <h1 className="font-heading text-4xl font-light text-foreground md:text-6xl">
              {service.title}
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-4 text-base text-foreground/60 md:text-lg">
              {service.tagline}
            </p>
          </FadeUp>
          <GoldDivider className="my-6" />
        </div>
      </section>

      {/* Two-Column Content */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_340px]">
            {/* Main Content */}
            <div>
              {/* Description */}
              <FadeUp>
                <div className="space-y-5">
                  {service.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-foreground/70"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeUp>

              {/* What's Included */}
              <FadeUp delay={0.1}>
                <div className="mt-12">
                  <h2 className="font-heading text-2xl text-foreground md:text-3xl">
                    What&apos;s Included
                  </h2>
                  <GoldDivider centered={false} className="my-4" />
                  <ul className="mt-6 space-y-3">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 shrink-0 text-gold"
                          size={18}
                        />
                        <span className="text-sm text-foreground/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Ideal For */}
              <FadeUp delay={0.2}>
                <div className="mt-12">
                  <h2 className="font-heading text-2xl text-foreground md:text-3xl">
                    Ideal For
                  </h2>
                  <GoldDivider centered={false} className="my-4" />
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.idealFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-gold/30 px-3 py-1.5 text-xs font-medium text-gold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div>
              <FadeUp delay={0.15}>
                <div className="rounded-sm bg-surface p-8 md:sticky md:top-24">
                  <h3 className="font-heading text-xl text-foreground">
                    Interested in {service.title}?
                  </h3>
                  <p className="mt-3 text-sm text-foreground/60">
                    Every event is different. Tell us about yours and
                    we&apos;ll put together a production plan that fits your
                    scope and budget.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 block w-full rounded-sm bg-gold px-6 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-gold-light"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/services"
                    className="mt-3 block w-full text-center text-sm text-foreground/50 transition-colors hover:text-gold"
                  >
                    &larr; View All Services
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <h2 className="text-center font-heading text-2xl text-foreground md:text-4xl">
              Other Services
            </h2>
            <GoldDivider className="my-6" />
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedServices.map((related, index) => (
              <ServiceCard
                key={related.slug}
                service={related}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
