import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { SITE_ORIGIN, SITE_URL, site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  generator: "Next.js",
  category: "technology",
  keywords: [...site.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "SamhithReddy Sangam — Founder & CEO of NEXT360 Organic Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/assets/og-image.png"],
    creator: "@samhithreddysangam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_ORIGIN}/#person`,
  name: site.name,
  alternateName: [
    "Samhith Reddy Sangam",
    "Samhith Reddy",
    "Samhith Sangam",
  ],
  url: SITE_ORIGIN,
  email: `mailto:${site.email}`,
  jobTitle: "Founder & CEO",
  description: site.description,
  nationality: "Indian",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.country,
  },
  worksFor: {
    "@type": "Organization",
    name: "NEXT360 Organic Products Pvt. Ltd.",
    url: site.socials.next360,
  },
  founderOf: {
    "@type": "Organization",
    name: "NEXT360 Organic Products Pvt. Ltd.",
    url: site.socials.next360,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "S.R. University",
  },
  knowsAbout: [
    "Organic Commerce",
    "AgriTech",
    "Supply Chain Technology",
    "Generative AI",
    "Data Science",
    "Next.js",
    "React",
    "Blockchain Traceability",
    "Civil Engineering",
    "Startup Incubation",
  ],
  award: [
    "Guinness World Record — Agentathon 2025 (AI)",
    "DevFest 2025 Speaker",
    "T-Hub Ideation 2.0 Selected",
  ],
  sameAs: [site.socials.linkedin, site.socials.github, site.socials.next360],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_ORIGIN}/#website`,
  url: SITE_ORIGIN,
  name: site.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_ORIGIN}/#person` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-[#F4EADF] text-[#263129]`}
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
