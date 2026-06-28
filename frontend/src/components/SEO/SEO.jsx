import React from "react";
import { Helmet } from "react-helmet-async";
import Schema from "./Schema";
import { defaultSEO, aeoMeta, geoMeta } from "@/data/seo";

/**
 * Dynamic SEO component — manages all <head> meta tags.
 *
 * Usage:
 *   <SEO
 *     title="Page Title"
 *     description="Page description"
 *     url="https://pmaism.com/page"
 *     schema={[orgSchema, courseSchema]}
 *   />
 *
 * @param {object} props
 * @param {string} [props.title]        — Page title (appended with site name)
 * @param {string} [props.description]  — Meta description
 * @param {string} [props.keywords]     — Comma-separated keywords
 * @param {string} [props.url]          — Canonical URL
 * @param {string} [props.image]        — OG image URL
 * @param {string} [props.type]         — OG type (default: website)
 * @param {string} [props.robots]       — Robots directive
 * @param {Array}  [props.schema]       — Array of JSON-LD schema objects
 */
export default function SEO({
  title,
  description,
  keywords,
  url,
  image,
  type,
  robots,
  schema = [],
}) {
  const seo = {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    url: url || defaultSEO.url,
    image: image || defaultSEO.image,
    type: type || defaultSEO.type,
    robots: robots || defaultSEO.robots,
  };

  // Ensure full absolute URLs for OG
  const ogImage = seo.image.startsWith("http")
    ? seo.image
    : `${seo.url}${seo.image}`;
  const ogUrl = seo.url.startsWith("http") ? seo.url : `${seo.url}${seo.url}`;

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content={seo.robots} />
        <meta name="author" content="PMAISM" />
        <link rel="canonical" href={ogUrl} />

        {/* Open Graph */}
        <meta property="og:type" content={seo.type} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="PMAISM — Project Management Training, HITEC City Hyderabad"
        />
        <meta property="og:site_name" content="PMAISM" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="twitter:image:alt"
          content="PMAISM — Project Management Training, HITEC City Hyderabad"
        />

        {/* AEO (Answer Engine Optimization) */}
        {Object.entries(aeoMeta).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}

        {/* GEO (Generative Engine Optimization) */}
        {Object.entries(geoMeta).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Helmet>

      {/* Schema.org Structured Data */}
      <Schema data={schema} />
    </>
  );
}
