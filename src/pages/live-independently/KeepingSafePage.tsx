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

      {/* Page heading */}
      <h1 className="text-5xl font-bold text-wf-green">Keeping safe at home</h1>

      <p className="mt-4 text-lg leading-relaxed text-wf-gray">
        Staying safe at home is about more than locks and alarms. Fraud, scams
        and bogus callers target vulnerable people every day. Find out how to
        protect yourself and where to get help.
      </p>

      {/* Sub-page cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {subPages.map((page) => (
          <Link
            key={page.href}
            to={page.href}
            className="group rounded-lg border border-gray-200 bg-white p-6 no-underline shadow-sm transition-shadow hover:shadow-md hover:border-wf-green/40"
          >
            <h2 className="text-xl font-bold text-wf-pink group-hover:underline">
              {page.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-wf-gray">
              {page.description}
            </p>
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
            className="font-bold text-wf-green no-underline hover:underline"
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
  );
}
