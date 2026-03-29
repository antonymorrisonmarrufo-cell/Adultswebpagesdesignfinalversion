import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const cards = [
  {
    title: "Falls prevention",
    description:
      "Risk factors, staying active, home safety checks and strength and balance classes.",
    href: "/live-independently/falls-prevention",
  },
  {
    title: "Social prescribing",
    description:
      "Connect with local activities, groups and services to improve your health and wellbeing.",
    href: "/live-independently/social-prescribing",
  },
  {
    title: "Equipment and aids",
    description:
      "Daily living aids, how to get equipment and occupational therapy assessments.",
    href: "/live-independently/equipment-and-aids",
  },
  {
    title: "Telecare",
    description:
      "Personal alarms, sensors and monitoring technology to help you stay safe at home.",
    href: "/live-independently/telecare",
  },
  {
    title: "Home adaptations",
    description:
      "Find out about grab rails, ramps, stairlifts, bathroom adaptations and Disabled Facilities Grants.",
    href: "/live-independently/home-adaptations",
  },
  {
    title: "Help at home",
    description:
      "Home care services including personal care, domestic support and reablement.",
    href: "/live-independently/help-at-home",
  },
  {
    title: "Keeping safe",
    description:
      "Advice on doorstep callers, online fraud, phone scams and fire safety.",
    href: "/live-independently/keeping-safe",
  },
  {
    title: "Homeshare",
    description:
      "Share your home with someone who can help, or become a homesharer yourself.",
    href: "/live-independently/homeshare",
  },
];

export default function LiveIndependentlyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/adult-social-care">Adult Social Care</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Live independently</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page heading */}
      <h1 className="text-5xl font-bold text-wf-green">Live independently</h1>

      <p className="mt-4 text-lg leading-relaxed text-wf-gray">
        We want to help you stay in your own home for as long as possible. Find
        out about the services, equipment and support available to help you live
        safely and independently in Waltham Forest.
      </p>

      {/* Prevention callout banner */}
      <div className="mt-6 rounded-lg border-l-4 border-wf-green bg-green-50 p-5">
        <p className="text-sm leading-relaxed text-wf-dark">
          You do not need a formal assessment to access many of these services.
          Browse the options below or use our{" "}
          <Link
            to="/how-to-get-support/check-situation-online"
            className="font-semibold text-wf-green underline hover:text-wf-green/80"
          >
            self-assessment tool
          </Link>{" "}
          to find what is right for you.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            to={card.href}
            className="group rounded-lg border border-gray-200 bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md hover:border-wf-green/40"
          >
            <h2 className="text-xl font-bold text-wf-pink group-hover:underline">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-wf-gray">
              {card.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Contact block */}
      <div className="mt-10 rounded-lg bg-wf-green-light p-6">
        <h2 className="text-xl font-bold text-wf-pink">Need help?</h2>
        <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          If you or someone you know needs support to live independently,
          contact our Adult Social Care team.
        </p>
        <p className="mt-3 text-sm text-wf-dark">
          <Link
            to="/how-to-get-support/check-situation-online"
            className="font-semibold text-wf-green underline hover:text-wf-green/80"
          >
            Try our self-assessment tool
          </Link>{" "}
          to check what support you may be eligible for.
        </p>
        <p className="mt-3 text-sm text-wf-dark">
          <span className="font-semibold">Phone:</span>{" "}
          <a
            href="tel:02084963130"
            className="font-bold text-wf-green no-underline hover:underline"
          >
            020 8496 3130
          </a>
        </p>
      </div>

      {/* Related links */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-wf-pink">Related links</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>
            <Link to="/how-to-get-support">How to get support</Link>
          </li>
          <li>
            <Link to="/paying-for-care">Paying for care</Link>
          </li>
          <li>
            <Link to="/carers">Being a carer</Link>
          </li>
          <li>
            <Link to="/safeguarding">Safeguarding</Link>
          </li>
        </ul>
      </div>

      {/* Last updated */}
      <p className="mt-10 text-xs text-wf-gray">Last updated: March 2026</p>
    </div>
  );
}
