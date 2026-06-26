import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Injects JSON-LD structured data into <head>.
 * @param {{ data: Array<object> }} props
 */
export default function Schema({ data = [] }) {
  if (!data || data.length === 0) return null;

  return (
    <Helmet>
      {data.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
}
