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

export default function HomesharePage() {
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
          <Link to="/adult-social-care/live-independently-at-home">Live independently</Link>
          </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbPage>Homeshare</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">Homeshare</h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          Homeshare brings together people who have a spare room with people who
          need affordable accommodation. In return for low-cost housing, the
          homesharer provides companionship and around 10 hours of support per
          week.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* How it works */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">How Homeshare works</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Homeshare is a carefully managed arrangement between two people:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>
          The <strong>householder</strong> is usually an older person who has a
          spare room and would benefit from some company and practical help
          around the home.
          </li>
          <li>
          The <strong>homesharer</strong> is someone who needs affordable
          accommodation and is happy to provide support in exchange for
          reduced-cost housing.
          </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Homeshare is not a care service. The homesharer does not provide
          personal care. Instead, they offer help with everyday tasks such as
          cooking a meal together, help with shopping, light housework or simply
          being there for company and reassurance.
          </p>
          </section>

          {/* Benefits */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Benefits of Homeshare
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="text-base font-bold text-[#231F20]">
          For householders
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Companionship and reduced isolation</li>
          <li>Help with everyday tasks</li>
          <li>Someone at home in the evenings for peace of mind</li>
          <li>A contribution towards household bills</li>
          <li>Support to remain living independently at home</li>
          </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
          <h3 className="text-base font-bold text-[#231F20]">
          For homesharers
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Affordable accommodation in exchange for support</li>
          <li>A safe and comfortable place to live</li>
          <li>Companionship and a sense of community</li>
          <li>Valuable experience of supporting an older person</li>
          <li>A flexible arrangement that works around your schedule</li>
          </ul>
          </div>
          </div>
          </section>

          {/* Matching process */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          The matching process
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          The Homeshare programme is run by a dedicated team who carefully match
          householders and homesharers. The process includes:
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-wf-gray">
          <li>An initial conversation about your situation and what you are looking for</li>
          <li>A home visit to meet you and see the accommodation</li>
          <li>Enhanced DBS checks and references for all homesharers</li>
          <li>A trial meeting between the householder and potential homesharer</li>
          <li>A trial period to make sure the arrangement is working well</li>
          <li>Ongoing support from the Homeshare team for as long as the match continues</li>
          </ol>
          </section>

          {/* Becoming a householder or homesharer */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Becoming a householder or homesharer
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If you are interested in Homeshare, either as a householder with a
          spare room or as a homesharer looking for affordable accommodation,
          contact our team to find out more. There is no obligation, and we are
          happy to answer any questions.
          </p>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          Find out more about Homeshare
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          Contact our Adult Social Care team to discuss whether Homeshare could
          work for you.
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
          </section>

          {/* Related links */}
          <div className="mt-10">
          <h2 className="text-xl font-bold text-wf-pink">Related links</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>
          <Link to="/adult-social-care/live-independently-at-home/help-at-home-and-personal-care">Help at home</Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/social-prescribing">
          Social prescribing
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home">Keeping safe</Link>
          </li>
          <li>
          <Link to="/adult-social-care/being-carer">Being a carer</Link>
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
