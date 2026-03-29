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

export default function HomeAdaptationsPage() {
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
          <BreadcrumbPage>Home adaptations</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-wf-green">
          Home adaptations and modifications
          </h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          If you have a disability or find it difficult to move around your home,
          we may be able to help with adaptations to make your home safer and more
          accessible.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Grab rails and handrails */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Grab rails and handrails
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Grab rails can be fitted in key areas of your home such as bathrooms,
          toilets and stairways to help you move around safely. Handrails can be
          installed along corridors and at entrance steps. A simple assessment is
          usually all that is needed, and many grab rails can be fitted free of
          charge.
          </p>
          </section>

          {/* Ramps and step modifications */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Ramps and step modifications
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If steps at your front or back door make it difficult to get in and out
          of your home, a ramp may be the solution. We can assess your needs and
          arrange for a ramp to be installed. In some cases, existing steps can
          be modified with half-steps or handrails to make them easier to use.
          </p>
          </section>

          {/* Stairlifts */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Stairlifts</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If you find it difficult or impossible to use the stairs in your home,
          a stairlift may be recommended following an occupational therapy
          assessment. Stairlifts can be fitted on straight or curved staircases.
          Funding may be available through a Disabled Facilities Grant.
          </p>
          </section>

          {/* Bathroom adaptations */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Bathroom adaptations
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Bathrooms are one of the most common areas where adaptations are
          needed. We can help with level-access showers, walk-in baths, shower
          seats, raised toilet seats and other modifications to help you wash and
          use the toilet safely and independently.
          </p>
          </section>

          {/* Disabled Facilities Grant */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Disabled Facilities Grant
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          The Disabled Facilities Grant (DFG) is a means-tested grant from the
          council that can help pay for essential adaptations to your home. You
          can apply if you are a homeowner, private tenant, housing association
          tenant or council tenant. The maximum grant is currently up to
          &pound;30,000.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          To apply for a DFG you will need an occupational therapy assessment
          that confirms the adaptations are necessary and appropriate for your
          needs.
          </p>
          </section>

          {/* How to get an assessment */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          How to request a home assessment
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          To find out what adaptations might help you, the first step is to
          request an assessment from our occupational therapy team.
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
          <Link to="/live-independently/equipment-and-aids">
          Equipment and aids
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
          <Link to="/paying-for-care">Paying for care</Link>
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
