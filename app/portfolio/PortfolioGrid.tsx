"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PORTFOLIO_ITEMS,
  CATEGORIES,
  type PortfolioCategory,
} from "@/lib/clients-data";
import { FadeUp } from "@/components/shared/FadeUp";

// TODO: Add lightbox or video modal — deferred to v2

type FilterCategory = "All" | PortfolioCategory;

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredItems =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const categories: FilterCategory[] = ["All", ...CATEGORIES];

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-sm px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-gold text-black"
                : "border border-white/10 text-foreground/60 hover:border-gold/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <FadeUp key={item.id} delay={index * 0.06}>
            <div className="group relative aspect-video overflow-hidden rounded-sm bg-surface">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-base font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-foreground/50">{item.client}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-sm border border-gold/30 px-2 py-0.5 text-xs text-gold">
                    {item.category}
                  </span>
                  <span className="text-xs text-foreground/40">{item.year}</span>
                </div>
              </div>

              {/* Always-visible title bar on mobile */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                <h3 className="text-sm font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-foreground/50">
                  {item.client}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="mt-12 text-center text-foreground/40">
          No projects found in this category.
        </p>
      )}
    </>
  );
}
