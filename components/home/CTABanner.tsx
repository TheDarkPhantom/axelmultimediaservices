import Link from "next/link";
import { FadeUp } from "@/components/shared/FadeUp";

export function CTABanner() {
  return (
    <section className="border-y border-gold/20 bg-gold/5 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <h2 className="font-heading text-3xl text-foreground md:text-4xl">
            Ready to Elevate Your Next Event?
          </h2>
          <p className="mt-4 text-foreground/60">
            Tell us what you need. We&apos;ll build the package around it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-gold px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-gold-light"
          >
            Get a Quote
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
