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
    <div className="min-h-screen">
      {/* White section: breadcrumbs + H1 + description */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-6 pb-8">
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
          <h1 className="text-5xl font-bold text-[#231F20]">Live independently</h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          We want to help you stay in your own home for as long as possible. Find
          out about the services, equipment and support available to help you live
          safely and independently in Waltham Forest.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Prevention callout banner */}
          <div className="mt-6 rounded-lg border-l-4 border-[#003078] bg-white p-5">
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
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">
          {card.title}
          </h3>
          <p className="text-sm text-[#231F20] flex-1">
          {card.description}
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>
          ))}
          </div>

          {/* Contact block */}
          <div className="mt-10 rounded-lg bg-[#d7f8ff] p-6">
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
          className="font-bold text-[#231F20] no-underline hover:underline"
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
      </div>
    </div>
  );
}
