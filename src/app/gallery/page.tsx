import type { Metadata } from "next";
import { site } from "@/lib/site";
import { GalleryClient } from "./GalleryClient";

const title = `${site.name} | Gallery`;

const description =
  "A visual gallery of entrepreneur Samhith Reddy Sangam, Founder & CEO of NEXT360 Organic Products — a journey in technology, agriculture and the organic ecosystem.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    type: "website",
    url: "/gallery",
    siteName: site.name,
    title,
    description,
    locale: site.locale,
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samhith Reddy Sangam — Gallery: the professional journey behind NEXT360 Organic Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-image.png"],
    creator: "@samhithreddysangam",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
