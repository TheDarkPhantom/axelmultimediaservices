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
    tagline: "Broadcast your event to the world — in real time.",
    icon: "Radio",
    shortDescription:
      "Multi-platform real-time broadcast for corporate events, festivals, and hybrid setups.",
    description: [
      "Live streaming is the cornerstone of modern event production. Whether you're broadcasting a corporate conference to remote stakeholders, streaming a festival to thousands of online viewers, or enabling hybrid participation for government summits, our live streaming service ensures your event reaches its full audience — without compromise.",
      "We deploy redundant internet connections, professional switching equipment, and broadcast-grade encoding to deliver a seamless viewing experience across Facebook Live, YouTube, Zoom, and custom RTMP destinations simultaneously. Every stream includes real-time graphics overlays, lower thirds, and transition effects that elevate your broadcast above a simple camera-to-screen feed.",
      "Our team manages the entire technical chain from pre-event testing through final sign-off, so you can focus on your event while we handle the broadcast. We've delivered zero-downtime streams for Iloilo's largest festivals and highest-profile government events.",
    ],
    included: [
      "Multi-platform simultaneous streaming (Facebook, YouTube, Zoom, custom RTMP)",
      "Redundant internet connectivity with failover",
      "Real-time graphics overlays and lower thirds",
      "Professional video switching and transitions",
      "Pre-event technical rehearsal and testing",
      "Dedicated streaming engineer on-site",
      "Post-event stream analytics report",
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
    tagline: "See your event from a perspective only the sky can offer.",
    icon: "Plane",
    shortDescription:
      "Breathtaking aerial perspectives integrated seamlessly into your live production.",
    description: [
      "Aerial drone coverage transforms the way audiences experience your event. Our professional-grade drone systems capture sweeping aerial panoramas, dynamic venue flyovers, and dramatic reveal shots that add cinematic depth to any production — live or recorded.",
      "Unlike basic drone operators, we integrate our aerial feeds directly into your live production workflow. Your switching director can cut to the drone feed in real time alongside ground cameras, creating a broadcast that rivals network television production quality.",
      "Every flight is planned with safety and regulatory compliance at the forefront. Our licensed pilots coordinate with event organizers and local authorities to ensure safe, unobtrusive aerial operations that enhance your event without disrupting it.",
    ],
    included: [
      "Professional-grade 4K aerial capture",
      "Live feed integration into multi-camera production",
      "Pre-event flight planning and venue survey",
      "Licensed and insured drone pilot",
      "Multi-battery extended flight capability",
      "Raw aerial footage delivery",
      "Edited aerial highlight package",
    ],
    idealFor: [
      "Outdoor Festivals",
      "Parades & Street Events",
      "Venue Showcases",
      "Tourism Promotions",
      "Construction & Infrastructure",
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
    tagline: "A lasting record of every moment that matters.",
    icon: "Video",
    shortDescription:
      "Professional multi-camera coverage creating lasting records ready for repurposing.",
    description: [
      "Comprehensive video documentation ensures every significant moment of your event is captured, preserved, and ready for repurposing. Our multi-camera setups cover presentations, performances, audience reactions, and behind-the-scenes moments simultaneously — nothing is missed.",
      "We go beyond simple point-and-shoot recording. Our documentation crews use broadcast-quality cameras, professional audio capture, and strategic camera positioning to create footage that looks and sounds polished from the start. This means faster turnaround on deliverables and higher-quality output for your archives, training materials, or promotional content.",
      "Whether you need a formal record for compliance purposes, content for internal communications, or raw material for future marketing campaigns, our documentation packages give you complete, organized, and properly labeled footage delivered in your preferred format.",
    ],
    included: [
      "Multi-camera professional coverage",
      "Broadcast-quality audio recording",
      "Strategic camera positioning for complete coverage",
      "Organized and labeled footage delivery",
      "Multiple export formats available",
      "Backup recording on redundant storage",
      "Post-event footage review and logging",
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
    tagline: "Your highlight reel — before the night is over.",
    icon: "Zap",
    shortDescription:
      "Polished highlight reels delivered within hours of your event, ready for immediate sharing.",
    description: [
      "Same-day edits deliver the emotional impact of your event while the energy is still fresh. Our on-site editing team works in real time alongside the production crew, assembling a polished highlight reel that's ready to screen at your closing ceremony or share on social media before attendees have left the venue.",
      "This isn't a rushed, rough-cut assembly. Our editors use professional-grade software and pre-planned edit templates to produce a cinematic recap complete with music, transitions, and color grading — all within hours. The result is a deliverable that looks like it took days to produce.",
      "Same-day edits are particularly powerful for events where momentum matters: product launches that need immediate social proof, festivals that want to drive attendance for the next day, or corporate events where leadership wants instant shareability.",
    ],
    included: [
      "On-site editing station and dedicated editor",
      "Cinematic highlight reel (3-5 minutes)",
      "Licensed music and sound design",
      "Color grading and professional transitions",
      "Delivery within hours of event conclusion",
      "Optimized exports for social media and presentation",
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
    tagline: "Content that performs — crafted for every platform.",
    icon: "Smartphone",
    shortDescription:
      "Short-form vertical content optimized for Instagram, Facebook, and TikTok.",
    description: [
      "Social media reels extend the life of your event far beyond the venue doors. Our content team captures, edits, and optimizes short-form vertical video specifically for the algorithms and audiences of Instagram, Facebook, and TikTok — so your event content actually gets seen.",
      "We don't just crop your existing footage to a vertical frame. Our reels are shot and edited natively for mobile consumption: punchy pacing, attention-grabbing hooks in the first second, on-screen text for silent viewing, and trending audio integration where appropriate. Each reel is crafted to maximize engagement on its target platform.",
      "Whether you need a batch of content delivered on the day of the event or a rolling content calendar stretching weeks after, our social media reel packages are designed to keep your event — and your brand — in the feed.",
    ],
    included: [
      "Dedicated social media content crew",
      "Vertical 9:16 capture alongside main production",
      "Platform-specific editing and optimization",
      "On-screen captions and text overlays",
      "Trending audio integration where appropriate",
      "Batch delivery of 5-15 reels per event",
      "Platform-specific export specs (IG Reels, TikTok, FB Reels)",
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
    tagline: "Every angle captured. Every option preserved.",
    icon: "Layers",
    shortDescription:
      "Independent isolated feeds per camera and audio source for full post-production control.",
    description: [
      "ISO (isolated) multi-camera recording captures independent, full-resolution feeds from every camera and audio source simultaneously. While the live production mix goes out to your audience in real time, every individual camera angle and audio channel is recorded separately — giving you complete post-production flexibility.",
      "This approach is essential for events that demand both a live output and a polished post-production deliverable. Your live switching director makes real-time creative decisions for the broadcast, but after the event, an editor can reconstruct the entire show using any combination of angles, choose better cuts, fix timing, and create an entirely different edit without losing a single frame.",
      "ISO recording also provides critical redundancy. If any single recording fails, the remaining isolated feeds ensure complete coverage is preserved. For high-stakes events where footage loss is unacceptable — government proceedings, legal depositions, academic defenses — ISO recording is the professional standard.",
    ],
    included: [
      "Independent recording per camera (4K capable)",
      "Isolated audio recording per source (lavalier, podium, ambient)",
      "Timecode synchronization across all sources",
      "Redundant storage with backup drives",
      "Post-event media organization and labeling",
      "Delivery of all ISO files in broadcast-ready format",
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
