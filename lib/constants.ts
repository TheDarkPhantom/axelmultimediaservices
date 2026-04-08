export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://axelmultimediaservices.com";
export const SITE_NAME = "Axel Multimedia Services";
export const SITE_TAGLINE =
  "ILOILO'S PREMIER MEDIA PRODUCTION COMPANY";
export const SITE_DESCRIPTION =
  "Professional live streaming, drone coverage, video documentation, and same-day edits for events in Iloilo City and Region 6, Philippines.";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/AxelMultimediaServices",
  youtube: "", // TODO: Add YouTube channel URL
};

export const BUSINESS_INFO = {
  name: "Axel Multimedia Services",
  legalName: "Axel Multimedia Services",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "", // TODO: Add phone number
  telephoneDisplay: "", // TODO: Add phone number
  email: "axel.eventsandservices@gmail.com",
  priceRange: "Custom Quote",
  foundingDate: "2017", // TODO: Confirm actual year founded
  address: {
    streetAddress: "", // TODO: Add street address
    addressLocality: "Iloilo City",
    addressRegion: "Western Visayas",
    postalCode: "5000",
    addressCountry: "PH",
  },
  addressDisplayLines: ["Iloilo City, Philippines"],
  geo: {
    latitude: 10.7202,
    longitude: 122.5621,
  },
  social: SOCIAL_LINKS,
  socialProfiles: Object.values(SOCIAL_LINKS).filter(Boolean),
};

export const TRUST_STATS = [
  { value: 500, suffix: "+", label: "Events Covered" },
  { value: 8, suffix: "+", label: "Years in Operation" }, // TODO: Confirm actual year founded
  { value: 12, suffix: "+", label: "Major Clients" },
  { value: 3, suffix: "", label: "Regions Served" },
] as const;

export const CTA_COPY = {
  primary: { text: "Get a Quote", href: "/contact" },
  secondary: { text: "View Our Work", href: "/portfolio" },
} as const;

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "Axel Multimedia Services — Live Streaming & Event Coverage Iloilo",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gear Rentals", href: "/gear-rentals" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
