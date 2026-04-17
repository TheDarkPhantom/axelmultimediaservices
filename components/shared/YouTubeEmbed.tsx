"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  posterQuality?: "max" | "hq";
}

export function YouTubeEmbed({
  videoId,
  title,
  className = "",
  posterQuality = "max",
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(
    `https://i.ytimg.com/vi/${videoId}/${
      posterQuality === "max" ? "maxresdefault" : "hqdefault"
    }.jpg`
  );

  return (
    <div
      className={`group relative aspect-video overflow-hidden rounded-sm bg-surface ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <Image
            src={posterSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => {
              if (posterSrc.includes("maxresdefault")) {
                setPosterSrc(
                  `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
                );
              }
            }}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/50" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-black/50 text-gold backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-black md:h-20 md:w-20">
            <Play className="ml-1 h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
