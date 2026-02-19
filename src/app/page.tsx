import { HeroAnimation } from "@/components/hero-animation";
import { HowItWorksSection } from "@/components/how-it-works-section";
import {
  ArrowRight,
  CircleCheckBig,
  Clock,
  Code,
  Eye,
  FileText,
  Globe,
  KeyRound,
  Layers,
  LogOut,
  Mail,
  Pause,
  Play,
  Plug,
  RefreshCcw,
  Send,
  ShieldCheck,
  UserPlus,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ContentDrip — Build Email Courses That Run Themselves",
  description:
    "No platform fees. No subscriber limits. Write in markdown, deploy once, and let your course deliver automatically. Open-source Next.js template for automated drip courses.",
  openGraph: {
    title: "ContentDrip — Build Email Courses That Run Themselves",
    description:
      "No platform fees. No subscriber limits. Write in markdown, deploy once, and let your course deliver automatically. Open-source Next.js template.",
    images: [
      {
        url: "/api/og?type=default&title=Build+email+courses+that+run+themselves.&label=Open+Source",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "ContentDrip — Build Email Courses That Run Themselves",
    description:
      "No platform fees. No subscriber limits. Write in markdown, deploy once, and let your course deliver automatically. Open-source Next.js template.",
    images: [
      "/api/og?type=default&title=Build+email+courses+that+run+themselves.&label=Open+Source",
    ],
  },
};

/* ── Data ── */

const STACK = [
  { name: "Next.js", note: "App Router, Server Actions, API Routes" },
  { name: "React Email", note: "Type-safe, cross-client email templates" },
  { name: "Drizzle ORM", note: "Type-safe SQL with zero-overhead" },
  { name: "SQLite / Turso", note: "Edge-ready, zero-config database" },
  {
    name: "Postmark / Resend",
    note: "Pluggable email adapters — bring your own provider",
  },
  { name: "Tailwind CSS", note: "Utility-first styling throughout" },
];

/* ── Page ── */

export default function HomePage() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* ── Header ── */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-mono text-sm font-bold tracking-tight text-foreground no-underline"
          >
            ContentDrip
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/docs"
              className="font-mono text-sm text-foreground/45 no-underline transition-colors hover:text-foreground"
            >
              docs
            </Link>
            <a
              href="https://my-contentdrip-course.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-foreground/45 no-underline transition-colors hover:text-foreground"
            >
              demo
            </a>
            <a
              href="https://github.com/petergombos/contentdrip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/45 no-underline transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-dark" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-32 md:pt-28">
          {/* Right: animated subscription → drip visual (absolutely positioned on lg) */}
          <div className="pointer-events-none absolute bottom-0 right-6 top-0 hidden w-[340px] items-center lg:flex">
            <div className="animate-fade-in delay-3 w-full">
              <HeroAnimation />
            </div>
          </div>

          <p className="animate-fade-in-up font-mono text-[13px] uppercase tracking-[0.3em] text-primary">
            Open Source
          </p>

          <h1 className="animate-fade-in-up delay-1 mt-6 max-w-4xl text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.02] tracking-tighter">
            Build email courses
            <br />
            that <span className="text-primary">run themselves</span>
          </h1>

          <p className="animate-fade-in-up delay-2 mt-6 max-w-xl font-mono text-base leading-relaxed text-foreground/50">
            No platform fees. No subscriber limits. Write in markdown, deploy
            once, and let your course deliver automatically — on your schedule,
            in your subscribers&apos; timezones.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-3 mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/docs"
              className="group inline-flex h-9 items-center gap-2 bg-primary px-4 font-mono text-[13px] font-bold uppercase tracking-widest text-primary-foreground no-underline transition-colors hover:bg-[#d8ff44]"
            >
              Deploy Your First Course
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://my-contentdrip-course.vercel.app/"
              className="inline-flex h-9 items-center border border-foreground/20 px-4 font-mono text-[13px] font-bold uppercase tracking-widest text-foreground/50 no-underline transition-colors hover:border-foreground/35 hover:text-foreground"
            >
              See a Demo Course
            </a>
          </div>

          <p className="animate-fade-in-up delay-4 mt-6 font-mono text-xs uppercase tracking-widest text-foreground/20">
            MIT Licensed &middot; Self-Hosted &middot; No Vendor Lock-In
          </p>

          {/* Mobile: hero animation inline */}
          <div className="pointer-events-none mt-12 flex justify-center lg:hidden">
            <div className="animate-fade-in delay-3 w-full max-w-[340px]">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            How It Works
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            From clone to first subscriber in 30 minutes.
          </h2>

          <HowItWorksSection />
        </div>
      </section>

      {/* ── Content Packs ── */}
      <section className="overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Content Packs
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Write once. Render everywhere.
          </h2>
          <p className="mt-3 max-w-xl font-mono text-base leading-relaxed text-foreground/35">
            Focus on writing. We handle the delivery, scheduling, and
            unsubscribe links.
          </p>

          {/* Visual pipeline */}
          <div className="mt-12 grid items-stretch gap-0 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left: Markdown input */}
            <div className="min-w-0 border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <span className="font-mono text-xs text-foreground/28">
                  day-1.md
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.8] text-foreground/35">
                <code>
                  <span className="text-foreground/28">---</span>
                  {"\n"}
                  <span className="text-foreground/45">subject:</span>{" "}
                  <span className="text-muted-foreground">
                    {'"'}Day 1: Getting Started{'"'}
                  </span>
                  {"\n"}
                  <span className="text-foreground/45">preview:</span>{" "}
                  <span className="text-muted-foreground">
                    {'"'}Your first lesson{'"'}
                  </span>
                  {"\n"}
                  <span className="text-foreground/28">---</span>
                  {"\n\n"}
                  <span className="text-foreground/45">Good morning!</span>
                  {"\n\n"}
                  <span className="text-foreground/45">
                    Today we{`'`}re covering the
                  </span>
                  {"\n"}
                  <span className="text-foreground/45">fundamentals of...</span>
                  {"\n\n"}
                  <span className="text-foreground/45">## The Key Idea</span>
                  {"\n\n"}
                  <span className="text-foreground/45">
                    Content in **markdown**.
                  </span>
                  {"\n\n"}
                  <span className="text-foreground/45">[Read online →](</span>
                  <span className="text-primary">{"{{companionUrl}}"}</span>
                  <span className="text-foreground/45">)</span>
                </code>
              </pre>
            </div>

            {/* Center: Pipeline connector */}
            <div className="flex items-center justify-center py-6 lg:px-6 lg:py-0">
              <div className="flex items-center gap-3 lg:flex-col lg:gap-4">
                {/* Arrow / chevrons */}
                <div className="flex gap-1 text-foreground/20 lg:flex-col">
                  <svg
                    className="h-5 w-5 rotate-90 lg:rotate-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Pipeline steps */}
                <div className="flex flex-wrap justify-center gap-2 lg:flex-col lg:gap-3">
                  {["parse frontmatter", "inject URLs", "render email"].map(
                    (step) => (
                      <div
                        key={step}
                        className="whitespace-nowrap border border-border bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground/28"
                      >
                        {step}
                      </div>
                    ),
                  )}
                </div>

                {/* Arrow / chevrons */}
                <div className="flex gap-1 text-foreground/20 lg:flex-col">
                  <svg
                    className="h-5 w-5 rotate-90 lg:rotate-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Email output mockup */}
            <div className="min-w-0 border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <svg
                  className="h-4 w-4 text-foreground/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="font-mono text-xs text-foreground/28">
                  Delivered email
                </span>
              </div>
              <div className="p-5">
                {/* Email header area */}
                <div className="mb-4 border-b border-border pb-4">
                  <div className="mb-2 h-5 w-24 bg-border" />
                  <p className="font-mono text-sm font-medium text-muted-foreground">
                    Day 1: Getting Started
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] text-foreground/28">
                    Your first lesson
                  </p>
                </div>

                {/* Email body skeleton */}
                <div className="space-y-3">
                  <p className="font-mono text-[13px] leading-relaxed text-foreground/45">
                    Good morning!
                  </p>
                  <p className="font-mono text-[13px] leading-relaxed text-foreground/35">
                    Today we{`'`}re covering the fundamentals of...
                  </p>

                  {/* Section heading */}
                  <p className="mt-1 font-mono text-[13px] font-semibold text-foreground/50">
                    The Key Idea
                  </p>

                  {/* Body skeleton lines */}
                  <div className="space-y-2">
                    <div className="h-2.5 w-full bg-secondary" />
                    <div className="h-2.5 w-4/5 bg-secondary" />
                  </div>

                  {/* CTA button */}
                  <div className="pt-2">
                    <div className="inline-block border border-primary px-4 py-2 font-mono text-[12px] font-medium text-primary">
                      Read online →
                    </div>
                  </div>
                </div>

                {/* Footer area */}
                <div className="mt-5 border-t border-border pt-3">
                  <div className="flex gap-3 font-mono text-[10px] text-foreground/20">
                    <span>Manage</span>
                    <span>·</span>
                    <span>Pause</span>
                    <span>·</span>
                    <span>Unsubscribe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template variables */}
          <div className="mt-6 grid gap-px bg-border p-px sm:grid-cols-2 lg:grid-cols-5">
            {[
              { var: "{{companionUrl}}", desc: "Web version of this lesson" },
              { var: "{{assetUrl}}", desc: "Base URL for pack assets" },
              { var: "{{manageUrl}}", desc: "Manage subscription page" },
              { var: "{{pauseUrl}}", desc: "Pause delivery one-click" },
              { var: "{{stopUrl}}", desc: "Unsubscribe one-click" },
            ].map((v) => (
              <div key={v.var} className="bg-background p-4">
                <code className="font-mono text-[13px] text-primary">
                  {v.var}
                </code>
                <p className="mt-1 text-[13px] text-foreground/35">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Companion Pages ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Companion Pages
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Every lesson lives on the web.
          </h2>
          <p className="mt-3 max-w-xl font-mono text-base leading-relaxed text-foreground/35">
            Every email becomes a permanent URL. Subscribers share content
            without forwarding emails. You keep control of formatting.
          </p>

          {/* Split-screen: Email vs Web */}
          <div className="mt-12 grid items-stretch gap-0 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left: Email mockup */}
            <div className="border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <Mail className="h-4 w-4 text-foreground/20" />
                <span className="font-mono text-xs text-foreground/28">
                  Email inbox
                </span>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary/20" />
                  <span className="font-mono text-[12px] font-medium text-muted-foreground">
                    Day 1: Getting Started
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-accent" />
                  <div className="h-2 w-5/6 bg-accent" />
                  <div className="h-2 w-4/5 bg-accent" />
                  <div className="h-2 w-2/3 bg-accent" />
                </div>
                <div className="mt-4 space-y-1 text-[11px] text-foreground/20">
                  <div className="flex gap-2 font-mono">
                    <span>Manage</span>
                    <span>&middot;</span>
                    <span>Pause</span>
                    <span>&middot;</span>
                    <span>Unsubscribe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Connector bridge */}
            <div className="flex items-center justify-center py-6 lg:px-6 lg:py-0">
              <div className="flex items-center gap-3 lg:flex-col lg:gap-3">
                <div className="h-px w-8 border-t border-dashed border-foreground/20 lg:h-8 lg:w-px lg:border-l lg:border-t-0" />
                <div className="whitespace-nowrap border border-primary/20 bg-primary/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-primary/60">
                  linked pair
                </div>
                <div className="h-px w-8 border-t border-dashed border-foreground/20 lg:h-8 lg:w-px lg:border-l lg:border-t-0" />
              </div>
            </div>

            {/* Right: Browser/web page mockup — visually richer */}
            <div className="border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </div>
                <span className="ml-1 font-mono text-[10px] text-foreground/20">
                  yoursite.com/p/course/day-1
                </span>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="font-mono text-[12px] font-medium text-muted-foreground">
                    Day 1: Getting Started
                  </span>
                </div>
                {/* Intro paragraph lines */}
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-sm bg-accent" />
                  <div className="h-2 w-5/6 rounded-sm bg-accent" />
                  <div className="h-2 w-4/5 rounded-sm bg-accent" />
                </div>
                {/* Image placeholder — shows richer content */}
                <div className="my-3 flex h-14 items-center justify-center border border-dashed border-border bg-card">
                  <span className="font-mono text-[10px] text-foreground/20">
                    image / embed
                  </span>
                </div>
                {/* Extended content — more lines than the email */}
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-sm bg-accent" />
                  <div className="h-2 w-5/6 rounded-sm bg-accent" />
                  <div className="h-2 w-full rounded-sm bg-accent" />
                  <div className="h-2 w-2/3 rounded-sm bg-accent" />
                </div>
                <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-foreground/28">
                  <Globe className="h-3 w-3" />
                  Shareable &middot; permanent &middot; any device
                </div>
              </div>
            </div>
          </div>

          {/* Feature callouts */}
          <div className="mt-6 grid gap-px bg-border p-px sm:grid-cols-3">
            <div className="bg-background p-4">
              <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                Go Deeper
              </p>
              <p className="mt-1 text-[13px] text-foreground/35">
                Pages aren&apos;t limited to what fits in an email. Add images,
                embeds, extended writing — no inbox constraints.
              </p>
            </div>
            <div className="bg-background p-4">
              <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                Permanent URLs
              </p>
              <p className="mt-1 text-[13px] text-foreground/35">
                Every page has a shareable link. Subscribers share content
                without forwarding emails.
              </p>
            </div>
            <div className="bg-background p-4">
              <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                Optional Per Lesson
              </p>
              <p className="mt-1 text-[13px] text-foreground/35">
                Add a companion page to any lesson or skip it entirely. Each
                step decides for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multiple Packs ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Multi-Pack
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            One brand. Many courses. Each with its own style.
          </h2>
          <p className="mt-3 max-w-xl font-mono text-base leading-relaxed text-foreground/35">
            Each pack is fully independent. Own subscribers, own schedule, own
            branding. Deploy once, run as many courses as you want.
          </p>

          {/* Shared brand header */}
          <div className="mt-12 flex items-center gap-3 border border-border border-b-0 bg-card px-5 py-3">
            <div className="flex h-6 w-6 items-center justify-center bg-primary text-[11px] font-bold text-primary-foreground">
              L
            </div>
            <span className="font-mono text-[13px] font-medium text-muted-foreground">
              Learnwise
            </span>
            <span className="ml-auto font-mono text-[11px] text-foreground/20">
              2 packs &middot; 1 deploy
            </span>
          </div>

          {/* Pack cards */}
          <div className="flex flex-col gap-px bg-border p-px md:flex-row">
            {[
              {
                name: "The Art of Mindful Productivity",
                slug: "/mindful-productivity",
                desc: "A free 5-day email course on building sustainable focus and productivity habits.",
                steps: 6,
                cadence: "daily at 8am",
                subs: 142,
                active: 89,
                completed: 53,
                accent: "#c8ff00",
                files: [
                  "welcome.md",
                  "day-1.md",
                  "day-2.md",
                  "day-3.md",
                  "day-4.md",
                  "day-5.md",
                ],
              },
              {
                name: "Deep Work Essentials",
                slug: "/deep-work",
                desc: "A free 2-day email course on mastering deep work.",
                steps: 3,
                cadence: "subscriber picks",
                subs: 56,
                active: 41,
                completed: 15,
                accent: "#ff6b9d",
                files: ["welcome.md", "day-1.md", "day-2.md"],
              },
            ].map((pack) => (
              <div
                key={pack.name}
                className="flex flex-1 flex-col bg-background p-5 md:p-6"
              >
                {/* Pack header with accent stripe */}
                <div
                  className="mb-4 h-1 w-12"
                  style={{ backgroundColor: pack.accent }}
                />
                <p className="text-[16px] font-bold text-foreground">
                  {pack.name}
                </p>
                <p className="mt-1 font-mono text-[11px] text-foreground/28">
                  {pack.slug}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-foreground/35">
                  {pack.desc}
                </p>

                {/* Stats row */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-foreground/45">
                    {pack.steps} lessons
                  </span>
                  <span className="font-mono text-[11px] text-foreground/28">
                    {pack.cadence}
                  </span>
                </div>

                {/* Mini file tree */}
                <div className="mt-4 border border-border bg-card p-3">
                  <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/20">
                    emails/
                  </p>
                  {pack.files.map((file, i) => (
                    <div
                      key={`${pack.name}-${i}`}
                      className="flex items-center gap-2 py-0.5"
                    >
                      <span className="font-mono text-[10px] text-foreground/20">
                        └
                      </span>
                      <span className="font-mono text-[11px] text-foreground/35">
                        {file}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subscriber breakdown */}
                <div className="mt-auto pt-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-mono text-[12px] text-foreground/50">
                      <Users className="h-3 w-3" />
                      {pack.subs} subscribers
                    </span>
                  </div>
                  <div className="mt-2 flex h-1.5 w-full overflow-hidden bg-secondary">
                    <div
                      className="h-full"
                      style={{
                        width: `${(pack.active / pack.subs) * 100}%`,
                        backgroundColor: pack.accent,
                        opacity: 0.4,
                      }}
                    />
                    <div
                      className="h-full"
                      style={{
                        width: `${(pack.completed / pack.subs) * 100}%`,
                        backgroundColor: pack.accent,
                        opacity: 0.15,
                      }}
                    />
                  </div>
                  <div className="mt-1.5 flex gap-4 font-mono text-[10px] text-foreground/28">
                    <span>{pack.active} active</span>
                    <span>{pack.completed} completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key facts row */}
          <div className="mt-6 grid gap-px bg-border p-px sm:grid-cols-3">
            {[
              {
                label: "Independent Subscribers",
                desc: "Each pack has its own subscriber list — no cross-talk, no shared state.",
              },
              {
                label: "Namespaced URLs",
                desc: "Routes are scoped per pack. /mindful-productivity and /deep-work coexist cleanly.",
              },
              {
                label: "Per-Pack Branding",
                desc: "Every pack gets its own email shell, colors, and companion page styling.",
              },
            ].map((fact) => (
              <div key={fact.label} className="bg-background p-4">
                <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                  {fact.label}
                </p>
                <p className="mt-1 text-[13px] text-foreground/35">
                  {fact.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Features
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Skip the email platform. Own your stack.
          </h2>

          <div className="mt-10 flex flex-col gap-px bg-border p-px">
            {/* Row 1: Three tall feature cards */}
            <div className="grid gap-px md:grid-cols-3">
              {/* Content Packs */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <pre className="font-mono text-[12px] leading-[1.7] text-foreground/28">
                  {`📁 my-course/
├── pack.ts
├── email-shell.tsx
├── emails/
│   ├── welcome.md
│   └── day-1.md
└── pages/
    └── day-1.md`}
                </pre>
                <div className="mt-auto pt-5">
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Content Packs
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/45">
                    Self-contained folders of markdown emails, web pages, and a
                    branded email template.
                  </p>
                </div>
              </div>

              {/* Scheduled Delivery */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary/40" />
                  <div className="font-mono text-[12px] text-foreground/28">
                    subscriber picks a time
                  </div>
                </div>
                <div className="mt-4 space-y-1.5">
                  {["06:00", "08:00", "09:30", "12:00", "18:00"].map(
                    (time, i) => (
                      <div key={time} className="flex items-center gap-3">
                        <span className="w-12 font-mono text-[12px] text-foreground/35">
                          {time}
                        </span>
                        <div className="flex-1 border-b border-dashed border-border" />
                        <div
                          className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-primary" : "bg-border"}`}
                        />
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-auto pt-5">
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Scheduled Delivery
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/45">
                    Subscribers choose their delivery hour. Emails arrive at the
                    exact time they chose. No batching.
                  </p>
                </div>
              </div>

              {/* Timezone Aware */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary/40" />
                  <div className="font-mono text-[12px] text-foreground/28">
                    auto-detected via Intl API
                  </div>
                </div>
                <div className="mt-4 space-y-1.5 font-mono text-[12px]">
                  {[
                    { tz: "America/New_York", time: "08:00", label: "EST" },
                    { tz: "Europe/London", time: "13:00", label: "GMT" },
                    { tz: "Asia/Tokyo", time: "22:00", label: "JST" },
                  ].map((row) => (
                    <div
                      key={row.tz}
                      className="flex items-center justify-between"
                    >
                      <span className="text-foreground/35">{row.tz}</span>
                      <span className="text-foreground/50">
                        <span className="text-primary/60">{row.label}</span>{" "}
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Timezone Aware
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/45">
                    8am means 8am wherever they are. Timezones are auto-detected
                    and stored per subscription.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Two wide cards */}
            <div className="grid gap-px md:grid-cols-2">
              {/* Companion Pages */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <div className="border border-border bg-card">
                  <div className="flex items-center gap-1.5 border-b border-border px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    <span className="ml-2 font-mono text-[10px] text-foreground/20">
                      yoursite.com/p/my-course/day-1
                    </span>
                  </div>
                  <div className="space-y-1.5 px-4 py-3">
                    <div className="h-2 w-3/4 rounded-sm bg-border" />
                    <div className="h-2 w-full rounded-sm bg-border" />
                    <div className="h-2 w-5/6 rounded-sm bg-border" />
                    <div className="h-2 w-2/3 rounded-sm bg-border" />
                  </div>
                </div>
                <div className="mt-auto pt-5">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary/40" />
                    <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                      Companion Pages
                    </p>
                  </div>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/45">
                    Every email gets a web-readable page. Subscribers share
                    links and read on any device — no inbox digging.
                  </p>
                </div>
              </div>

              {/* Email Branding */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <div className="border border-border bg-card">
                  <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
                    <span className="font-mono text-[10px] text-foreground/20">
                      EmailShell.tsx
                    </span>
                    <Mail className="h-3 w-3 text-foreground/20" />
                  </div>
                  <div className="px-4 py-3">
                    <div className="mx-auto max-w-[200px] border border-dashed border-border p-2">
                      <div className="mb-2 h-3 w-16 bg-primary/10" />
                      <div className="space-y-1">
                        <div className="h-1.5 w-full rounded-sm bg-border" />
                        <div className="h-1.5 w-4/5 rounded-sm bg-border" />
                      </div>
                      <div className="mt-2 h-2 w-12 bg-primary/10" />
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-5">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary/40" />
                    <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                      Email Branding
                    </p>
                  </div>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/45">
                    Each pack has its own React Email shell. Full control over
                    headers, footers, typography, and colors.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: Four compact cards */}
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {/* Pause & Resume */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center border border-border bg-card">
                    <Pause className="h-3 w-3 text-primary/60" />
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <div className="flex h-7 w-7 items-center justify-center border border-border bg-card">
                    <Play className="h-3 w-3 text-primary/60" />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Pause &amp; Resume
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/45">
                    One click to pause, pick up exactly where they left off.
                  </p>
                </div>
              </div>

              {/* Subscriber Management */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <div className="font-mono text-[11px] leading-[1.8] text-foreground/28">
                  <span className="text-primary/40">→</span> update time
                  <br />
                  <span className="text-primary/40">→</span> change timezone
                  <br />
                  <span className="text-primary/40">→</span> unsubscribe
                </div>
                <div className="mt-auto pt-4">
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Self-Serve Manage
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/45">
                    Signed token links. No passwords, no accounts.
                  </p>
                </div>
              </div>

              {/* One-Click Unsubscribe */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary/40" />
                  <span className="font-mono text-[11px] text-foreground/28">
                    CAN-SPAM · GDPR
                  </span>
                </div>
                <div className="mt-auto pt-4">
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    One-Click Unsub
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/45">
                    Signed, cryptographically verified. Compliant out of the
                    box.
                  </p>
                </div>
              </div>

              {/* Pluggable Adapters */}
              <div className="flex flex-col bg-background p-5 md:p-6">
                <div className="flex items-center gap-2">
                  <Plug className="h-4 w-4 text-primary/40" />
                  <div className="flex gap-1">
                    {["Postmark", "Resend", "…"].map((name) => (
                      <span
                        key={name}
                        className="border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] text-foreground/35"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Pluggable Adapters
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-foreground/45">
                    Swap email providers with a single adapter. No vendor
                    lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Drip Flow ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            The Drip Flow
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            What happens after someone subscribes
          </h2>
          <p className="mt-3 max-w-xl font-mono text-base leading-relaxed text-foreground/35">
            Every subscription follows the same lifecycle. Zero configuration.
          </p>

          {/* Horizontal timeline */}
          <div className="mt-10 overflow-x-auto">
            <div className="relative min-w-[700px]">
              {/* Horizontal line */}
              <div className="absolute left-0 right-0 top-5 h-px bg-border" />

              <div className="grid grid-cols-5">
                {(
                  [
                    {
                      icon: UserPlus,
                      label: "Subscribe",
                      desc: "Visitor enters email + preferred delivery time",
                    },
                    {
                      icon: ShieldCheck,
                      label: "Confirm",
                      desc: "Signed token email → click to activate",
                    },
                    {
                      icon: Mail,
                      label: "Welcome",
                      desc: "Sent immediately on confirmation",
                    },
                    {
                      icon: Clock,
                      label: "Drip",
                      desc: "One lesson per day at the chosen time & timezone",
                    },
                    {
                      icon: CircleCheckBig,
                      label: "Complete",
                      desc: "Marked as completed after final step",
                    },
                  ] as const
                ).map((step) => (
                  <div
                    key={step.label}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Node */}
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
                      <step.icon
                        className="h-4 w-4 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Content */}
                    <p className="mt-3 font-mono text-[12px] font-bold uppercase tracking-wider text-primary">
                      {step.label}
                    </p>
                    <p className="mt-1 px-2 text-[13px] leading-relaxed text-foreground/35">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Anytime actions */}
          <div className="mt-8 grid gap-px bg-border p-px sm:grid-cols-2">
            <div className="flex items-center gap-3 bg-background px-5 py-4">
              <Pause
                className="h-4 w-4 shrink-0 text-primary"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-mono text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
                  Pause
                </p>
                <p className="mt-0.5 text-[13px] text-foreground/35">
                  Resume exactly where they left off
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background px-5 py-4">
              <LogOut
                className="h-4 w-4 shrink-0 text-primary"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-mono text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
                  Unsubscribe
                </p>
                <p className="mt-0.5 text-[13px] text-foreground/35">
                  One-click, signed link, instant
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-px bg-border p-px sm:grid-cols-3">
            {(
              [
                {
                  icon: KeyRound,
                  label: "Signed Tokens",
                  desc: "Every action link (confirm, manage, pause, stop) uses a cryptographically signed, single-use token. No passwords, no sessions.",
                },
                {
                  icon: RefreshCcw,
                  label: "Idempotent Delivery",
                  desc: "The send log tracks every email sent. If the cron job runs twice, the same step is never sent again. Safe to retry, safe to overlap.",
                },
                {
                  icon: Workflow,
                  label: "Status Machine",
                  desc: "Subscriptions move through PENDING_CONFIRM → ACTIVE → PAUSED → COMPLETED or STOPPED. Every transition is logged and auditable.",
                },
              ] as const
            ).map((item) => (
              <div key={item.label} className="bg-background p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/12 bg-primary/3 shadow-[0_0_16px_color-mix(in_srgb,var(--primary)_8%,transparent)]">
                  <item.icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                  {item.label}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fully Customizable ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Your Design
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            It&apos;s just Next.js. Customize everything.
          </h2>
          <p className="mt-3 max-w-xl font-mono text-base leading-relaxed text-foreground/35">
            No locked-down templates. Every surface is a React component you
            own.
          </p>

          {/* 4 mini-mockup cards */}
          <div className="mt-12 grid gap-px bg-border p-px sm:grid-cols-2">
            {/* Landing Page */}
            <div className="bg-background p-5 md:p-6">
              <div className="border border-dashed border-border bg-card p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-20 bg-border" />
                  <div className="ml-auto h-3 w-8 bg-border" />
                </div>
                <div className="space-y-2">
                  <div className="h-5 w-3/4 bg-accent" />
                  <div className="h-2 w-full bg-secondary" />
                  <div className="h-2 w-2/3 bg-secondary" />
                </div>
                <div className="mt-3 h-7 w-24 bg-primary/10" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Landing Page
                  </p>
                  <p className="mt-1 text-[13px] text-foreground/35">
                    Subscribe page, hero, social proof — all yours
                  </p>
                </div>
                <Code className="h-4 w-4 text-foreground/20" />
              </div>
            </div>

            {/* Email Template */}
            <div className="bg-background p-5 md:p-6">
              <div className="border border-dashed border-border bg-card p-4">
                <div className="mb-2 h-4 w-16 border border-dashed border-primary/20 bg-primary/5" />
                <div className="space-y-1.5">
                  <div className="h-2 w-full bg-accent" />
                  <div className="h-2 w-4/5 bg-accent" />
                </div>
                <div className="mt-3 h-px w-full bg-border" />
                <div className="mt-2 h-3 w-20 border border-dashed border-primary/20 bg-primary/5" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Email Template
                  </p>
                  <p className="mt-1 text-[13px] text-foreground/35">
                    React Email shell — header, footer, styles
                  </p>
                </div>
                <Code className="h-4 w-4 text-foreground/20" />
              </div>
            </div>

            {/* Companion Pages */}
            <div className="bg-background p-5 md:p-6">
              <div className="border border-dashed border-border bg-card p-4">
                <div className="mb-2 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  <div className="ml-1 h-2 w-24 bg-secondary" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-3 w-2/3 bg-accent" />
                  <div className="h-2 w-full bg-secondary" />
                  <div className="h-2 w-5/6 bg-secondary" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Companion Pages
                  </p>
                  <p className="mt-1 text-[13px] text-foreground/35">
                    Custom typography, layout, and navigation
                  </p>
                </div>
                <Code className="h-4 w-4 text-foreground/20" />
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="bg-background p-5 md:p-6">
              <div className="border border-dashed border-border bg-card p-4">
                <div className="space-y-2">
                  <div className="h-2 w-12 bg-border" />
                  <div className="h-7 w-full border border-border bg-background" />
                  <div className="h-2 w-16 bg-border" />
                  <div className="h-7 w-full border border-border bg-background" />
                  <div className="h-7 w-20 bg-primary/10" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    Subscribe Form
                  </p>
                  <p className="mt-1 text-[13px] text-foreground/35">
                    Fields, validation, and styling — fully yours
                  </p>
                </div>
                <Code className="h-4 w-4 text-foreground/20" />
              </div>
            </div>
          </div>

          {/* Code snippet */}
          <div className="mt-6 border border-border bg-card">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <Layers className="h-3 w-3 text-foreground/20" />
              <span className="font-mono text-[11px] text-foreground/28">
                email-shell.tsx
              </span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-[1.8] text-foreground/35">
              <code>
                <span className="text-foreground/45">export</span>{" "}
                <span className="text-foreground/45">function</span>{" "}
                <span className="text-primary/60">EmailShell</span>
                {"({ "}
                <span className="text-muted-foreground">
                  children, packName, accentColor, logoUrl
                </span>
                {" }) {"}
                {"\n  "}
                <span className="text-foreground/45">return</span> {"("}
                {"\n    "}
                <span className="text-foreground/28">
                  {"<Html> <Body> <Container>"}
                </span>
                {"\n      "}
                <span className="text-foreground/28">
                  {"<Header logo={logoUrl} /> "}
                </span>
                <span className="text-foreground/20">
                  {"// ← your component"}
                </span>
                {"\n      "}
                <span className="text-foreground/28">{"{children}"}</span>
                {"\n      "}
                <span className="text-foreground/28">{"<Footer />"}</span>
                {"\n    "}
                <span className="text-foreground/28">
                  {"</Container> </Body> </Html>"}
                </span>
                {"\n  );\n}"}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── Dev Mode ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Dev Mode
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Test a 7-day course in 7 minutes.
          </h2>
          <p className="mt-3 max-w-xl font-mono text-base leading-relaxed text-foreground/35">
            No waiting for real-time delivery. Fast-test mode compresses days
            into minutes so you can preview your entire course instantly.
          </p>

          <div className="mt-12 space-y-8">
            {/* Normal timeline */}
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-foreground/28">
                Normal schedule
              </p>
              <div className="relative flex items-center justify-between">
                <div className="absolute left-0 right-0 top-1/2 h-px bg-border" />
                {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((day) => (
                  <div
                    key={day}
                    className="relative z-10 flex flex-col items-center"
                  >
                    <div className="h-3 w-3 rounded-full border border-foreground/20 bg-card" />
                    <span className="mt-2 font-mono text-[11px] text-foreground/35">
                      {day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compression indicator */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px flex-1 border-t border-dashed border-border" />
              <div className="flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1.5">
                <Zap className="h-3 w-3 text-primary/60" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary/60">
                  1440× faster
                </span>
              </div>
              <div className="h-px flex-1 border-t border-dashed border-border" />
            </div>

            {/* Compressed timeline */}
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-foreground/28">
                Fast-test mode
              </p>
              <div className="relative flex items-center">
                <div className="absolute left-0 right-[40%] top-1/2 h-px bg-primary/20" />
                <div className="relative z-10 flex items-center gap-4">
                  {["1min", "2min", "3min", "4min", "5min"].map((t) => (
                    <div key={t} className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full border border-primary/30 bg-primary/10" />
                      <span className="mt-2 font-mono text-[11px] text-primary/50">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Env var + callout */}
          <div className="mt-10 grid gap-px bg-border p-px sm:grid-cols-2">
            <div className="bg-card p-5">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-foreground/28">
                .env
              </p>
              <code className="font-mono text-[14px] text-primary">
                DRIP_TIME_SCALE=1440
              </code>
              <p className="mt-2 font-mono text-[12px] text-foreground/35">
                1 day → 1 minute
              </p>
            </div>
            <div className="flex items-center bg-background p-5">
              <p className="font-mono text-[14px] leading-relaxed text-foreground/45">
                Test your entire 7-day course in{" "}
                <span className="text-primary">7 minutes</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Preview ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Content Preview
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Preview every email and page before you ship.
          </h2>
          <p className="mt-3 max-w-xl font-mono text-base leading-relaxed text-foreground/35">
            A built-in dev tool that renders your entire course — emails and
            companion pages — exactly as subscribers will see them. Send test
            emails to yourself with one click.
          </p>

          {/* Previewer UI mockup */}
          <div className="mt-12 border border-border bg-card">
            {/* Top bar */}
            <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
              </div>
              <span className="min-w-0 flex-1 truncate font-mono text-xs text-foreground/28">
                localhost:3000/content-preview
              </span>
              <span className="border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary/60 sm:ml-auto">
                dev only
              </span>
            </div>

            <div className="flex min-h-[280px] flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full shrink-0 border-b border-border p-3 md:w-52 md:border-b-0 md:border-r">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-foreground/20">
                  Content Packs
                </p>
                {[
                  {
                    name: "my-course",
                    items: [
                      { label: "welcome", type: "email", active: false },
                      { label: "day-1", type: "email", active: true },
                      { label: "day-2", type: "email", active: false },
                      { label: "day-1", type: "page", active: false },
                    ],
                  },
                ].map((pack) => (
                  <div key={pack.name} className="mb-3">
                    <p className="mb-1 font-mono text-[11px] font-medium text-foreground/50">
                      {pack.name}
                    </p>
                    <div className="space-y-0.5">
                      {pack.items.map((item, i) => (
                        <div
                          key={`${pack.name}-${item.label}-${item.type}-${i}`}
                          className={`flex items-center gap-2 px-2 py-1 font-mono text-[11px] ${
                            item.active
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/35"
                          }`}
                        >
                          {item.type === "email" ? (
                            <Mail className="h-3 w-3" />
                          ) : (
                            <FileText className="h-3 w-3" />
                          )}
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="mt-3 border-t border-border pt-3">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-foreground/20">
                    System
                  </p>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 px-2 py-1 font-mono text-[11px] text-foreground/35">
                      <Mail className="h-3 w-3" />
                      confirm
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 font-mono text-[11px] text-foreground/35">
                      <Mail className="h-3 w-3" />
                      manage-link
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview pane */}
              <div className="min-w-0 flex-1 p-3 sm:p-4">
                {/* Email header bar */}
                <div className="mb-3 flex flex-col gap-2 border-b border-border pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-[12px] font-medium text-muted-foreground">
                      Day 1: Getting Started
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] text-foreground/28">
                      Your first lesson awaits
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 items-center gap-1.5 border border-primary/30 bg-primary/5 px-3 font-mono text-[11px] text-primary/80">
                      <Send className="h-3 w-3" />
                      Send Test
                    </div>
                  </div>
                </div>

                {/* Rendered email preview */}
                <div className="border border-border bg-[#fafafa] p-5">
                  <div className="space-y-2">
                    <div className="h-3 w-20 rounded-sm bg-[#e0e0e0]" />
                    <div className="h-4 w-48 rounded-sm bg-[#d0d0d0]" />
                  </div>
                  <div className="my-3 h-px w-full bg-[#e0e0e0]" />
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded-sm bg-[#e8e8e8]" />
                    <div className="h-2.5 w-5/6 rounded-sm bg-[#e8e8e8]" />
                    <div className="h-2.5 w-4/5 rounded-sm bg-[#e8e8e8]" />
                  </div>
                  <div className="mt-4">
                    <div className="inline-block rounded-sm bg-primary/80 px-4 py-1.5">
                      <div className="h-2 w-20 rounded-sm bg-background/30" />
                    </div>
                  </div>
                  <div className="mt-4 border-t border-[#e0e0e0] pt-2">
                    <div className="flex gap-3">
                      <div className="h-2 w-12 rounded-sm bg-[#e0e0e0]" />
                      <div className="h-2 w-8 rounded-sm bg-[#e0e0e0]" />
                      <div className="h-2 w-16 rounded-sm bg-[#e0e0e0]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature callouts */}
          <div className="mt-6 grid gap-px bg-border p-px sm:grid-cols-3">
            <div className="bg-background p-4">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-primary/40" />
                <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                  Live Rendering
                </p>
              </div>
              <p className="mt-1.5 text-[13px] text-foreground/35">
                Emails render in a sandboxed iframe using the same pipeline as
                production. Pages render as formatted prose.
              </p>
            </div>
            <div className="bg-background p-4">
              <div className="flex items-center gap-2">
                <Send className="h-4 w-4 text-primary/40" />
                <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                  Send Test Emails
                </p>
              </div>
              <p className="mt-1.5 text-[13px] text-foreground/35">
                Send any email to your inbox with one click. See exactly what
                your subscribers will receive — subject, preview, and all.
              </p>
            </div>
            <div className="bg-background p-4">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary/40" />
                <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                  All Packs &amp; Steps
                </p>
              </div>
              <p className="mt-1.5 text-[13px] text-foreground/35">
                Browse every registered pack, every email, every companion page,
                and system templates — all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Stack
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Tools you already know.
          </h2>

          <div className="mt-10 grid gap-px bg-border p-px sm:grid-cols-2 lg:grid-cols-3">
            {STACK.map((tech) => (
              <div key={tech.name} className="bg-background p-5">
                <p className="text-base font-bold tracking-tight">
                  {tech.name}
                </p>
                <p className="mt-1 font-mono text-[13px] text-foreground/35">
                  {tech.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ContentDrip ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[13px] uppercase tracking-[0.3em] text-foreground/28">
            Why ContentDrip?
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            Own your email courses. Literally.
          </h2>

          {/* Comparison table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-mono text-[13px] font-bold uppercase tracking-wider text-foreground/28">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-left font-mono text-[13px] font-bold uppercase tracking-wider text-foreground/28">
                    SaaS Platforms
                  </th>
                  <th className="px-4 py-3 text-left font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                    ContentDrip
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Monthly fee",
                    saas: "$29-$199/mo",
                    contentdrip: "$0 (hosting only)",
                  },
                  {
                    feature: "Subscriber limits",
                    saas: "500-10K cap",
                    contentdrip: "Unlimited",
                  },
                  {
                    feature: "Design control",
                    saas: "Templates only",
                    contentdrip: "Full React codebase",
                  },
                  {
                    feature: "Data ownership",
                    saas: "Platform owns",
                    contentdrip: "You own everything",
                  },
                  {
                    feature: "Email portability",
                    saas: "Export CSV",
                    contentdrip: "Git repo",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border transition-colors hover:bg-card"
                  >
                    <td className="px-4 py-4 font-mono text-[13px] text-muted-foreground">
                      {row.feature}
                    </td>
                    <td className="px-4 py-4 font-mono text-[13px] text-foreground/35">
                      {row.saas}
                    </td>
                    <td className="px-4 py-4 font-mono text-[13px] font-medium text-primary">
                      {row.contentdrip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key differentiator callout */}
          <div className="mt-6 border border-primary/20 bg-primary/5 p-6">
            <p className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
              The Real Difference
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Email platforms rent you their infrastructure. ContentDrip gives
              you the source code. When you clone the repo, you own the entire
              stack — database schema, email templates, subscriber management,
              everything. No API calls to a third party. No monthly fees that
              scale with your success.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Your course can be live in an hour.
          </h2>
          <p className="mt-4 max-w-lg font-mono text-base leading-relaxed text-foreground/50">
            Clone the repo, write your first lesson, deploy to Vercel. No credit
            card. No setup wizard. Just code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/docs"
              className="group inline-flex h-9 items-center gap-2 bg-primary px-4 font-mono text-[13px] font-bold uppercase tracking-widest text-primary-foreground no-underline transition-colors hover:bg-[#d8ff44]"
            >
              Clone the Repo
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://my-contentdrip-course.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center border border-foreground/20 px-4 font-mono text-[13px] font-bold uppercase tracking-widest text-foreground/50 no-underline transition-colors hover:border-foreground/35 hover:text-foreground"
            >
              Try the Demo Course
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[13px] text-foreground/20">
              Built by{" "}
              <a
                href="https://pego.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/35 no-underline transition-colors hover:text-foreground"
              >
                Peter Gombos
              </a>
            </p>
            <nav className="flex items-center gap-5">
              <Link
                href="/docs"
                className="font-mono text-[13px] text-foreground/28 no-underline transition-colors hover:text-muted-foreground"
              >
                docs
              </Link>
              <Link
                href="/mindful-productivity"
                className="font-mono text-[13px] text-foreground/28 no-underline transition-colors hover:text-muted-foreground"
              >
                demo
              </Link>
              <a
                href="https://github.com/petergombos/contentdrip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/28 no-underline transition-colors hover:text-muted-foreground"
                aria-label="GitHub"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com/pepegombos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/28 no-underline transition-colors hover:text-muted-foreground"
                aria-label="X (Twitter)"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
