"use client";

import { useState } from "react";
import {
  GEAR_DEPARTMENTS,
  gearIconMap,
  type GearDepartment,
  type GearSubcategory,
} from "@/lib/gear-rentals-data";
import { FadeUp } from "@/components/shared/FadeUp";

type FilterDepartment = "All" | GearDepartment;

const DEPARTMENTS: FilterDepartment[] = ["All", "Livestream", "Videography"];

function SubcategoryCard({
  subcategory,
  index,
}: {
  subcategory: GearSubcategory;
  index: number;
}) {
  const Icon = gearIconMap[subcategory.icon];
  const num = String(index + 1).padStart(2, "0");

  return (
    <FadeUp delay={index * 0.08}>
      <div className="group relative h-full overflow-hidden rounded-sm border border-white/5 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_8px_30px_rgba(201,168,76,0.06)]">
        {/* Gold top accent */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
        {/* Editorial number */}
        <span className="absolute right-6 top-5 font-heading text-5xl font-light text-white/[0.08] transition-colors duration-300 group-hover:text-gold/20">
          {num}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/5">
          <Icon className="text-gold" size={22} />
        </div>
        <h3 className="mt-5 text-base font-medium text-foreground">
          {subcategory.title}
        </h3>

        <ul className="mt-4 space-y-2">
          {subcategory.items.map((item) => (
            <li
              key={item.name}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/60 transition-colors duration-200 hover:text-foreground/90"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold/50" />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}

export function GearInventory() {
  const [active, setActive] = useState<FilterDepartment>("All");

  const filtered =
    active === "All"
      ? GEAR_DEPARTMENTS
      : GEAR_DEPARTMENTS.filter((d) => d.department === active);

  let runningIndex = 0;

  return (
    <>
      {/* Department Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {DEPARTMENTS.map((dept) => (
          <button
            key={dept}
            onClick={() => setActive(dept)}
            className={`relative rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 ${
              active === dept
                ? "bg-gold text-black shadow-[0_2px_12px_rgba(201,168,76,0.2)]"
                : "border border-white/10 text-foreground/50 hover:border-gold/30 hover:text-foreground/80"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Departments */}
      <div className="mt-12 space-y-16">
        {filtered.map((dept) => {
          const cards = dept.subcategories.map((sub) => {
            const card = (
              <SubcategoryCard
                key={sub.title}
                subcategory={sub}
                index={runningIndex}
              />
            );
            runningIndex++;
            return card;
          });

          return (
            <div key={dept.slug}>
              <FadeUp>
                <h2 className="font-heading text-2xl text-foreground md:text-3xl">
                  {dept.department}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-foreground/50">
                  {dept.description}
                </p>
              </FadeUp>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cards}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
