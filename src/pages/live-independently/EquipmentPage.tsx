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

export default function EquipmentPage() {
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
          <BreadcrumbPage>Equipment and aids</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-wf-green">Equipment and aids</h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          Equipment and daily living aids can help you carry out everyday tasks
          more easily and safely. Find out what is available and how to access it.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Daily living aids */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Daily living aids</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          There is a wide range of daily living aids that can help with everyday
          activities. These include:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Kitchen aids such as jar openers, kettle tippers and adapted cutlery</li>
          <li>Dressing aids including long-handled shoe horns and button hooks</li>
          <li>Bathing aids such as bath boards, shower stools and long-handled sponges</li>
          <li>Mobility aids including walking frames, sticks and wheelchair accessories</li>
          <li>Toilet aids such as raised toilet seats and toilet frames</li>
          <li>Beds and seating such as bed raisers, profiling beds and riser-recliner chairs</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Many simple aids can be purchased from high street shops or online
          retailers. Our occupational therapy team can advise you on the most
          suitable equipment for your needs.
          </p>
          </section>

          {/* How to get equipment */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          How to get equipment
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Some equipment is available free of charge through the council
          following an assessment. The equipment remains the property of the
          council and is on loan to you for as long as you need it.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          To request equipment, you can:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>
          <Link to="/live-independently/request-home-assessment">
          Request a home assessment online
          </Link>
          </li>
          <li>
          Call our Adult Social Care team on{" "}
          <a href="tel:02084963130" className="font-bold text-wf-green">
          020 8496 3130
          </a>
          </li>
          <li>
          Ask your GP, district nurse or other health professional to make a
          referral on your behalf
          </li>
          </ul>
          </section>

          {/* Occupational therapy assessment */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Occupational therapy assessment
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          An occupational therapist (OT) can visit you at home to assess your
          needs and recommend the right equipment. During the assessment, the OT
          will:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Talk to you about the difficulties you are experiencing</li>
          <li>Observe how you carry out daily tasks</li>
          <li>Assess your home environment</li>
          <li>Recommend equipment, aids or adaptations that could help</li>
          <li>Arrange for equipment to be delivered and fitted if needed</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          You do not need a GP referral to request an OT assessment. You can
          contact us directly.
          </p>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          Request an assessment
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          To find out what equipment could help you, request an assessment from
          our occupational therapy team.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
          to="/live-independently/request-home-assessment"
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
          <Link to="/live-independently/home-adaptations">
          Home adaptations
          </Link>
          </li>
          <li>
          <Link to="/live-independently/telecare">Telecare</Link>
          </li>
          <li>
          <Link to="/live-independently/falls-prevention">
          Falls prevention
          </Link>
          </li>
          <li>
          <Link to="/live-independently/help-at-home">Help at home</Link>
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
