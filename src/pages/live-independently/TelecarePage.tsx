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

export default function TelecarePage() {
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
          <BreadcrumbPage>Telecare</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">Telecare</h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          Telecare uses simple technology to help you feel safe and supported at
          home. If something goes wrong, an alarm is triggered and help is sent to
          you quickly.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Personal alarms */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Personal alarms</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          A personal alarm is a small button you wear as a pendant or wristband.
          If you fall or feel unwell, you press the button to alert a 24-hour
          monitoring centre. An operator will speak to you through a base unit
          connected to your phone line and arrange help if needed, whether that
          is contacting a family member, a neighbour or the emergency services.
          </p>
          </section>

          {/* Sensors */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Sensors</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          A range of sensors can be installed in your home to provide additional
          safety. These include:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Smoke and heat detectors linked to the monitoring centre</li>
          <li>Carbon monoxide detectors</li>
          <li>Flood detectors for sinks and baths</li>
          <li>Bed and chair occupancy sensors</li>
          <li>Door sensors to alert if someone leaves the home unexpectedly</li>
          <li>Epilepsy sensors</li>
          <li>Fall detectors that trigger automatically</li>
          </ul>
          </section>

          {/* How telecare works */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">How telecare works</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Telecare equipment is connected to a 24-hour monitoring centre. When an
          alarm is triggered, the monitoring centre will:
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-wf-gray">
          <li>Try to speak with you through the base unit</li>
          <li>Contact your named responders (family, friends or neighbours)</li>
          <li>Send a mobile response officer if no responder is available</li>
          <li>Call the emergency services if the situation requires it</li>
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          A telecare technician will visit your home to install the equipment,
          show you how it works and test it with you.
          </p>
          </section>

          {/* Eligibility */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Eligibility</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Telecare is available to Waltham Forest residents who:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Are aged 18 or over</li>
          <li>Have a disability, long-term health condition or are at risk of falling</li>
          <li>Live alone or spend periods of time alone at home</li>
          <li>Would benefit from additional reassurance and safety monitoring</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          You do not need to have a care package or social worker to access
          telecare. Anyone can refer themselves or be referred by a family
          member, carer or professional.
          </p>
          </section>

          {/* Costs */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Costs</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          There is a weekly charge for the telecare service which covers
          equipment, installation, monitoring and maintenance. The current
          charges are:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Basic personal alarm service: from &pound;4.50 per week</li>
          <li>Enhanced telecare package with sensors: from &pound;7.00 per week</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If you receive certain benefits, you may be eligible for a reduction in
          charges. Contact us for more information about costs.
          </p>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">Request telecare</h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          To request a telecare service for yourself or someone else, complete
          our online form or call us.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
          to="/adult-social-care/live-independently-at-home/request-telecare-or-community-alarm"
          className="inline-block rounded-md bg-[#bf3688] px-5 py-2.5 text-center text-sm font-semibold text-white no-underline hover:bg-[#a02d73]"
          >
          Request telecare online
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
          <Link to="/adult-social-care/live-independently-at-home/falls-prevention-and-reablement">
          Falls prevention
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home">Keeping safe</Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/equipment-and-assistive-technology">
          Equipment and aids
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/paying-for-care">Paying for care</Link>
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
