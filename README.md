# Learn Agent Skills with AntiGravity

ยินดีต้อนรับสู่โปรเจกต์ตัวอย่างการใช้งาน **Agent Skills** ใน AntiGravity! โปรเจกต์นี้ถูกสร้างขึ้นเพื่อสาธิตวิธีการสร้างและใช้งาน "Skills" เพื่อสอนให้ AI ทำงานเฉพาะทางได้อย่างแม่นยำและตรงตามมาตรฐานของทีม

## 🎯 Agent Skills คืออะไร?

**Agent Skills** คือชุดคำสั่ง กฎเกณฑ์ และบริบทพิเศษที่เรากำหนดไว้เพื่อให้ AI (AntiGravity) เข้าใจวิธีการทำงานของเรา เสมือนกับการส่ง "คู่มือการทำงาน" (Playbook) ให้กับ AI เพื่อให้ผลลัพธ์ที่ได้ออกมามีคุณภาพและรูปแบบตามที่เราต้องการ

## 📂 โครงสร้างการจัดเก็บ

Skills จะถูกเก็บไว้ในโฟลเดอร์ `.agent/skills/` ภายในโปรเจกต์ของคุณ

```
my-project/
├── .agent/
│   └── skills/
│       └── [skill-name]/
│           └── SKILL.md  <-- ไฟล์คำสั่งหลัก
├── src/
├── package.json
└── ...
```

## 📝 ตัวอย่าง: SEO Master Skill

ในโปรเจกต์นี้ เราได้สร้าง Skill ชื่อ **Next.js SEO Master** เพื่อบังคับให้ AI เขียน Code โดยคำนึงถึง SEO เสมอ

**ไฟล์:** `.agent/skills/seo-master/SKILL.md`

```markdown
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
```

## 🚀 วิธีการใช้งาน

เมื่อคุณมีไฟล์ Skill แล้ว คุณสามารถเรียกใช้งานได้ง่ายๆ ในแชทกับ AntiGravity:

> "ช่วยสร้างหน้า Blog เกี่ยวกับ 'วิธีเลี้ยงแมว' โดยใช้ skill **nextjs-seo-master** หน่อย"

หรือถ้า Skill นั้นถูกตั้งค่าไว้ดีแล้ว AI อาจจะหยิบมาใช้เองอัตโนมัติตามบริบทของงาน

## ✨ ผลลัพธ์ในโปรเจกต์นี้

หน้า Blog ที่คุณเห็นใน `src/app/blog/how-to-use-agent-skills/page.tsx` ถูกสร้างขึ้นโดยใช้ Skill ด้านบน โดย AI ได้ทำการ:
1. ✅ สร้าง `generateMetadata` ให้เองครบถ้วน
2. ✅ ใช้ Semantic Tags เช่น `<article>`, `<header>`, `<section>`
3. ✅ สร้าง Component `Breadcrumbs` และใส่ JSON-LD Linked Data ให้
4. ✅ อธิบาย Code และเหตุผลในการเลือกใช้เทคนิคต่างๆ เป็นภาษาไทย

## 🛠️ การรันโปรเจกต์

```bash
# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์
