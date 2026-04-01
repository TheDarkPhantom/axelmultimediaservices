export type ServiceIconName =
  | "Radio"
  | "Plane"
  | "Video"
  | "Zap"
  | "Smartphone"
  | "Layers";

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  icon: ServiceIconName;
  shortDescription: string;
  description: string[];
  included: string[];
  idealFor: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const services: ServiceData[] = [
  {
    slug: "live-streaming",
    title: "Live Streaming",
    tagline: "Your event, on every screen, the moment it happens.",
    icon: "Radio",
    shortDescription:
      "Multi-platform broadcast with redundant internet, real-time graphics, and zero downtime.",
    description: [
      "We put your event on Facebook, YouTube, Zoom, and custom RTMP destinations simultaneously — with redundant internet, professional switching, and broadcast-grade encoding running behind every frame. If one connection drops, the backup takes over. Your audience never notices.",
      "Every stream gets real-time graphics: lower thirds, sponsor logos, transition effects, and picture-in-picture layouts. This isn't a phone propped on a tripod. It's the same production quality you see on television, delivered from wherever your event happens to be.",
      "We've run zero-downtime broadcasts for the Dinagyang Festival's grand parade, multi-day government summits, and corporate launches where a frozen stream wasn't an option. The technical chain — from camera to encoder to platform — is tested before doors open.",
    ],
    included: [
      "Simultaneous multi-platform streaming (Facebook, YouTube, Zoom, RTMP)",
      "Redundant internet with automatic failover",
      "Real-time graphics, lower thirds, and sponsor overlays",
      "Professional multi-camera switching",
      "Pre-event technical rehearsal",
      "Dedicated streaming engineer on-site",
      "Post-event stream analytics",
    ],
    idealFor: [
      "Corporate Conferences",
      "Government Summits",
      "Festivals & Cultural Events",
      "Hybrid Meetings",
      "Product Launches",
      "Award Ceremonies",
    ],
    seo: {
      title: "Live Streaming Services",
      description:
        "Professional multi-platform live streaming for events in Iloilo City and Region 6. Redundant connections, real-time graphics, and zero-downtime broadcasting.",
      keywords: [
        "live streaming Iloilo",
        "event live stream Philippines",
        "hybrid event streaming Iloilo",
        "Facebook live stream service",
      ],
    },
  },
  {
    slug: "drone-coverage",
    title: "Drone Aerial Coverage",
    tagline: "The shot that changes everything — from above.",
    icon: "Plane",
    shortDescription:
      "4K aerial capture integrated directly into your live broadcast or delivered as standalone footage.",
    description: [
      "Some shots only exist from the sky. A parade route from 200 feet. A festival crowd filling a plaza. A venue reveal that starts tight on the stage and pulls back to show the entire bay. Our drone fleet captures these moments in 4K and feeds them directly into your live production.",
      "Unlike standalone drone operators, we wire our aerial feeds into the switching console alongside ground cameras. Your director cuts to the drone in real time — same as any other camera source. The result is a broadcast that moves between ground-level intimacy and aerial grandeur without interruption.",
      "Every flight is planned ahead of time. Our licensed pilots coordinate with event organizers and local authorities, plot flight paths around the venue, and carry multi-battery kits for extended coverage. Safe, legal, and unobtrusive.",
    ],
    included: [
      "4K aerial capture with stabilized gimbal",
      "Live drone feed into multi-camera production",
      "Pre-event flight planning and venue survey",
      "Licensed and insured drone pilot",
      "Multi-battery extended flight coverage",
      "Raw aerial footage delivery",
      "Edited aerial highlight package",
    ],
    idealFor: [
      "Outdoor Festivals",
      "Parades & Street Events",
      "Venue Showcases",
      "Tourism Promotions",
      "Construction Documentation",
      "Large-Scale Government Events",
    ],
    seo: {
      title: "Drone Aerial Coverage",
      description:
        "Professional drone coverage for events in Region 6, Philippines. 4K aerial capture with live feed integration into your multi-camera production.",
      keywords: [
        "drone coverage Region 6 Philippines",
        "aerial video Iloilo",
        "event drone coverage",
        "drone videography Philippines",
      ],
    },
  },
  {
    slug: "video-documentation",
    title: "Video Documentation",
    tagline: "Every moment captured. Nothing left to memory.",
    icon: "Video",
    shortDescription:
      "Multi-camera coverage with broadcast-quality audio — organized, labeled, and ready to use.",
    description: [
      "We cover your event from every meaningful angle: stage presentations, audience reactions, backstage prep, hallway conversations. Multiple cameras running simultaneously means nothing falls through the cracks — whether it's a keynote speech or a candid moment between sessions.",
      "The difference is in the details. Broadcast-quality audio from lavalieres, podium feeds, and ambient mics. Strategic camera positions chosen during our pre-event walkthrough. Color-matched footage that looks polished straight out of the camera. This isn't surveillance — it's documentation done at production grade.",
      "After the event, you get organized, properly labeled footage delivered in your preferred format. Use it for compliance records, internal training, promotional content, or hand it to your own editor. Everything is structured so you don't waste hours scrubbing through unmarked files.",
    ],
    included: [
      "Multi-camera professional coverage",
      "Broadcast-quality audio from multiple sources",
      "Pre-event venue walkthrough and camera planning",
      "Organized and labeled footage delivery",
      "Multiple export formats (ProRes, H.264, etc.)",
      "Redundant backup recording",
      "Post-event footage log with timecodes",
    ],
    idealFor: [
      "Corporate Events",
      "Government Proceedings",
      "Academic Conferences",
      "Training Sessions",
      "Award Ceremonies",
      "Product Launches",
    ],
    seo: {
      title: "Video Documentation Services",
      description:
        "Professional multi-camera video documentation for events in Iloilo City. Broadcast-quality coverage ready for archiving and repurposing.",
      keywords: [
        "video production Iloilo",
        "event video documentation",
        "multi-camera recording Philippines",
        "corporate video Iloilo",
      ],
    },
  },
  {
    slug: "same-day-edits",
    title: "Same-Day Edits",
    tagline: "Your highlight reel — before the night ends.",
    icon: "Zap",
    shortDescription:
      "A polished, cinematic recap delivered within hours — music, color grading, and all.",
    description: [
      "Our editing team works alongside the production crew in real time. While cameras are still rolling, they're assembling a 3-5 minute highlight reel with licensed music, color grading, and cinematic pacing. By the time your closing ceremony starts, the recap is ready to screen.",
      "This isn't a rough cut. Pre-planned edit templates, professional software, and a dedicated editor on-site mean the result looks like it took days. Attendees share it immediately. Your social channels get content while the event is still trending. Sponsors see their branding in action before they've left the venue.",
      "Same-day edits hit hardest when momentum matters: a product launch that needs instant social proof, a festival driving attendance for day two, or a corporate event where leadership wants something shareable before the debrief.",
    ],
    included: [
      "On-site editing station and dedicated editor",
      "Cinematic highlight reel (3-5 minutes)",
      "Licensed music and sound design",
      "Color grading and professional transitions",
      "Delivery within hours of event conclusion",
      "Exports optimized for social media and large-screen playback",
      "One round of revisions within 48 hours",
    ],
    idealFor: [
      "Festivals & Multi-Day Events",
      "Product Launches",
      "Corporate Galas",
      "Award Ceremonies",
      "Wedding Receptions",
      "Government Inaugurations",
    ],
    seo: {
      title: "Same-Day Edit Services",
      description:
        "Polished same-day highlight reels delivered within hours of your event. Professional editing, color grading, and music — ready for immediate sharing.",
      keywords: [
        "same-day edit Philippines",
        "event highlight reel Iloilo",
        "same-day video edit",
        "fast turnaround event video",
      ],
    },
  },
  {
    slug: "social-media-reels",
    title: "Social Media Reels",
    tagline: "Short, sharp, and built for the feed.",
    icon: "Smartphone",
    shortDescription:
      "Vertical content shot and edited natively for Instagram, Facebook, and TikTok.",
    description: [
      "We don't crop your horizontal footage and call it a reel. Our content crew shoots natively in 9:16 alongside the main production — capturing the moments, angles, and energy that work on mobile. Punchy pacing, hooks in the first second, on-screen text for silent viewing.",
      "Each reel is edited for its target platform. Instagram gets polished transitions and music sync. TikTok gets raw energy and trending sounds. Facebook gets captions and a slightly slower pace. The goal is engagement, not just posting for the sake of it.",
      "You choose the volume: a batch of 5-15 reels delivered on event day, or a rolling content calendar that keeps your event in the feed for weeks. Either way, your event lives longer than the venue booking.",
    ],
    included: [
      "Dedicated social media content crew",
      "Native vertical 9:16 capture",
      "Platform-specific editing and pacing",
      "On-screen captions and text overlays",
      "Trending audio integration",
      "Batch delivery of 5-15 reels per event",
      "Platform-ready exports (IG Reels, TikTok, FB Reels)",
    ],
    idealFor: [
      "Festivals & Cultural Events",
      "Brand Launches",
      "Tourism Campaigns",
      "Influencer Events",
      "Music & Entertainment",
      "Food & Lifestyle Events",
    ],
    seo: {
      title: "Social Media Reels Production",
      description:
        "Short-form vertical video content optimized for Instagram, Facebook, and TikTok. Event social media coverage in Iloilo and Region 6.",
      keywords: [
        "social media reels Iloilo",
        "event content creation Philippines",
        "TikTok video production",
        "Instagram reels service",
      ],
    },
  },
  {
    slug: "iso-multicamera",
    title: "ISO Multi-Camera Recording",
    tagline: "Every angle recorded. Every option preserved.",
    icon: "Layers",
    shortDescription:
      "Independent isolated feeds per camera and audio source — full post-production control.",
    description: [
      "Every camera records its own full-resolution feed. Every microphone records its own isolated audio channel. While your live broadcast goes out with real-time switching decisions, the ISO recordings preserve every angle independently — giving your editor complete freedom after the fact.",
      "This matters when you need both a live output and a polished post-production deliverable. The live director makes fast calls for the broadcast. Later, an editor can reconstruct the entire show: choose better cuts, fix timing, swap angles, and build an entirely different version without losing a single frame.",
      "ISO also provides critical redundancy. If one recording fails, the rest cover you. For government proceedings, legal events, academic defenses, or any situation where footage loss is unacceptable — ISO recording is the only professional approach.",
    ],
    included: [
      "Independent recording per camera (4K capable)",
      "Isolated audio per source (lavalier, podium, ambient)",
      "Timecode synchronization across all sources",
      "Redundant storage with backup drives",
      "Post-event media organization and labeling",
      "Broadcast-ready ISO file delivery",
      "Optional post-production editing from ISO sources",
    ],
    idealFor: [
      "Government Proceedings",
      "Academic Conferences",
      "Legal & Compliance Events",
      "Concert & Performance Recording",
      "Corporate Board Meetings",
      "High-Stakes Presentations",
    ],
    seo: {
      title: "ISO Multi-Camera Recording",
      description:
        "Independent isolated multi-camera recording with redundant storage and timecode sync. Full post-production control for events in Iloilo City.",
      keywords: [
        "ISO recording Iloilo",
        "multi-camera recording Philippines",
        "isolated camera recording",
        "event multi-cam setup",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getAllServices(): ServiceData[] {
  return services;
}
