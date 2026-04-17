export interface BTSVideo {
  id: string;
  title: string;
  description?: string;
  featured?: boolean;
}

export const BTS_PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=REPLACE_WITH_REAL_PLAYLIST_ID";

const PLACEHOLDER_ID = "dQw4w9WgXcQ";

export const BTS_VIDEOS: BTSVideo[] = [
  {
    id: PLACEHOLDER_ID,
    title: "Multi-Cam Switcher in Action",
    description: "Cutting a live feed from the FOH position at a corporate general assembly.",
    featured: true,
  },
  {
    id: PLACEHOLDER_ID,
    title: "Drone Op — Cinematic Reveal",
    description: "Setting up the opening aerial shot for a beachfront wedding in Guimaras.",
    featured: true,
  },
  {
    id: PLACEHOLDER_ID,
    title: "Same-Day Edit Suite",
    description: "Editors working against the clock to deliver the highlight reel before the reception ends.",
    featured: true,
  },
  {
    id: PLACEHOLDER_ID,
    title: "Stage Load-In",
    description: "Rigging screens, trusses, and lighting for a corporate conference.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "Wireless Audio Check",
    description: "Lav mic and handheld frequency sweep before a keynote.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "Gimbal Coverage — Wedding",
    description: "Ronin operator tracking the processional through the aisle.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "Livestream Control Room",
    description: "Two-op directing the stream to three platforms simultaneously.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "Lighting Design — Gala",
    description: "Programming intelligent fixtures for a black-tie awards night.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "B-Roll Run",
    description: "Camera team gathering atmosphere and cutaways during registration.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "Color Grade Session",
    description: "Matching cameras and setting the final look in post.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "Teleprompter Rehearsal",
    description: "Running the CEO script at pace before doors open.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "Drone Pre-Flight",
    description: "GPS lock, compass calibration, and battery check on location.",
  },
  {
    id: PLACEHOLDER_ID,
    title: "Client Handover",
    description: "Delivering final masters and raw footage on the same day.",
  },
];

export const getFeaturedBTSVideos = () =>
  BTS_VIDEOS.filter((v) => v.featured).slice(0, 3);

export const getAllBTSVideos = () => BTS_VIDEOS;
