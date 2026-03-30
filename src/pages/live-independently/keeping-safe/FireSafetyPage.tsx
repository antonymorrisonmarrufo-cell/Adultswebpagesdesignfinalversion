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

export default function FireSafetyPage() {
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
          <BreadcrumbLink asChild>
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home">Keeping safe</Link>
          </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbPage>Fire safety at home</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">
          Fire safety at home
          </h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          Fires in the home can be devastating, but most are preventable. Find out
          how to protect yourself and your household with free fire safety visits,
          smoke alarms and a fire escape plan.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Free fire safety visits */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Free fire safety visits
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          The London Fire Brigade offers free home fire safety visits to all
          Waltham Forest residents. During a visit, a firefighter will:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Check your smoke alarms and fit free ones if needed</li>
          <li>Identify fire risks in your home</li>
          <li>Help you create a fire escape plan</li>
          <li>Give advice on cooking safely and electrical safety</li>
          <li>
          Provide specialist advice if you have mobility issues or other
          needs
          </li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          To book a free visit, call the London Fire Brigade on{" "}
          <strong>0800 028 4428</strong> or visit{" "}
          <a
          href="https://www.london-fire.gov.uk/safety/the-home"
          target="_blank"
          rel="noopener noreferrer"
          >
          london-fire.gov.uk
          </a>
          .
          </p>
          </section>

          {/* Smoke alarms */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Smoke alarms</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Working smoke alarms save lives. Make sure you have at least one on
          every level of your home. Follow these guidelines:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Test your smoke alarms at least once a month by pressing the test button</li>
          <li>Replace batteries every year, or when the alarm chirps</li>
          <li>Replace the entire alarm unit every 10 years</li>
          <li>Never remove batteries or disconnect a smoke alarm because of false alarms from cooking - move it further from the kitchen instead</li>
          <li>If you are deaf or hard of hearing, ask about specialist alarms with flashing lights or vibrating pads</li>
          </ul>
          </section>

          {/* Fire escape plans */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Fire escape plans
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Having a plan means everyone in your household knows what to do if
          there is a fire. Your plan should include:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>The best escape route from each room</li>
          <li>A second route in case the first is blocked</li>
          <li>Where to keep door and window keys so they are easy to find in the dark</li>
          <li>A meeting point outside where everyone gathers</li>
          <li>How to call 999 once you are safely outside</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If you have mobility difficulties and cannot escape quickly, close the
          door of the room you are in, go to the window and call 999. The fire
          service will prioritise reaching you.
          </p>
          </section>

          {/* Prevention tips */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Fire prevention tips
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Never leave cooking unattended</li>
          <li>Keep tea towels, cloths and clothing away from the cooker</li>
          <li>Do not overload electrical sockets</li>
          <li>Keep candles, matches and lighters away from children and always extinguish candles before leaving a room</li>
          <li>Do not smoke in bed</li>
          <li>Close internal doors at night to slow the spread of fire</li>
          <li>Keep escape routes clear of clutter</li>
          </ul>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          Book a free fire safety visit
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          Call the London Fire Brigade on{" "}
          <a
          href="tel:08000284428"
          className="font-bold text-[#231F20] no-underline hover:underline"
          >
          0800 028 4428
          </a>{" "}
          to arrange a free home fire safety visit.
          </p>
          <p className="mt-2 text-sm text-wf-dark">
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
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home/callers-to-your-door">
          Callers to your door
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/telecare-and-community-alarm">Telecare</Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/home-adaptations-and-occupational-therapy">
          Home adaptations
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home/further-information-about-keeping-your-home-safe">
          Further information on staying safe
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
