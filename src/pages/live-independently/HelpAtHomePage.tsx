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

export default function HelpAtHomePage() {
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
          <BreadcrumbPage>Help at home</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">Help at home</h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          If you are finding it difficult to manage everyday tasks at home, we can
          arrange support to help you stay safe and independent. Help at home
          services are tailored to your individual needs.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Home care services */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Home care services</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Home care is support provided in your own home by trained care workers.
          Care visits can be arranged at times that suit you, from a short visit
          once a day to more intensive support throughout the day and night.
          Home care services are arranged following a needs assessment by our
          Adult Social Care team.
          </p>
          </section>

          {/* Personal care */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Personal care</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Personal care involves help with tasks such as:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Washing and bathing</li>
          <li>Getting dressed and undressed</li>
          <li>Help with eating and drinking</li>
          <li>Support with using the toilet</li>
          <li>Help with medication</li>
          <li>Moving around your home safely</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          All personal care is delivered with dignity and respect. Your care plan
          will be tailored to your preferences and routines.
          </p>
          </section>

          {/* Domestic support */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Domestic support</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Domestic support can include help with tasks around the home such as:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Cleaning and tidying</li>
          <li>Laundry and ironing</li>
          <li>Preparing meals</li>
          <li>Shopping for essentials</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Domestic support may be provided alongside personal care or as a
          standalone service, depending on your assessed needs.
          </p>
          </section>

          {/* Reablement */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Reablement</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Reablement is a short-term service, usually lasting up to six weeks,
          designed to help you regain the skills and confidence you need to live
          independently. It is often offered after a stay in hospital or a
          period of illness.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          During reablement, a team of care workers and therapists will work with
          you to practise everyday activities and build your strength and
          abilities. The aim is to reduce or remove your need for ongoing care.
          Reablement is provided free of charge.
          </p>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          How to arrange help at home
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          To find out what support you are eligible for, contact our Adult Social
          Care team for an assessment.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
          to="/adult-social-care/live-independently-at-home/request-home-independence-assessment"
          className="inline-block rounded-md bg-wf-green px-5 py-2.5 text-center text-sm font-semibold text-white no-underline hover:bg-wf-green/90"
          >
          Request a home assessment
          </Link>
          <a
          href="tel:02084963130"
          className="inline-block rounded-md border border-wf-green px-5 py-2.5 text-center text-sm font-semibold text-wf-green no-underline hover:bg-[#d7f8ff]"
          >
          Call 020 8496 3130
          </a>
          </div>
          </section>

          {/* Related links */}
          <div className="mt-10">
          <h2 className="text-xl font-bold text-wf-pink">Related links</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          <li>
          <Link to="/adult-social-care/live-independently-at-home/equipment-and-assistive-technology">
          Equipment and aids
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy">
          Home adaptations
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/paying-for-care">Paying for care</Link>
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
