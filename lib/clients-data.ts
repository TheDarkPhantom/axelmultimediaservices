export const CLIENTS = [
  "Department of Tourism – Region 6",
  "Department of Tourism – Guimaras",
  "Toyota Iloilo",
  "IBC – Iloilo Builders Corporation",
  "John B. Lacson Foundation Maritime University",
  "Iloilo PRISAA",
  "Dinagyang Festival",
  "Paraw Regatta",
  "Pavia LGU",
  "Barotac Viejo LGU",
  "Lambunao LGU",
  "San Lorenzo Guimaras LGU",
] as const;

export type PortfolioCategory =
  | "Corporate"
  | "Festivals"
  | "Government"
  | "Drone"
  | "Hybrid";

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  description: string;
  thumbnail: string;
}

export const CATEGORIES: PortfolioCategory[] = [
  "Corporate",
  "Festivals",
  "Government",
  "Drone",
  "Hybrid",
];

// TODO: Replace placeholder images with actual event photos
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Dinagyang Festival 2024 Live Coverage",
    client: "Iloilo Festivals Foundation Inc.",
    category: "Festivals",
    year: "2024",
    description:
      "Multi-camera live broadcast of the Dinagyang Festival grand parade with real-time switching and social media streaming.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=Dinagyang+2024",
  },
  {
    id: "2",
    title: "Toyota Iloilo Grand Launch",
    client: "Toyota Iloilo",
    category: "Corporate",
    year: "2024",
    description:
      "Full event documentation and same-day edit for Toyota Iloilo's new model launch event.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=Toyota+Launch",
  },
  {
    id: "3",
    title: "Region 6 Tourism Summit",
    client: "Department of Tourism – Region 6",
    category: "Government",
    year: "2024",
    description:
      "Hybrid event streaming setup enabling remote participation for the Western Visayas tourism development summit.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=DOT+Summit",
  },
  {
    id: "4",
    title: "Paraw Regatta 2024 Aerial Coverage",
    client: "Paraw Regatta",
    category: "Drone",
    year: "2024",
    description:
      "Drone aerial coverage of the annual Paraw Regatta sailboat race integrated into the live broadcast feed.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=Paraw+Regatta",
  },
  {
    id: "5",
    title: "JBLFMU Commencement Exercises",
    client: "John B. Lacson Foundation Maritime University",
    category: "Hybrid",
    year: "2023",
    description:
      "Live streamed graduation ceremony with multi-camera ISO recording for the university's post-production needs.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=JBLFMU+Graduation",
  },
  {
    id: "6",
    title: "Iloilo PRISAA 2024 Opening Ceremony",
    client: "Iloilo PRISAA",
    category: "Festivals",
    year: "2024",
    description:
      "Full event production including live streaming, video documentation, and same-day highlight reel.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=PRISAA+2024",
  },
  {
    id: "7",
    title: "IBC Corporate Anniversary",
    client: "IBC – Iloilo Builders Corporation",
    category: "Corporate",
    year: "2023",
    description:
      "Corporate milestone event with multi-camera coverage, same-day edit, and social media reels.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=IBC+Anniversary",
  },
  {
    id: "8",
    title: "Guimaras Manggahan Festival",
    client: "Department of Tourism – Guimaras",
    category: "Festivals",
    year: "2023",
    description:
      "Multi-day festival documentation with drone coverage and daily highlight reels for social media.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=Manggahan+Fest",
  },
  {
    id: "9",
    title: "Pavia Municipal Day Celebration",
    client: "Pavia LGU",
    category: "Government",
    year: "2023",
    description:
      "Complete event production for the municipal founding anniversary with live stream to Facebook.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=Pavia+LGU",
  },
  {
    id: "10",
    title: "Lambunao Heritage Aerial Documentary",
    client: "Lambunao LGU",
    category: "Drone",
    year: "2023",
    description:
      "Aerial drone survey and promotional video documenting Lambunao's cultural heritage sites.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=Lambunao+Aerial",
  },
  {
    id: "11",
    title: "San Lorenzo Town Fiesta Livestream",
    client: "San Lorenzo Guimaras LGU",
    category: "Hybrid",
    year: "2024",
    description:
      "Hybrid live event setup allowing overseas Filipino residents to participate in the town fiesta remotely.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=San+Lorenzo",
  },
  {
    id: "12",
    title: "Barotac Viejo Agri-Tourism Launch",
    client: "Barotac Viejo LGU",
    category: "Government",
    year: "2024",
    description:
      "Video documentation and social media content creation for the municipality's agri-tourism initiative launch.",
    thumbnail:
      "https://placehold.co/800x600/111111/C9A84C?text=Barotac+Viejo",
  },
];

export function getPortfolioByCategory(
  category: PortfolioCategory
): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.category === category);
}

export function getAllCategories(): PortfolioCategory[] {
  return CATEGORIES;
}
