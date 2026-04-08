import { BUSINESS_INFO, SITE_URL, SITE_NAME } from "./constants";
import { type ServiceData } from "./services-data";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    logo: `${SITE_URL}/logo.png`,
    description: BUSINESS_INFO.description,
    email: BUSINESS_INFO.email,
    ...(BUSINESS_INFO.telephone && {
      telephone: BUSINESS_INFO.telephone,
    }),
    foundingDate: BUSINESS_INFO.foundingDate,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_INFO.address,
    },
    sameAs: BUSINESS_INFO.socialProfiles,
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    email: BUSINESS_INFO.email,
    ...(BUSINESS_INFO.telephone && {
      telephone: BUSINESS_INFO.telephone,
    }),
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_INFO.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Iloilo City",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Western Visayas",
        },
      },
      { "@type": "AdministrativeArea", name: "Western Visayas" },
      { "@type": "Country", name: "Philippines" },
    ],
    sameAs: BUSINESS_INFO.socialProfiles,
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Western Visayas, Philippines",
    },
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateOfferCatalogSchema(
  items: { name: string; category: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Professional Gear Rentals",
    description:
      "Broadcasting and videography equipment available for rent from Axel Multimedia Services in Iloilo City, Philippines.",
    provider: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: SITE_URL,
    },
    itemListElement: items.map((item, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: item.name,
        category: item.category,
      },
      position: index + 1,
    })),
  };
}
