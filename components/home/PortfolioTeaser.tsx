import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/clients-data";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GoldDivider } from "@/components/shared/GoldDivider";

export function PortfolioTeaser() {
  const featured = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <SectionLabel text="OUR WORK" />
          <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
            Selected Projects
          </h2>
          <GoldDivider className="my-6" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.1}>
              <div className="group relative aspect-video overflow-hidden rounded-sm bg-surface">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-black/60 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-foreground/60">
                      {item.client}
                    </p>
                    <span className="mt-2 inline-block rounded-sm bg-gold/20 px-2 py-0.5 text-xs font-medium text-gold">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-block rounded-sm border border-gold px-8 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
          >
            View Full Portfolio &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
