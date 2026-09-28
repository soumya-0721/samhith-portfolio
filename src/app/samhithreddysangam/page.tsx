import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, Building2, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { posts, sourceIndex, furtherCoverage, formatDate } from "@/lib/blog";
import { site, SITE_ORIGIN } from "@/lib/site";

const SLUG = "samhithreddysangam";
const PROFILE_URL = `${SITE_ORIGIN}/${SLUG}`;

const title = "Samhith Reddy Sangam";
const description =
  "Samhith Reddy Sangam (samhithreddysangam) is an Indian tech entrepreneur and B.Tech final-year student at SR University, Telangana. Guinness World Record holder for building six AI agents in 36 hours, technical lead behind the Mallaram digital e-panchayat, and founder of NEXT360 Organic Products Pvt. Ltd.";

const pressProfiles = [
  {
    label: "Tracxn",
    color: "#6F8F68",
    href: "https://tracxn.com/d/legal-entities/india/next360-organic-products-private-limited/__GZiOrCnYufZTfoUfPf6CCp-G03jg_PtNhAhwxZA1adI",
  },
  {
    label: "Zixin India",
    color: "#B66F4A",
    href: "https://zixinindia.com/company_portfolios/company/next360-organic-products-private-limited-cin-U47912TS2026PTC212259",
  },
  {
    label: "LinkedIn",
    color: "#6F8F68",
    href: "https://www.linkedin.com/in/samhithreddysangam",
  },
  {
    label: "GitHub",
    color: "#B66F4A",
    href: "https://github.com/samhithreddysangam",
  },
];

export const metadata: Metadata = {
  title: { absolute: `${title} — Tech Entrepreneur, Guinness World Record Holder` },
  description,
  keywords: [
    "samhithreddysangam",
    "samhithreddy sangam",
    "SamhithReddy Sangam",
    "samhith reddy sangam",
    "Samhith Reddy Sangam",
    "Sangem Samith Reddy",
    "Samith Reddy",
    "Samhith Reddy",
    "Samhith Sangam",
    "samhithreddysangam portfolio",
    "Guinness World Record Agentathon 2025",
    "Mallaram digital e-panchayat",
    "NEXT360 Organic Products founder",
    "T-Hub incubated founder",
    "Telangana tech entrepreneur",
    "SR University student entrepreneur",
  ],
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    type: "profile",
    url: PROFILE_URL,
    siteName: site.name,
    title: `${title} — Tech Entrepreneur, Guinness World Record Holder`,
    description,
    locale: site.locale,
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samhith Reddy Sangam — Founder & CEO of NEXT360 Organic Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — Tech Entrepreneur, Guinness World Record Holder`,
    description,
    images: ["/assets/og-image.png"],
    creator: "@samhithreddysangam",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${PROFILE_URL}#webpage`,
  url: PROFILE_URL,
  name: `${title} — Tech Entrepreneur, Guinness World Record Holder`,
  description,
  isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
  inLanguage: "en-IN",
  datePublished: "2025-12-31",
  dateModified: "2026-09-28",
  primaryImageOfPage: { "@id": `${SITE_ORIGIN}/#primaryimage` },
  about: { "@id": `${SITE_ORIGIN}/#person` },
  mainEntity: { "@id": `${SITE_ORIGIN}/#person` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    { "@type": "ListItem", position: 2, name: title, item: PROFILE_URL },
  ],
};

const facts = [
  { icon: MapPin, label: "Based in", value: "Karimnagar, Telangana, India" },
  { icon: Building2, label: "Founder & CEO", value: "NEXT360 Organic Products Pvt. Ltd." },
  { icon: GraduationCap, label: "Education", value: "B.Tech Civil Engineering, SR University" },
  { icon: Award, label: "Recognition", value: "Guinness World Record — Agentathon 2025" },
];

