import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { posts, getPost, readingTime, formatDate, sourceIndex } from "@/lib/blog";
import { site, SITE_ORIGIN } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: { absolute: `${site.name} | Article not found` } };
  }

  const title = `${post.title} | ${site.shortName}`;
  const url = `/blog/${post.slug}`;

  return {
    title: { absolute: title },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: site.name,
      title,
      description: post.description,
      locale: site.locale,
      publishedTime: post.date,
      authors: [site.name],
      images: [
        {
          url: "/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: ["/assets/og-image.png"],
      creator: "@samhithreddysangam",
    },
  };
}

function ArticleBody({ post }: { post: (typeof posts)[number] }) {
  return (
    <div className="space-y-6">
      {post.body.map((block, idx) => {
        if (block.type === "h2") {
          return (
            <h2
              key={idx}
              className="text-2xl md:text-3xl font-bold text-[#263129] leading-tight pt-4"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={idx} className="text-base md:text-[17px] text-[#4D554E] leading-[1.75]">
              {block.text}
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={idx} className="space-y-2.5 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-base text-[#4D554E] leading-relaxed">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: post.color }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={idx}
              className="pl-5 border-l-2 my-2"
              style={{ borderColor: post.color }}
            >
              <p className="text-lg md:text-xl text-[#263129] leading-relaxed font-medium">
                {block.text}
              </p>
              {block.attribution && (
                <footer className="mt-2 text-xs text-[#85857E] tracking-wide">
                  — {block.attribution}
                </footer>
              )}
            </blockquote>
          );
        }
        return (
          <div
            key={idx}
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border border-[#D9CBBE]/70 bg-[#D9CBBE]/70 my-4"
          >
            {block.items.map((item) => (
              <div key={item.label} className="bg-[#FFF8F0] px-4 py-5 text-center">
                <div
                  className="text-lg md:text-xl font-bold break-words"
                  style={{ color: post.color }}
                >
                  {item.value}
                </div>
                <div className="mt-1.5 text-[11px] text-[#85857E] leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_ORIGIN}/blog/${post.slug}`;
  const related = posts.filter((item) => item.slug !== post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-IN",
    articleSection: post.category,
    keywords: post.category,
    author: {
      "@type": "Person",
      "@id": `${SITE_ORIGIN}/#person`,
      name: site.name,
      jobTitle: "Founder & CEO, NEXT360 Organic Products Pvt. Ltd.",
      url: SITE_ORIGIN,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_ORIGIN}/#person`,
      name: site.name,
      url: SITE_ORIGIN,
    },
    image: `${SITE_ORIGIN}/assets/og-image.png`,
    mainEntity: {
      "@type": "Thing",
      name: post.category,
    },
    citation: post.sources.map((source) => ({
      "@type": "CreativeWork",
      name: source.label,
      url: source.href,
    })),
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#F4EADF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#blog"
              className="group inline-flex items-center gap-2 text-sm text-[#4D554E] hover:text-[#263129] transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Insights
            </Link>

            <header className="mb-10">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border mb-5"
                style={{
                  color: post.color,
                  borderColor: `${post.color}30`,
                  backgroundColor: `${post.color}10`,
                }}
              >
                <Tag className="w-3 h-3" />
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#263129] leading-[1.15] mb-5">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#85857E]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {readingTime(post.body)}
                </span>
                <span className="font-medium" style={{ color: post.color }}>
                  {site.name}
                </span>
              </div>
            </header>

            <ArticleBody post={post} />

            <section className="mt-14 pt-8 border-t border-[#D9CBBE]/70">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase mb-5">
                Sources
              </h2>
              <ul className="space-y-2.5">
                {post.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-[#4D554E] hover:text-[#263129] transition-colors"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: source.color }}
                      />
                      <span className="underline decoration-[#D9CBBE] group-hover:decoration-current underline-offset-4">
                        {source.label}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase mb-5">
                All Sources
              </h2>
              <div className="flex flex-wrap gap-2">
                {sourceIndex.map((source) => (
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

            <section className="mt-16">
              <h2 className="text-xs font-bold tracking-[0.2em] text-[#85857E] uppercase mb-6">
                Keep Reading
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group relative rounded-xl border border-[#D9CBBE]/70 bg-[#FFF8F0] p-5 transition-all duration-300 hover:border-[#B66F4A]/20 hover:-translate-y-0.5"
                  >
                    <div
                      className="text-[11px] font-medium mb-2"
                      style={{ color: item.color }}
                    >
                      {item.category}
                    </div>
                    <h3 className="text-sm font-bold text-[#263129] leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#85857E] group-hover:text-[#B66F4A] transition-colors">
                      Read article
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </Link>
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
