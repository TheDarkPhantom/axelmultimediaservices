import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/clients-data";
import { FadeUp } from "@/components/shared/FadeUp";
import { SectionLabel } from "@/components/shared/SectionLabel";

function ViewfinderCorners() {
  const corner = "absolute w-4 h-4 border-gold/40";
  return (
    <>
      <span className={`${corner} left-3 top-3 border-l border-t`} />
      <span className={`${corner} right-3 top-3 border-r border-t`} />
      <span className={`${corner} left-3 bottom-3 border-l border-b`} />
      <span className={`${corner} right-3 bottom-3 border-r border-b`} />
    </>
  );
}

export function PortfolioTeaser() {
  const featured = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <SectionLabel text="FROM OUR REEL" />
          <h2 className="mt-4 font-heading text-3xl text-foreground md:text-5xl">
            Recent Productions
          </h2>
        </div>

        {/* Bento grid: first card is hero-sized */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((item, index) => {
            const isHero = index === 0;
            return (
              <FadeUp
                key={item.id}
                delay={index * 0.1}
                className={isHero ? "md:row-span-2" : ""}
              >
                <div
                  className={`group relative overflow-hidden rounded-sm bg-surface ${
                    isHero ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-video"
                  }`}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={
                      isHero
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                  />

                  {/* Persistent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Viewfinder corners */}
                  <ViewfinderCorners />

                  {/* Content — always visible */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <span className="mb-2 inline-block rounded-sm border border-gold/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gold">
                      {item.category}
                    </span>
                    <h3
                      className={`font-medium text-foreground ${
                        isHero ? "text-lg md:text-xl" : "text-sm md:text-base"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-foreground/50 md:text-sm">
                      {item.client} &middot; {item.year}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-block rounded-sm border border-gold/60 px-8 py-3 text-sm font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold"
          >
            View Full Portfolio &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