const milestones = [
  {
    date: "December 2025",
    title: "Guinness World Record",
    body: "Built six artificial intelligence agents in a continuous 36-hour window during the Google Developers Agentathon 2025, held online from 20 to 22 December. Validated by the Guinness Book of World Records, earning an official certificate and medal.",
    href: "https://telanganatoday.com/telangana-sircilla-youngster-secures-place-in-guinness-record-for-developing-ai-agents",
  },
  {
    date: "December 2025",
    title: "Mallaram digital e-panchayat",
    body: "Following his mother Sangam Arpitha taking office as sarpanch of Mallaram gram panchayat, he provided the complete end-to-end technical build — a Telugu-language platform with AI crop advisories, real-time weather updates, IVR alerts and a public ledger for financial transparency.",
    href: "https://www.newindianexpress.com/amp/story/good-news/2026/May/24/ai-meets-agriculture-in-mallaram",
  },
  {
    date: "May 2026",
    title: "National award for digital governance",
    body: "Mallaram won first prize at the national-level Digital Krishi-Samridhi Gaav competition for becoming a fully digital e-panchayat, with nearly 60% of its 2,000-plus residents actively using the platform.",
    href: "https://www.deccanchronicle.com/amp/southern-states/telangana/mallaram-wins-national-award-for-digital-e-panchayat-model-1957554",
  },
  {
    date: "February 2026",
    title: "NEXT360 Organic Products Pvt. Ltd.",
    body: "Incorporated on 27 February 2026 with the Registrar of Companies, Hyderabad, under CIN U47912TS2026PTC212259. Registered in Karimnagar, Telangana, with Samhith Reddy Sangam listed as a founding director. T-Hub incubated.",
    href: "https://tracxn.com/d/legal-entities/india/next360-organic-products-private-limited/__GZiOrCnYufZTfoUfPf6CCp-G03jg_PtNhAhwxZA1adI",
  },
];

