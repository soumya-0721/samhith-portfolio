export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "stats"; items: { value: string; label: string }[] };

export type Source = {
  label: string;
  href: string;
  color: string;
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  color: string;
  excerpt: string;
  body: Block[];
  sources: Source[];
};

const GOOD = "#6F8F68";
const CLAY = "#B66F4A";

export const posts: Post[] = [
  {
    slug: "mallaram-digital-epanchayat",
    title: "Mallaram: How a Telangana Village Built a Fully Digital E-Panchayat",
    category: "Digital Governance",
    date: "2026-05-24",
    description:
      "Samhith Reddy Sangam provided the end-to-end technical build for Mallaram gram panchayat — a Telugu-language platform with AI crop advisories, IVR weather alerts and a public ledger. The village won first prize at the national Digital Krishi-Samridhi Gaav competition.",
    color: GOOD,
    excerpt:
      "A village of 2,000+ residents in Rajanna Sircilla district built a digital e-panchayat with AI crop advisories, IVR weather alerts and a public expenditure ledger — and won a national award for it.",
    body: [
      {
        type: "p",
        text: "In Mallaram, a village in Vemulawada mandal of Telangana's Rajanna Sircilla district, the gram panchayat website is not a noticeboard. It carries live weather updates, AI-generated crop advisories, a public ledger of every rupee received and spent, and streamed village meetings.",
      },
      {
        type: "p",
        text: "That platform was built end to end by Samhith Reddy Sangam, a B.Tech final-year student at SR University, working alongside the village sarpanch, Sangam Arpitha. His mother took office in December 2025; the dedicated website went live that February.",
      },
      { type: "h2", text: "Why a village needed a digital rebuild" },
      {
        type: "p",
        text: "Rural governance in India runs on physical noticeboards, verbal announcements and long queues. A farmer who needs an update on fertiliser supply, a ration card or a procurement slot often has to travel to a block or mandal headquarters to find out.",
      },
      {
        type: "p",
        text: "The panchayat's approach was to collapse that distance into a single Telugu-language interface — the language the residents actually speak — and to make the numbers public rather than merely published.",
      },
      { type: "h2", text: "What the platform actually does" },
      {
        type: "ul",
        items: [
          "Real-time weather updates and AI-based crop advisories in Telugu",
          "IVR voice alerts for rain and thunderstorm warnings",
          "Online slot booking at procurement and IKP centres, cutting queue time",
          "A public ledger showing funds received under each scheme and how they were spent",
          "Live streaming of village meetings, including for residents living abroad",
          "Information on Central and state welfare schemes",
        ],
      },
      { type: "h2", text: "The result" },
      {
        type: "stats",
        items: [
          { value: "60%", label: "of residents actively using the platform" },
          { value: "2,000+", label: "residents in the village" },
          { value: "1st", label: "prize, national Digital Krishi-Samridhi Gaav" },
          { value: "3 mo.", label: "from concept to national recognition" },
        ],
      },
      {
        type: "p",
        text: "Within roughly three months, the panchayat had converted itself into a fully digital e-panchayat and took first prize at the national-level Digital Krishi-Samridhi Gaav competition. The initiative was framed as an extension of Chief Minister A. Revanth Reddy's Vision 2047 and the Digital India mission.",
      },
      {
        type: "quote",
        text: "We worked hard to make governance transparent and accessible to every villager.",
        attribution: "Sangam Arpitha, Sarpanch, Mallaram gram panchayat",
      },
      {
        type: "p",
        text: "For a young developer, the project was a proof of a simple idea: rural public infrastructure does not fail because it is too small to serve. It fails because it is too difficult to reach. Closing that gap is a software problem as much as an administrative one.",
      },
    ],
    sources: [
      {
        label: "The New Indian Express",
        color: CLAY,
        href: "https://www.newindianexpress.com/amp/story/good-news/2026/May/24/ai-meets-agriculture-in-mallaram",
      },
      {
        label: "Deccan Chronicle",
        color: GOOD,
        href: "https://www.deccanchronicle.com/amp/southern-states/telangana/mallaram-wins-national-award-for-digital-e-panchayat-model-1957554",
      },
      {
        label: "The Better India",
        color: CLAY,
        href: "https://thebetterindia.com/innovation/mallaram-telangana-village-ai-crop-advice-digital-panchayat-12018697/amp",
      },
      {
        label: "Mallaram Gram Panchayat",
        color: GOOD,
        href: "https://www.mallaramgramapanchayat.com/en",
      },
    ],
  },
  {
    slug: "guinness-record-ai-agents",
    title: "Six AI Agents in 36 Hours: Inside Samhith's Guinness World Record",
    category: "AI & Records",
    date: "2025-12-31",
    description:
      "At the Google Developers Agentathon 2025, held online from 20 to 22 December, Samhith Reddy Sangam built six artificial intelligence agents in a continuous 36-hour window. The Guinness Book of World Records validated the feat and honoured him with an official certificate and medal.",
    color: CLAY,
    excerpt:
      "A national online hackathon, thirty-six unbroken hours, and six working AI agents — the record that put a small Telangana village on the world map.",
    body: [
      {
        type: "p",
        text: "The Google Developers Agentathon 2025 ran online from 20 to 22 December, hosted by the Google Developer Group, drawing heavy global competition. Samhith Reddy Sangam — a final-year B.Tech student at SR University, from Mallaram village — worked through a continuous 36-hour window and built six artificial intelligence agents.",
      },
      {
        type: "p",
        text: "The agents were completed, functional and demonstrated. The Guinness Book of World Records organisers validated the technical feat and honoured him with an official world record certificate and a medal.",
      },
      { type: "h2", text: "The record" },
      {
        type: "stats",
        items: [
          { value: "6", label: "AI agents built" },
          { value: "36 hrs", label: "continuous build window" },
          { value: "3 days", label: "online hackathon, 20–22 Dec 2025" },
          { value: "1", label: "Guinness certificate and medal" },
        ],
      },
      { type: "h2", text: "What made it difficult" },
      {
        type: "p",
        text: "Building one working AI agent is a weekend exercise. Building six that all function, in a single unbroken session, against a global field, requires not just technical skill but endurance and scope control — deciding early what each agent would do, and holding that decision for thirty-six hours.",
      },
      {
        type: "p",
        text: "The recognition carried an unusual character for a young developer from a small village: the achievement was global in scope, but rooted in a local context that had given him both the problem set and the motivation.",
      },
      {
        type: "quote",
        text: "A native of Mallaram village, Samith Reddy developed six new AI agents by working continuously for 36 hours while participating in the Google Developers Agentathon 2025.",
        attribution: "Telangana Today",
      },
      { type: "h2", text: "Why it matters" },
      {
        type: "p",
        text: "Records are a blunt instrument, but this one measures something real: sustained build throughput under pressure. It is the same skill set that later showed up in a very different arena — shipping a working digital public platform for a village of 2,000 residents, on a deadline, with real users depending on it.",
      },
    ],
    sources: [
      {
        label: "Telangana Today",
        color: CLAY,
        href: "https://telanganatoday.com/telangana-sircilla-youngster-secures-place-in-guinness-record-for-developing-ai-agents",
      },
    ],
  },
  {
    slug: "next360-organic-products",
    title: "From Village AI to NEXT360: Building an Organic Commerce Startup",
    category: "Entrepreneurship",
    date: "2026-02-27",
    description:
      "Samhith Reddy Sangam is a B.Tech final-year student at SR University and T-Hub incubated entrepreneur, and the founder behind NEXT360 Organic Products Pvt. Ltd. — registered in February 2026 to build India's organic commerce infrastructure.",
    color: GOOD,
    excerpt:
      "The company behind the vision: NEXT360 Organic Products Pvt. Ltd., registered in Karimnagar in February 2026, building traceable infrastructure for India's organic supply chain.",
    body: [
      {
        type: "p",
        text: "Samhith Reddy Sangam is an Indian tech entrepreneur and innovator, and a B.Tech final-year student at SR University in Telangana. He is best known for two things: implementing AI-driven digital governance models in rural India, and founding an organic commerce startup.",
      },
      { type: "h2", text: "The company" },
      {
        type: "p",
        text: "NEXT360 Organic Products Private Limited was incorporated on 27 February 2026 and registered with the Registrar of Companies, Hyderabad, under CIN U47912TS2026PTC212259. Its registered office is in S. R. Nagar, Karimnagar, Telangana. Samhith Reddy Sangam serves as a founding director.",
      },
      {
        type: "stats",
        items: [
          { value: "27 Feb 2026", label: "date of incorporation" },
          { value: "U47912TS2026PTC212259", label: "corporate identification number" },
          { value: "Karimnagar", label: "registered office, Telangana" },
          { value: "Active", label: "current company status" },
        ],
      },
      { type: "h2", text: "Why organic commerce infrastructure" },
      {
        type: "p",
        text: "India's organic sector has a verification problem. A shopper who pays more for organic produce is entitled to know where it came from. In practice, that chain of evidence is fragmented between farmer, aggregator, processor and retailer — and the consumer rarely sees any of it.",
      },
      {
        type: "ul",
        items: [
          "Direct access for verified farmers to buyers, without an opaque chain in between",
          "Verification of organic authenticity, supporting trust from farm to consumer",
          "End-to-end traceability across the supply chain",
          "Blockchain-backed product records, planned as the platform scales",
        ],
      },
      {
        type: "p",
        text: "This is infrastructure work rather than marketplace work. The ambition is not to be another storefront, but to make the supply chain legible — so that a claim of organic origin can be substantiated rather than simply asserted.",
      },
      { type: "h2", text: "The through-line" },
      {
        type: "p",
        text: "The interesting part of this story is the consistency of the problem. In Mallaram, the gap was between a villager and a government service. In organic commerce, the gap is between a farmer and a buyer. Both are information-delivery problems, and both reward the same instinct: find the point where a lack of usable information is quietly costing people money, then build the thing that closes it.",
      },
      {
        type: "p",
        text: "NEXT360 is incubated at T-Hub, Hyderabad's startup incubator. The company was registered on 27 February 2026, and the public record lists the founding board.",
      },
    ],
    sources: [
      {
        label: "Tracxn",
        color: GOOD,
        href: "https://tracxn.com/d/legal-entities/india/next360-organic-products-private-limited/__GZiOrCnYufZTfoUfPf6CCp-G03jg_PtNhAhwxZA1adI",
      },
      {
        label: "Zixin India",
        color: CLAY,
        href: "https://zixinindia.com/company_portfolios/company/next360-organic-products-private-limited-cin-U47912TS2026PTC212259",
      },
      {
        label: "The Company Check",
        color: GOOD,
        href: "https://share.google/kL3TMtpuGWCQS65JJ",
      },
    ],
  },
];

