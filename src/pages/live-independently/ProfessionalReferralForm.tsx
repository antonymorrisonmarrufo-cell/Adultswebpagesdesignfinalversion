import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function ProfessionalReferralForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
          <BreadcrumbPage>Professional referral</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">
          Professional referral for live independently services
          </h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          This form is for health and social care professionals to make a referral
          for live independently services on behalf of a Waltham Forest resident.
          This includes referrals for home adaptations, equipment, telecare, home
          care and other support.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {submitted ? (
          <div className="mt-8 rounded-lg border border-wf-green bg-[#d7f8ff] p-6">
          <h2 className="text-2xl font-bold text-[#231F20]">
          Referral submitted
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Thank you for your referral. Our team will review it and contact the
          individual within 5 working days. We may contact you for additional
          information if needed.
          </p>
          <p className="mt-3 text-sm text-wf-gray">
          For urgent referrals, please call{" "}
          <a href="tel:02084963130" className="font-bold text-[#231F20]">
          020 8496 3130
          </a>
          .
          </p>
          <Link
          to="/adult-social-care/live-independently-at-home"
          className="mt-4 inline-block text-sm font-semibold text-wf-green hover:underline"
          >
          Return to Live independently
          </Link>
          </div>
          ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          {/* Section: About the professional */}
          <fieldset className="space-y-6">
          <legend className="text-lg font-bold text-wf-pink">
          About you (the referring professional)
          </legend>

          <div>
          <label
          htmlFor="profName"
          className="block text-sm font-semibold text-wf-dark"
          >
          Your full name <span className="text-wf-red">*</span>
          </label>
          <input
          type="text"
          id="profName"
          name="profName"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>

          <div>
          <label
          htmlFor="profRole"
          className="block text-sm font-semibold text-wf-dark"
          >
          Job title / role <span className="text-wf-red">*</span>
          </label>
          <input
          type="text"
          id="profRole"
          name="profRole"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>

          <div>
          <label
          htmlFor="profOrg"
          className="block text-sm font-semibold text-wf-dark"
          >
          Organisation <span className="text-wf-red">*</span>
          </label>
          <input
          type="text"
          id="profOrg"
          name="profOrg"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>

          <div>
          <label
          htmlFor="profPhone"
          className="block text-sm font-semibold text-wf-dark"
          >
          Your phone number <span className="text-wf-red">*</span>
          </label>
          <input
          type="tel"
          id="profPhone"
          name="profPhone"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>

          <div>
          <label
          htmlFor="profEmail"
          className="block text-sm font-semibold text-wf-dark"
          >
          Your email address <span className="text-wf-red">*</span>
          </label>
          <input
          type="email"
          id="profEmail"
          name="profEmail"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>
          </fieldset>

          {/* Section: About the individual */}
          <fieldset className="space-y-6">
          <legend className="text-lg font-bold text-wf-pink">
          About the person being referred
          </legend>

          <div>
          <label
          htmlFor="clientName"
          className="block text-sm font-semibold text-wf-dark"
          >
          Full name <span className="text-wf-red">*</span>
          </label>
          <input
          type="text"
          id="clientName"
          name="clientName"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>

          <div>
          <label
          htmlFor="clientDob"
          className="block text-sm font-semibold text-wf-dark"
          >
          Date of birth <span className="text-wf-red">*</span>
          </label>
          <input
          type="date"
          id="clientDob"
          name="clientDob"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>

          <div>
          <label
          htmlFor="clientAddress"
          className="block text-sm font-semibold text-wf-dark"
          >
          Home address <span className="text-wf-red">*</span>
          </label>
          <textarea
          id="clientAddress"
          name="clientAddress"
          required
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>

          <div>
          <label
          htmlFor="clientPhone"
          className="block text-sm font-semibold text-wf-dark"
          >
          Phone number <span className="text-wf-red">*</span>
          </label>
          <input
          type="tel"
          id="clientPhone"
          name="clientPhone"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>
          </fieldset>

          {/* Section: Referral details */}
          <fieldset className="space-y-6">
          <legend className="text-lg font-bold text-wf-pink">
          Referral details
          </legend>

          <div>
          <label
          htmlFor="serviceType"
          className="block text-sm font-semibold text-wf-dark"
          >
          Service required <span className="text-wf-red">*</span>
          </label>
          <select
          id="serviceType"
          name="serviceType"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          >
          <option value="">Select a service</option>
          <option value="home-adaptations">Home adaptations</option>
          <option value="equipment">Equipment and aids</option>
          <option value="help-at-home">Help at home</option>
          <option value="telecare">Telecare</option>
          <option value="falls-prevention">Falls prevention</option>
          <option value="reablement">Reablement</option>
          <option value="social-prescribing">Social prescribing</option>
          <option value="other">Other</option>
          </select>
          </div>

          <div>
          <label
          htmlFor="referralReason"
          className="block text-sm font-semibold text-wf-dark"
          >
          Reason for referral <span className="text-wf-red">*</span>
          </label>
          <p className="mt-1 text-xs text-wf-gray">
          Please describe the individual&apos;s needs, current situation
          and the support you believe would benefit them.
          </p>
          <textarea
          id="referralReason"
          name="referralReason"
          required
          rows={5}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          />
          </div>

          <div>
          <label
          htmlFor="urgency"
          className="block text-sm font-semibold text-wf-dark"
          >
          Urgency
          </label>
          <select
          id="urgency"
          name="urgency"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
          >
          <option value="routine">Routine</option>
          <option value="urgent">Urgent (within 48 hours)</option>
          <option value="emergency">
          Emergency (same day - please also call us)
          </option>
          </select>
          </div>

          {/* Consent */}
          <div>
          <label className="flex items-start gap-2 text-sm text-wf-gray">
          <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-wf-green focus:ring-wf-green"
          />
          <span>
          I confirm that the individual (or their representative) has
          given consent for this referral to be made.{" "}
          <span className="text-wf-red">*</span>
          </span>
          </label>
          </div>
          </fieldset>

          {/* Submit */}
          <div>
          <button
          type="submit"
          className="rounded-md bg-[#bf3688] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#a02d73] focus:outline-none focus:ring-2 focus:ring-[#bf3688] focus:ring-offset-2"
          >
          Submit referral
          </button>
          </div>
          </form>
          )}

          {/* Alternative contact */}
          <section className="mt-10 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          Urgent referrals
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          For urgent or emergency referrals, please call our Adult Social Care
          team directly.
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
          <Link to="/adult-social-care/live-independently-at-home">Live independently</Link>
          </li>
          <li>
          <Link to="/adult-social-care/information-for-professionals">
          Information for professionals
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/how-to-get-support">How to get support</Link>
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