export default function ProfilePage() {
  const allSources = [...sourceIndex, ...furtherCoverage];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#F4EADF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, breadcrumbSchema]),
        }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className={cn(
            "h-full w-full stroke-[#263129]/[0.02] fill-transparent",
            "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <article className="pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-[#4D554E] hover:text-[#263129] transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              Back to home
            </Link>

            <header className="mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border border-[#6F8F68]/30 bg-[#6F8F68]/10 text-[#6F8F68] mb-5">
                <Sparkles className="w-3 h-3" />
                Official Profile
              </span>

              PLACEHOLDER_NOOP
                Samhith Reddy Sangam
              </h1>

              <p className="text-lg md:text-xl text-[#B66F4A] font-semibold mb-5">
                Tech Entrepreneur &middot; Guinness World Record Holder &middot; AI
                &amp; AgriTech Founder
              </p>

              <p className="text-base md:text-lg text-[#4D554E] leading-[1.75] max-w-3xl">
                <strong className="text-[#263129]">Samhith Reddy Sangam</strong>{" "}
                (also written <em>samhithreddysangam</em>) is an Indian tech
                entrepreneur, innovator and B.Tech final-year student at SR
                University in Telangana. He is best known for implementing
                AI-driven digital governance models in rural India and for
                founding an organic commerce startup, NEXT360 Organic Products
                Pvt. Ltd.
              </p>
            </header>

            {/* Fact grid */}
            <dl className="grid sm:grid-cols-2 gap-px rounded-xl overflow-hidden border border-[#D9CBBE]/70 bg-[#D9CBBE]/70 mb-14">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-[#FFF8F0] px-5 py-5">
                  <dt className="flex items-center gap-2 text-[11px] font-medium text-[#85857E] uppercase tracking-wider mb-2">
                    <fact.icon className="w-3.5 h-3.5 text-[#6F8F68]" />
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-semibold text-[#263129] leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Biography */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-[#263129] leading-tight mb-5">
                Biography
              </h2>
              <div className="space-y-5 text-base md:text-[17px] text-[#4D554E] leading-[1.75]">
                <p>
                  Samhith Reddy Sangam is a B.Tech Civil Engineering student at SR
                  University, a T-Hub incubated entrepreneur, and the founder and
                  CEO of NEXT360 Organic Products Pvt. Ltd. His work sits at the
                  intersection of artificial intelligence, public digital
                  infrastructure and Indian agriculture.
                </p>
                <p>
                  In December 2025 his mother, Sangam Arpitha, took office as
                  sarpanch of Mallaram gram panchayat in Vemulawada mandal,
                  Rajanna Sircilla district. He provided the complete end-to-end
                  technical build for the village platform &mdash; a Telugu-language
                  interface integrating AI-powered crop advisories, real-time
                  weather updates, IVR voice alerts for rain and thunderstorms,
                  online slot booking at procurement and IKP centres, and a public
                  ledger tracking scheme funds and expenditure for financial
                  transparency. Village meetings are streamed live, including for
                  residents living abroad.
                </p>
                <p>
                  The platform won first prize at the national-level{" "}
                  <em>Digital Krishi-Samridhi Gaav</em> competition, with nearly
                  60% of the village&apos;s 2,000-plus residents actively using it
                  within about three months.
                </p>
                <p>
                  Separately, during the Google Developers Agentathon 2025 &mdash;
                  held online from 20 to 22 December &mdash; he built six artificial
                  intelligence agents in a continuous 36-hour window. The Guinness
                  Book of World Records validated the technical feat and honoured
                  him with an official world record certificate and a medal.
                </p>
                <p>
                  He went on to incorporate NEXT360 Organic Products Private
                  Limited on 27 February 2026 under the Registrar of Companies,
                  Hyderabad (CIN U47912TS2026PTC212259), registered in Karimnagar,
                  Telangana, where he serves as a founding director. The company is
                  building India&apos;s organic commerce infrastructure &mdash;
                  direct farmer access, organic verification and end-to-end
                  traceability across the supply chain.
                </p>
              </div>
            </section>

            {/* Milestones */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-[#263129] leading-tight mb-6">
                Key achievements
              </h2>
              <ol className="relative border-l border-[#D9CBBE] pl-6 space-y-8">
                {milestones.map((item) => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#6F8F68] ring-4 ring-[#F4EADF]" />
                    <time className="text-[11px] font-medium uppercase tracking-wider text-[#B66F4A]">
                      {item.date}
                    </time>
                    <h3 className="text-base font-bold text-[#263129] mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4D554E] leading-relaxed mb-2.5">
                      {item.body}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#4D554E] hover:text-[#263129] transition-colors"
                    >
                      <span className="underline decoration-[#D9CBBE] group-hover:decoration-current underline-offset-4">
                        Read the coverage
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </li>
                ))}
              </ol>
            </section>

            {/* Articles */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-[#263129] leading-tight mb-6">
                Writing
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group relative rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] p-5 transition-all duration-300 hover:border-[#B66F4A]/20 hover:-translate-y-0.5"
                  >
                    <div
                      className="text-[11px] font-medium mb-2"
                      style={{ color: post.color }}
                    >
                      {post.category} &middot; {formatDate(post.date)}
                    </div>
                    <h3 className="text-sm font-bold text-[#263129] leading-snug">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>

            {/* Official profiles */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-[#263129] leading-tight mb-6">
                Official profiles
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {pressProfiles.map((profile) => (
                  <a
                    key={profile.href}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      color: profile.color,
                      borderColor: `${profile.color}40`,
                      backgroundColor: `${profile.color}10`,
                    }}
                  >
                    {profile.label}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </section>

            {/* All sources */}
            <section className="pt-8 border-t border-[#D9CBBE]/70">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase mb-5">
                Press &amp; sources
              </h2>
              <div className="flex flex-wrap gap-2">
                {allSources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      color: source.color,
                      borderColor: `${source.color}40`,
                      backgroundColor: `${source.color}10`,
                    }}
                  >
                    {source.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
