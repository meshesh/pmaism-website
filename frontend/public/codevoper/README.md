# PMAISM SEO — HITEC City, Hyderabad

## Target Zones (7 Priority Areas)

| # | Zone | Priority | Keywords |
|---|------|----------|----------|
| 1 | HITEC City | Primary | project management course HITEC City, scrum master training HITEC City Hyderabad |
| 2 | Madhapur | Primary | PM training near Madhapur, agile certification Madhapur Hyderabad |
| 3 | Gachibowli | Primary | project management classes Gachibowli, scrum master course near Gachibowli |
| 4 | Financial District | Primary | PM career accelerator Financial District Hyderabad, project management training Nanakramguda |
| 5 | Nanakramguda | Primary | project management institute Nanakramguda, PM coaching near Financial District |
| 6 | Kondapur | Secondary | project management course Kondapur, scrum master training near Kondapur |
| 7 | Kukatpally / KPHB | Secondary | PM training Kukatpally Hyderabad, agile course KPHB |

## File Structure

```
frontend/
├── src/
│   ├── components/SEO/
│   │   ├── SEO.jsx              ← Helmet wrapper (Basic + OG + Twitter + AEO + GEO)
│   │   └── Schema.jsx           ← JSON-LD injector
│   ├── data/
│   │   ├── seo.js               ← All SEO data + 7 schema generators
│   │   └── content.js           ← Site content (BRAND with address, AREAS_SERVED)
│   └── pages/
│       └── Landing.jsx          ← Uses <SEO /> component
├── public/
│   ├── robots.txt               ← Crawler directives
│   ├── sitemap.xml              ← XML sitemap
│   └── codevoper/               ← Reference documentation
│       ├── README.md            ← This file
│       ├── meta-reference.html  ← All meta tags (HTML reference)
│       └── schema-reference.json← All schemas (JSON reference)
```

## Schema Markup (7 Schemas)

1. **EducationalOrganization** — Full local business schema with address, geo, areaServed
2. **Course** — PM & Scrum Master accelerator details
3. **FAQPage** — All 8 FAQs (triggers FAQ rich results + AI Overview citations)
4. **WebSite** — SearchAction for sitelinks searchbox
5. **BreadcrumbList** — Navigation context
6. **Speakable** — Voice assistant / AI Overview targeting

## AEO Tags (Answer Engine Optimization)

| Tag | Purpose |
|-----|---------|
| `ai-description` | AI-friendly summary of the business |
| `ai-topics` | Topic signals for AI search engines |
| `ai-audience` | Target audience signals |

## GEO Tags (Generative Engine Optimization)

| Tag | Purpose |
|-----|---------|
| `citation-title` | Citation-friendly title for AI answers |
| `citation-language` | Language signal |
| `ICBM` | geolocation coordinates |
| `geo.position` | Precise coordinates |
| `geo.region` | Region code (IN-TS = Telangana) |
| `geo.placename` | City name |

## Manual Steps (After Deployment)

- [ ] Create OG image (1200×630) → place at `public/img/og-image.png`
- [ ] Create favicon → place at `public/favicon.ico`
- [ ] Set up Google Business Profile at HITEC City address
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Test with Google Rich Results Test
- [ ] Get listed on JustDial, Sulekha, IndiaMART for local citations
- [ ] Add Google Maps embed to the website
