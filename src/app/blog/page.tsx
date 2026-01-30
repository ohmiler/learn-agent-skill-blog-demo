import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "บทความ",
    description:
        "รวมบทความเกี่ยวกับการใช้งาน Agent Skills และเทคนิคการพัฒนาซอฟต์แวร์ด้วย AI",
};

const blogPosts = [
    {
        slug: "how-to-use-agent-skills",
        title: "วิธีใช้ Agent Skills ใน AntiGravity",
        description:
            "เรียนรู้วิธีสร้างและใช้งาน Agent Skills เพื่อเพิ่มประสิทธิภาพการพัฒนาซอฟต์แวร์",
        date: "30 มกราคม 2569",
        readTime: "8 นาที",
    },
];

export default function BlogIndexPage() {
    return (
        <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        บทความ
                    </h1>
                    <p className="text-lg text-muted">
                        รวมบทความเกี่ยวกับการใช้งาน Agent Skills และเทคนิคการพัฒนาซอฟต์แวร์ด้วย AI
                    </p>
                </header>

                <section>
                    <ul className="space-y-6">
                        {blogPosts.map((post) => (
                            <li key={post.slug}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                                >
                                    <article>
                                        <div className="flex items-center gap-2 text-sm text-muted mb-2">
                                            <time>{post.date}</time>
                                            <span>•</span>
                                            <span>อ่าน {post.readTime}</span>
                                        </div>
                                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted">{post.description}</p>
                                    </article>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
