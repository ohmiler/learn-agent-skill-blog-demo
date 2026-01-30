import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

/**
 * generateMetadata - ฟังก์ชันสำหรับสร้าง SEO metadata
 * 
 * ทำไมถึงใช้ generateMetadata แทน static metadata?
 * - สามารถสร้าง metadata แบบ dynamic ได้ (เช่น จาก database)
 * - รองรับ async operations
 * - ง่ายต่อการ maintain และ scale
 * 
 * OpenGraph tags ทำไมถึงสำคัญ?
 * - ใช้แสดงผลเมื่อแชร์บน Facebook, LINE, Twitter
 * - ช่วยเพิ่ม CTR (Click-Through Rate) จาก social media
 * - ทำให้โพสต์ดูน่าสนใจและเป็นมืออาชีพ
 */
export async function generateMetadata(): Promise<Metadata> {
    const title = "วิธีใช้ Agent Skills ใน AntiGravity - คู่มือฉบับสมบูรณ์";
    const description =
        "เรียนรู้วิธีสร้างและใช้งาน Agent Skills ใน AntiGravity เพื่อเพิ่มประสิทธิภาพการพัฒนาซอฟต์แวร์ พร้อมตัวอย่างจริงและ best practices";

    return {
        title,
        description,
        keywords: [
            "Agent Skills",
            "AntiGravity",
            "AI Coding",
            "Next.js SEO",
            "SKILL.md",
            "AI Development",
        ],
        authors: [{ name: "Learn Agent Skills Team" }],
        openGraph: {
            title,
            description,
            type: "article",
            locale: "th_TH",
            publishedTime: "2026-01-30T00:00:00.000Z",
            authors: ["Learn Agent Skills Team"],
            images: [
                {
                    url: "/og-agent-skills.png",
                    width: 1200,
                    height: 630,
                    alt: "วิธีใช้ Agent Skills ใน AntiGravity",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

/**
 * BlogPage - หน้า Blog แสดงบทความ
 * 
 * ทำไมถึงใช้ Server Component?
 * - ลด JavaScript bundle size ที่ส่งไป client
 * - เร็วกว่าเพราะ render บน server
 * - SEO friendly เพราะ content พร้อมตั้งแต่ first load
 * - Google สามารถ crawl ได้ง่ายขึ้น
 * 
 * ทำไมถึงใช้ Semantic HTML?
 * - <article> บอกว่านี่คือเนื้อหาบทความ
 * - <section> แบ่งส่วนเนื้อหา
 * - <h1>-<h6> แสดง hierarchy ของหัวข้อ
 * - ช่วย screen readers และ search engines เข้าใจโครงสร้าง
 */
export default function BlogPage() {
    const breadcrumbItems = [
        { label: "หน้าแรก", href: "/" },
        { label: "บทความ", href: "/blog" },
        { label: "วิธีใช้ Agent Skills ใน AntiGravity" },
    ];

    return (
        <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-4xl mx-auto">
                {/* Breadcrumbs - ช่วย navigation และ SEO */}
                <Breadcrumbs items={breadcrumbItems} />

                {/* Header Section */}
                <header className="mb-10">
                    <div className="flex items-center gap-2 text-sm text-muted mb-4">
                        <time dateTime="2026-01-30">30 มกราคม 2569</time>
                        <span>•</span>
                        <span>อ่าน 8 นาที</span>
                    </div>

                    {/* H1 - มีได้แค่หนึ่งต่อหน้า และต้องอธิบายเนื้อหาหลัก */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        วิธีใช้ Agent Skills ใน AntiGravity
                    </h1>

                    <p className="text-lg text-muted leading-relaxed">
                        Agent Skills คือความสามารถพิเศษที่คุณสามารถสอนให้ AI ทำงานเฉพาะทางได้
                        ในบทความนี้เราจะเรียนรู้วิธีสร้างและใช้งาน Skills เพื่อเพิ่มประสิทธิภาพการพัฒนาซอฟต์แวร์
                    </p>
                </header>

                {/* Featured Image with priority for LCP */}
                <figure className="mb-10 rounded-xl overflow-hidden border border-border">
                    <Image
                        src="/agent-skills-hero.png"
                        alt="แผนภาพแสดงการทำงานของ Agent Skills ใน AntiGravity"
                        width={1200}
                        height={630}
                        priority // สำหรับ LCP image
                        className="w-full h-auto"
                    />
                    <figcaption className="text-sm text-muted text-center py-3 bg-card">
                        Agent Skills ช่วยให้ AI เข้าใจ context และทำงานได้ตรงความต้องการมากขึ้น
                    </figcaption>
                </figure>

                {/* Table of Contents */}
                <nav className="mb-10 p-6 bg-card rounded-xl border border-border">
                    <h2 className="text-lg font-semibold mb-4">สารบัญ</h2>
                    <ol className="space-y-2 text-primary">
                        <li>
                            <a href="#what-are-agent-skills" className="hover:underline">
                                1. Agent Skills คืออะไร?
                            </a>
                        </li>
                        <li>
                            <a href="#skill-file-structure" className="hover:underline">
                                2. โครงสร้างของ Skill File
                            </a>
                        </li>
                        <li>
                            <a href="#create-your-own-skill" className="hover:underline">
                                3. วิธีสร้าง Skill ของตัวเอง
                            </a>
                        </li>
                        <li>
                            <a href="#real-world-example" className="hover:underline">
                                4. ตัวอย่างการใช้งานจริง
                            </a>
                        </li>
                        <li>
                            <a href="#conclusion" className="hover:underline">
                                5. สรุปและแนวทางต่อไป
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Section 1 */}
                <section id="what-are-agent-skills" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                        1. Agent Skills คืออะไร?
                    </h2>

                    <p>
                        <strong>Agent Skills</strong> คือชุดคำสั่งและความรู้เฉพาะทางที่เราสามารถสอนให้ AI
                        Coding Assistant อย่าง AntiGravity เข้าใจและปฏิบัติตาม ช่วยให้ AI ทำงานได้ตรงกับ
                        ความต้องการของโปรเจกต์มากขึ้น
                    </p>

                    <p>
                        ลองนึกภาพว่าเรามีผู้ช่วยที่เก่งมาก แต่ไม่รู้ว่าบริษัทเราทำงานอย่างไร
                        Agent Skills คือการให้ &quot;คู่มือ&quot; ให้ผู้ช่วยคนนั้น เพื่อให้ทำงานได้ถูกต้องตาม
                        มาตรฐานของเรา
                    </p>

                    <div className="bg-card border border-border rounded-lg p-6 my-6">
                        <h3 className="font-semibold mb-3">ข้อดีของการใช้ Agent Skills:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>ลดเวลาในการอธิบายซ้ำๆ ให้ AI</li>
                            <li>ได้ผลลัพธ์ที่สม่ำเสมอและตรงมาตรฐาน</li>
                            <li>แชร์ความรู้ในทีมได้ง่าย</li>
                            <li>ปรับแต่ง AI ให้เหมาะกับโปรเจกต์เฉพาะ</li>
                        </ul>
                    </div>
                </section>

                {/* Section 2 */}
                <section id="skill-file-structure" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                        2. โครงสร้างของ Skill File
                    </h2>

                    <p>
                        Skill ถูกเก็บไว้ในโฟลเดอร์ <code>.agent/skills/</code> ของโปรเจกต์
                        โดยแต่ละ skill จะมีไฟล์หลักคือ <code>SKILL.md</code> ที่ประกอบด้วย:
                    </p>

                    <pre className="my-6">
                        <code>{`---
name: my-custom-skill
description: คำอธิบายสั้นๆ ของ skill
---

# ชื่อ Skill

คำอธิบายและกฎเกณฑ์ที่ AI ต้องปฏิบัติตาม

## กฎข้อที่ 1
- รายละเอียด...

## กฎข้อที่ 2
- รายละเอียด...`}</code>
                    </pre>

                    <p>
                        ส่วน <strong>Frontmatter</strong> (ระหว่าง <code>---</code>) ประกอบด้วย:
                    </p>

                    <ul className="list-disc list-inside space-y-2 my-4">
                        <li><code>name</code> - ชื่อที่ใช้เรียก skill</li>
                        <li><code>description</code> - คำอธิบายที่จะแสดงในรายการ skills</li>
                    </ul>
                </section>

                {/* Section 3 */}
                <section id="create-your-own-skill" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                        3. วิธีสร้าง Skill ของตัวเอง
                    </h2>

                    <p>
                        มาลองสร้าง SEO Skill สำหรับ Next.js กันดูครับ:
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">
                        ขั้นตอนที่ 1: สร้างโฟลเดอร์
                    </h3>
                    <pre className="my-4">
                        <code>{`mkdir -p .agent/skills/seo-master`}</code>
                    </pre>

                    <h3 className="text-xl font-semibold mt-6 mb-3">
                        ขั้นตอนที่ 2: สร้างไฟล์ SKILL.md
                    </h3>
                    <pre className="my-4">
                        <code>{`---
name: nextjs-seo-master
description: Skill สำหรับสร้างหน้าเว็บที่ SEO ดี
---

# Next.js SEO Master Skill

## กฎข้อ 1: Metadata
- ทุกหน้าต้องมี generateMetadata หรือ metadata object
- ต้องมี title, description, openGraph

## กฎข้อ 2: Semantic HTML
- ใช้ <article>, <section>, <h1>-<h6>
- มี breadcrumbs สำหรับ navigation

## กฎข้อ 3: Images
- ใช้ next/image component
- ใส่ priority สำหรับ LCP image
- ใส่ alt text ที่อธิบายภาพ`}</code>
                    </pre>

                    <h3 className="text-xl font-semibold mt-6 mb-3">
                        ขั้นตอนที่ 3: ทดสอบการใช้งาน
                    </h3>
                    <p>
                        เมื่อสร้างเสร็จแล้ว ลองขอให้ AI สร้างหน้าเว็บใหม่
                        โดยบอกว่า &quot;สร้างหน้า Blog แบบ SEO เป๊ะๆ&quot;
                        AI จะอ่าน skill และปฏิบัติตามกฎที่เรากำหนด
                    </p>
                </section>

                {/* Section 4 */}
                <section id="real-world-example" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                        4. ตัวอย่างการใช้งานจริง
                    </h2>

                    <p>
                        หน้าที่คุณกำลังอ่านอยู่นี้ ถูกสร้างขึ้นโดยใช้ SEO Skill ที่เราพูดถึง!
                        ลองดู features ที่ถูก implement:
                    </p>

                    <div className="grid gap-4 my-6">
                        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                            <h4 className="font-semibold text-secondary mb-2">✅ Metadata</h4>
                            <p className="text-sm">
                                มี generateMetadata พร้อม title, description, OpenGraph, Twitter Cards
                            </p>
                        </div>

                        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                            <h4 className="font-semibold text-secondary mb-2">✅ Semantic HTML</h4>
                            <p className="text-sm">
                                ใช้ article, section, h1-h6 อย่างถูกต้อง
                            </p>
                        </div>

                        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                            <h4 className="font-semibold text-secondary mb-2">✅ Breadcrumbs</h4>
                            <p className="text-sm">
                                มี breadcrumbs พร้อม structured data (JSON-LD)
                            </p>
                        </div>

                        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                            <h4 className="font-semibold text-secondary mb-2">✅ Server Component</h4>
                            <p className="text-sm">
                                ใช้ Server Component เป็น default เพื่อ performance ที่ดี
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 5 */}
                <section id="conclusion" className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                        5. สรุปและแนวทางต่อไป
                    </h2>

                    <p>
                        Agent Skills เป็นเครื่องมือที่ทรงพลังในการปรับแต่ง AI ให้ทำงานได้ตรงใจ
                        คุณสามารถสร้าง skills หลายๆ อันสำหรับงานต่างๆ เช่น:
                    </p>

                    <ul className="list-disc list-inside space-y-2 my-4">
                        <li>Testing Skill - กฎการเขียน unit tests</li>
                        <li>API Design Skill - มาตรฐาน REST API ของทีม</li>
                        <li>Code Style Skill - coding conventions ที่ทีมใช้</li>
                        <li>Documentation Skill - รูปแบบการเขียน docs</li>
                    </ul>

                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-6">
                        <h3 className="font-semibold text-primary mb-2">💡 เคล็ดลับ</h3>
                        <p>
                            เริ่มจาก skill ง่ายๆ ก่อน แล้วค่อยๆ เพิ่มรายละเอียด
                            เมื่อเห็นว่า AI ทำผิดพลาดตรงไหนบ่อยๆ ให้เพิ่มกฎเกณฑ์ใน skill
                            นี่คือวิธีที่ดีที่สุดในการพัฒนา skills ให้ดีขึ้นเรื่อยๆ
                        </p>
                    </div>

                    <p>
                        หวังว่าบทความนี้จะช่วยให้คุณเริ่มต้นใช้งาน Agent Skills ได้
                        ลองสร้าง skill ของตัวเองและแชร์ประสบการณ์กันนะครับ!
                    </p>
                </section>

                {/* Author & Share Section */}
                <footer className="border-t border-border pt-8 mt-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold">LS</span>
                        </div>
                        <div>
                            <p className="font-semibold">Learn Agent Skills Team</p>
                            <p className="text-sm text-muted">
                                สอนการใช้งาน AI ในการพัฒนาซอฟต์แวร์
                            </p>
                        </div>
                    </div>
                </footer>
            </article>
        </main>
    );
}
