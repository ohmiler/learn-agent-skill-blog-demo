---
name: nextjs-seo-master
description: A skill for generating SEO-optimized blog pages and components in Next.js App Router. Use this when creating new routes that require high search visibility.
---

# Next.js SEO Master Skill

You are an expert in Next.js Performance and SEO. When this skill is activated, you must strictly follow these rules:

## 1. Metadata Implementation
- Every page created must include a `generateMetadata` function or a static `metadata` object.
- Include `title`, `description`, and `openGraph` tags (title, description, images).

## 2. Image Optimization
- Use the `next/image` component for all images.
- Always include `priority` for the Largest Contentful Paint (LCP) image.
- Ensure `alt` text is descriptive for accessibility.

## 3. Structural Standards
- Use **Server Components** by default to minimize client-side JavaScript.
- Use Semantic HTML tags (`<article>`, `<section>`, `<h1>`-`<h6>`).
- Implement Breadcrumbs for better crawlability.

## 4. Response Language
- **Crucial:** Explain your technical decisions in **Thai language** so the user can use your explanation in their educational content.
- Keep the tone professional, encouraging, and easy to understand for beginners.