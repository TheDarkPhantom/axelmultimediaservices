"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/shared/FadeUp";
import {
  getFounder,
  getCrew,
  getInitials,
  type TeamMember,
} from "@/lib/team-data";

function MemberPhoto({
  member,
  size,
}: {
  member: TeamMember;
  size: "lg" | "sm";
}) {
  const px = size === "lg" ? 160 : 120;
  const sizeClasses =
    size === "lg" ? "h-[160px] w-[160px]" : "h-[120px] w-[120px]";
  const initialsSize = size === "lg" ? "text-4xl" : "text-2xl";

  return (
    <div
      className={`${sizeClasses} shrink-0 overflow-hidden rounded-full border-2 border-gold/30`}
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.name}
          width={px}
          height={px}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-2 to-surface">
          <span
            className={`font-heading font-light text-gold/60 ${initialsSize}`}
          >
            {getInitials(member.name)}
          </span>
        </div>
      )}
    </div>
  );
}

function ExpandableBio({ bio }: { bio: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: expanded ? "500px" : "0px" }}
      >
        <p className="mt-3 text-sm leading-relaxed text-foreground/50">{bio}</p>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-xs font-medium text-gold transition-colors hover:text-gold-light"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}

function FounderCard({ member }: { member: TeamMember }) {
  return (
    <FadeUp>
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-sm border border-white/5 bg-surface p-8 md:p-10">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <MemberPhoto member={member} size="lg" />
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-light text-foreground md:text-2xl">
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-gold/70">
              {member.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/60">
              {member.summary}
            </p>
            <ExpandableBio bio={member.bio} />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

function CrewCard({
  member,
  delay,
}: {
  member: TeamMember;
  delay: number;
}) {
  return (
    <FadeUp delay={delay}>
      <div className="relative overflow-hidden rounded-sm border border-white/5 bg-surface p-6">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
        <div className="flex flex-col items-center text-center">
          <MemberPhoto member={member} size="sm" />
          <h3 className="mt-4 text-base font-medium text-foreground">
            {member.name}
          </h3>
          <p className="mt-1 text-xs font-medium text-gold/70">{member.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/50">
            {member.summary}
          </p>
          <ExpandableBio bio={member.bio} />
        </div>
      </div>
    </FadeUp>
  );
}

export function TeamSection() {
  const founder = getFounder();
  const crew = getCrew();

  return (
    <div className="mt-12 space-y-10">
      <FounderCard member={founder} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {crew.map((member, index) => (
          <CrewCard key={member.name} member={member} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
}
