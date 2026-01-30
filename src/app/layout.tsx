import type { Metadata } from "next";
import { Noto_Sans_Thai, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learn Agent Skills | เรียนรู้การใช้งาน Agent Skills",
    template: "%s | Learn Agent Skills",
  },
  description:
    "เรียนรู้วิธีใช้งาน Agent Skills ใน AntiGravity เพื่อเพิ่มประสิทธิภาพการพัฒนาซอฟต์แวร์ด้วย AI",
  keywords: ["Agent Skills", "AntiGravity", "AI Development", "Next.js", "SEO"],
  authors: [{ name: "Learn Agent Skills Team" }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Learn Agent Skills",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${notoSansThai.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
