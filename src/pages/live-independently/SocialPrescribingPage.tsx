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

export default function SocialPrescribingPage() {
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
          <BreadcrumbPage>Social prescribing</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">Social prescribing</h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          Social prescribing connects you with activities, groups and services in
          your community that can improve your health and wellbeing. It is a free
          service available to all Waltham Forest residents.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* What is social prescribing */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          What is social prescribing?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Social prescribing is a way of linking people with non-medical sources
          of support in the community. It recognises that health and wellbeing
          are affected by a range of social, emotional and practical factors, not
          just medical conditions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Social prescribing can help if you are feeling lonely or isolated,
          struggling with stress or anxiety, want to be more active, need help
          with housing or money worries, or simply want to try something new and
          meet other people.
          </p>
          </section>

          {/* Link workers */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Link workers</h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Social prescribing link workers are trained professionals who take time
          to understand what matters to you. They will:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Have a conversation with you about your interests, goals and any challenges you face</li>
          <li>Help you identify activities and services that could benefit you</li>
          <li>Connect you with local groups, organisations and community resources</li>
          <li>Support you to attend activities and build confidence</li>
          <li>Follow up with you to check how things are going</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Everything you discuss with your link worker is confidential.
          </p>
          </section>

          {/* Activities available */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Activities and services available
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Social prescribing can connect you with a wide range of activities and
          support, including:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Exercise classes, walking groups and sports sessions</li>
          <li>Arts and creative activities such as painting, singing or gardening</li>
          <li>Volunteer opportunities</li>
          <li>Lunch clubs and social groups</li>
          <li>Support with housing, benefits and debt advice</li>
          <li>Befriending services for people who feel isolated</li>
          <li>Mental health and wellbeing workshops</li>
          <li>Healthy eating and cooking classes</li>
          <li>Digital skills and IT training</li>
          </ul>
          </section>

          {/* How to access */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          How to access social prescribing
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          You can access social prescribing in several ways:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>Ask your GP to refer you to a social prescribing link worker</li>
          <li>Contact our Adult Social Care team directly</li>
          <li>Self-refer by calling the number below</li>
          <li>Ask a family member, carer or other professional to refer you</li>
          </ul>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          Get connected to your community
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          Contact us to find out how social prescribing could help you or
          someone you know.
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
          <Link to="/adult-social-care/live-independently-at-home/falls-prevention-and-reablement">
          Falls prevention
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/homeshare">Homeshare</Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/help-at-home-and-personal-care">Help at home</Link>
          </li>
          <li>
          <Link to="/adult-social-care/mental-health-wellbeing">Mental health</Link>
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
