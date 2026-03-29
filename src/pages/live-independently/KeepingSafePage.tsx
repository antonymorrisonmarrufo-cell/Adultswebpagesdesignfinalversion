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

const subPages = [
  {
    title: "Callers to your door",
    description:
      "How to stay safe when someone calls at your door, No Cold Calling zones and how to report suspicious callers.",
    href: "/live-independently/keeping-safe/callers-to-your-door",
  },
  {
    title: "Online, email and postal fraud",
    description:
      "Common scam types, how to protect yourself and how to report online, email or postal fraud.",
    href: "/live-independently/keeping-safe/online-email-postal-fraud",
  },
  {
    title: "Fraud over the phone",
    description:
      "How to recognise phone scams, call blocking advice and how to report telephone fraud.",
    href: "/live-independently/keeping-safe/fraud-over-the-phone",
  },
  {
    title: "Fire safety at home",
    description:
      "Free fire safety visits, smoke alarms, fire escape plans and fire prevention advice.",
    href: "/live-independently/keeping-safe/fire-safety",
  },
  {
    title: "Further information on staying safe",
    description:
      "Useful contacts, resources and organisations that can help you stay safe.",
    href: "/live-independently/keeping-safe/further-information",
  },
];

export default function KeepingSafePage() {
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
          <BreadcrumbLink asChild>
          <Link to="/live-independently">Live independently</Link>
          </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbPage>Keeping safe</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">Keeping safe at home</h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          Staying safe at home is about more than locks and alarms. Fraud, scams
          and bogus callers target vulnerable people every day. Find out how to
          protect yourself and where to get help.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Sub-page cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {subPages.map((page) => (
          <Link
          key={page.href}
          to={page.href}
          className="flex flex-col bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow no-underline group min-h-[180px]"
          >
          <h3 className="text-base font-bold text-[#bf3688] mb-2">
          {page.title}
          </h3>
          <p className="text-sm text-[#231F20] flex-1">
          {page.description}
          </p>
          <div className="flex justify-end mt-4">
            <div className="w-8 h-8 rounded-full bg-[#bf3688] flex items-center justify-center group-hover:bg-[#a02d73] transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          </Link>
          ))}
          </div>

          {/* Emergency info */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          In an emergency
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          If you feel threatened or are in immediate danger, call{" "}
          <strong>999</strong>. To report a non-emergency crime, call the police
          on <strong>101</strong>.
          </p>
          <p className="mt-3 text-sm text-wf-dark">
          <span className="font-semibold">Adult Social Care:</span>{" "}
          <a
          href="tel:02084963130"
          className="font-bold text-[#231F20] no-underline hover:underline"
          >
          020 8496 3130
          </a>
          </p>
          </section>

          {/* Related links */}
          <div className="mt-10">
          <h2 className="text-xl font-bold text-wf-pink">Related links</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>
          <Link to="/live-independently/telecare">Telecare</Link>
          </li>
          <li>
          <Link to="/safeguarding">Safeguarding</Link>
          </li>
          <li>
          <Link to="/live-independently/falls-prevention">
          Falls prevention
          </Link>
          </li>
          <li>
          <Link to="/live-independently/home-adaptations">
          Home adaptations
          </Link>
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
