import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Axel Multimedia Services",
    default:
      "Axel Multimedia Services | Live Streaming & Event Coverage Iloilo",
  },
  description:
    "Professional live streaming, drone coverage, video documentation, and same-day edits for events in Iloilo City and Region 6, Philippines.",
  keywords: [
    "live streaming Iloilo",
    "event coverage Iloilo City",
    "drone coverage Region 6 Philippines",
    "video production Iloilo",
    "same-day edit Philippines",
    "hybrid event streaming Iloilo",
  ],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: SITE_URL,
    siteName: "Axel Multimedia Services",
    title: "Axel Multimedia Services | Live Streaming & Event Coverage Iloilo",
    description:
      "Professional live streaming, drone coverage, video documentation, and same-day edits for events in Iloilo City and Region 6, Philippines.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axel Multimedia Services | Live Streaming & Event Coverage Iloilo",
    description:
      "Professional live streaming, drone coverage, and video production for events in Iloilo City and Region 6, Philippines.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