export const furtherCoverage: Source[] = [
  { label: "Commudle", color: GOOD, href: "https://share.google/artvICyCOo9mJy6Bd" },
  { label: "LinkedIn", color: CLAY, href: "https://share.google/RrzcsglKjirD6R4qG" },
  { label: "LinkedIn India", color: GOOD, href: "https://share.google/hnCF7KWLuhayZYRhQ" },
  { label: "Instagram", color: CLAY, href: "https://share.google/YIKBzxB3CYni5fnXG" },
  { label: "Instagram", color: GOOD, href: "https://share.google/H7mOHs2KluzSaMtNx" },
  { label: "Planetexim", color: CLAY, href: "https://share.google/maXCgyb3xLKilGrLE" },
];

export const sourceIndex: Source[] = [
  { label: "The New Indian Express", color: CLAY, href: "https://www.newindianexpress.com/amp/story/good-news/2026/May/24/ai-meets-agriculture-in-mallaram" },
  { label: "Deccan Chronicle", color: GOOD, href: "https://www.deccanchronicle.com/amp/southern-states/telangana/mallaram-wins-national-award-for-digital-e-panchayat-model-1957554" },
  { label: "The Better India", color: CLAY, href: "https://thebetterindia.com/innovation/mallaram-telangana-village-ai-crop-advice-digital-panchayat-12018697/amp" },
  { label: "Telangana Today", color: GOOD, href: "https://telanganatoday.com/telangana-sircilla-youngster-secures-place-in-guinness-record-for-developing-ai-agents" },
  { label: "Tracxn", color: CLAY, href: "https://tracxn.com/d/legal-entities/india/next360-organic-products-private-limited/__GZiOrCnYufZTfoUfPf6CCp-G03jg_PtNhAhwxZA1adI" },
  { label: "Zixin India", color: GOOD, href: "https://zixinindia.com/company_portfolios/company/next360-organic-products-private-limited-cin-U47912TS2026PTC212259" },
  { label: "Mallaram Gram Panchayat", color: CLAY, href: "https://www.mallaramgramapanchayat.com/en" },
];

function countWords(blocks: Block[]): number {
  return blocks.reduce((total, block) => {
    if (block.type === "p" || block.type === "h2" || block.type === "quote") {
      return total + block.text.trim().split(/\s+/).length;
    }
    if (block.type === "ul") {
      return total + block.items.join(" ").trim().split(/\s+/).length;
    }
    return total + block.items.reduce((n, item) => n + item.value.split(/\s+/).length + item.label.split(/\s+/).length, 0);
  }, 0);
}

export function readingTime(blocks: Block[]): string {
  return `${Math.max(1, Math.round(countWords(blocks) / 200))} min read`;
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
