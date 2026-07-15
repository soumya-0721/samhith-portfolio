import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Samhith Reddy Sangam | Founder & CEO @ NEXT360",
  description:
    "Founder & CEO of NEXT360 Organic Products Pvt. Ltd. Building India's Trusted Organic Commerce Infrastructure through technology, transparency, and sustainability.",
  keywords: [
    "Samhith Reddy",
    "NEXT360",
    "Organic Commerce",
    "Tech Founder",
    "Entrepreneur",
    "India",
  ],
  openGraph: {
    title: "Samhith Reddy Sangam | Founder & CEO",
    description:
      "Building India's Trusted Organic Commerce Infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-[#08140D] text-white`}
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
