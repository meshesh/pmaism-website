// Central SEO configuration for PMAISM — HITEC City, Hyderabad
// All meta tags, Open Graph, Twitter Card, AEO, GEO, and Schema generators.

const SITE_URL = "https://pmaism.com";
const SITE_NAME = "PMAISM";
const DEFAULT_IMAGE = `${SITE_URL}/img/og-image.png`;

// ---------------------------------------------------------------------------
// Location Data
// ---------------------------------------------------------------------------

export const LOCATION = {
  name: "PMAISM",
  tagline: "AI-Enhanced Project Management Career Accelerator",
  address: {
    street: "Ground Floor, AddIT Solutions, MC Design House, Rohini Layout Rd",
    locality: "HITEC City",
    region: "Hyderabad, Telangana",
    postalCode: "500081",
    country: "IN",
  },
  phone: "+918309813723",
  email: "hello@pmaism.com",
  geo: {
    latitude: 17.4486,
    longitude: 78.3908,
  },
  url: SITE_URL,
  linkedin: "https://www.linkedin.com/company/pmaism",
};

export const AREAS_SERVED = [
  { name: "HITEC City", priority: "primary" },
  { name: "Madhapur", priority: "primary" },
  { name: "Gachibowli", priority: "primary" },
  { name: "Financial District", priority: "primary" },
  { name: "Nanakramguda", priority: "primary" },
  { name: "Kondapur", priority: "secondary" },
  { name: "Kukatpally", priority: "secondary" },
  { name: "KPHB", priority: "secondary" },
];

// ---------------------------------------------------------------------------
// Default Meta Tags (site-wide)
// ---------------------------------------------------------------------------

export const defaultSEO = {
  title: `${SITE_NAME} — Project Management Course in HITEC City, Hyderabad | Scrum Master Training`,
  description: `${SITE_NAME} — #1 Project Management & Scrum Master training institute in HITEC City, Hyderabad. Live mentor-led Agile, JIRA, AI productivity course with placement support. Serving Madhapur, Gachibowli, Kondapur, Kukatpally & Financial District. 650+ career transitions.`,
  keywords: [
    "project management course Hyderabad",
    "scrum master training HITEC City",
    "agile certification Madhapur",
    "PM course Gachibowli",
    "project management institute Kondapur",
    "scrum master class Kukatpally",
    "PM training Financial District Hyderabad",
    "AI project management course",
    "career switch project manager",
    "project management with placement Hyderabad",
    "PMAISM Hyderabad",
  ].join(", "),
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  type: "website",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
};

// Landing page overrides (merge with defaultSEO)
export const landingSEO = {
  ...defaultSEO,
  title: `${SITE_NAME} — Project Management Course in HITEC City, Hyderabad | Scrum Master Training`,
  description: `${SITE_NAME} — #1 Project Management & Scrum Master training institute in HITEC City, Hyderabad. Live mentor-led Agile, JIRA, AI productivity course with placement support. Serving Madhapur, Gachibowli, Kondapur, Kukatpally & Financial District. 650+ career transitions.`,
};

// ---------------------------------------------------------------------------
// AEO (Answer Engine Optimization) Meta
// ---------------------------------------------------------------------------

export const aeoMeta = {
  "ai-description": `${SITE_NAME} is a project management and scrum master training institute located in HITEC City, Hyderabad. Offers live 4-6 week courses covering Agile, Scrum, JIRA, sprint planning, stakeholder management, AI productivity tools, mock interviews, and placement support. Serves professionals from Madhapur, Gachibowli, Financial District, Kondapur, Kukatpally, and Nanakramguda.`,
  "ai-topics": "project management training Hyderabad, scrum master course HITEC City, agile certification Madhapur, PM career accelerator, AI productivity project management, placement support Hyderabad",
  "ai-audience": "IT professionals in HITEC City Hyderabad, freshers in Madhapur, career switchers Gachibowli, working professionals Kondapur, project management aspirants Kukatpally",
};

// ---------------------------------------------------------------------------
// GEO (Generative Engine Optimization) Meta
// ---------------------------------------------------------------------------

export const geoMeta = {
  "citation-title": `${SITE_NAME} — Project Management Training Institute, HITEC City, Hyderabad`,
  "citation-language": "en",
  ICBM: `${LOCATION.geo.latitude}, ${LOCATION.geo.longitude}`,
  "geo.position": `${LOCATION.geo.latitude};${LOCATION.geo.longitude}`,
  "geo.region": "IN-TS",
  "geo.placename": "HITEC City, Hyderabad",
};

// ---------------------------------------------------------------------------
// Schema.org Generators
// ---------------------------------------------------------------------------

/**
 * LocalBusiness / EducationalOrganization schema — primary brand schema.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    description: `${SITE_NAME} is an AI-Enhanced Project Management Career Accelerator offering live mentor-led training for Project Managers and Scrum Masters in HITEC City, Hyderabad.`,
    slogan: "Learn how real Project Managers work.",
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo nobg.png`,
    telephone: LOCATION.phone,
    email: LOCATION.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: LOCATION.address.street,
      addressLocality: LOCATION.address.locality,
      addressRegion: LOCATION.address.region,
      postalCode: LOCATION.address.postalCode,
      addressCountry: LOCATION.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LOCATION.geo.latitude,
      longitude: LOCATION.geo.longitude,
    },
    areaServed: AREAS_SERVED.map((a) => ({
      "@type": "Place",
      name: `${a.name}, Hyderabad`,
    })),
    sameAs: [LOCATION.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: LOCATION.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Telugu"],
    },
  };
}

/**
 * Course schema — the PM & Scrum Master accelerator program.
 */
export function getCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${SITE_NAME} Project Management & Scrum Master Career Accelerator`,
    description:
      "A 4-6 week live online program covering Agile & Scrum, sprint planning, stakeholder management, AI productivity, interview preparation and career transition. Located in HITEC City, Hyderabad.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    educationalLevel: "Beginner to Intermediate",
    timeRequired: "P6W",
    occupationalCategory: "Project Manager",
    teaches: [
      "Agile",
      "Scrum",
      "JIRA",
      "Sprint Planning",
      "Stakeholder Management",
      "AI Productivity",
      "Interview Preparation",
    ],
    locationCreated: {
      "@type": "Place",
      name: `${LOCATION.address.locality}, ${LOCATION.address.region}`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "P6W",
      courseSchedule: "Morning batches, Monday to Friday",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free demo session available",
    },
  };
}

/**
 * FAQPage schema — generates from FAQS array in content.js.
 * @param {Array<{q: string, a: string}>} faqs
 */
export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * WebSite schema with SearchAction for sitelinks searchbox.
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * BreadcrumbList schema — single-level for the landing page.
 */
export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };
}

/**
 * Speakable schema — targets FAQ answers for voice assistants / AI Overviews.
 */
export function getSpeakableSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_NAME} — Project Management Training, HITEC City, Hyderabad`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-answer", "[data-testid='hero-cta-card']"],
    },
  };
}
