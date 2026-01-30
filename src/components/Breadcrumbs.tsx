import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

/**
 * Breadcrumbs Component
 * 
 * ใช้สำหรับแสดง navigation path ของหน้าเว็บ
 * ช่วยให้ผู้ใช้และ search engines เข้าใจโครงสร้างของเว็บไซต์
 * 
 * ทำไมถึงสำคัญต่อ SEO?
 * - ช่วยให้ Google เข้าใจ hierarchy ของเว็บไซต์
 * - เพิ่ม internal linking ที่ช่วยกระจาย page authority
 * - ปรากฏใน search results ทำให้ user เข้าใจตำแหน่งของหน้า
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Structured data for SEO (JSON-LD format)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href ? `${process.env.NEXT_PUBLIC_SITE_URL || ""}${item.href}` : undefined,
        })),
    };

    return (
        <>
            {/* Structured Data สำหรับ SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Visual Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && (
                                <span className="text-border" aria-hidden="true">
                                    /
                                </span>
                            )}
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-foreground font-medium" aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
