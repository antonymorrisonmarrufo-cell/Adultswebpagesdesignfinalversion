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

export default function RequestTelecareForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
            <BreadcrumbPage>Request telecare</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page heading */}
      <h1 className="text-5xl font-bold text-wf-green">
        Request telecare service
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-wf-gray">
        Complete this form to request a telecare service for yourself or someone
        else. We will contact you to discuss your needs and arrange installation.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-lg border border-wf-green bg-[#d7f8ff] p-6">
          <h2 className="text-2xl font-bold text-wf-green">
            Thank you for your request
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
            We have received your telecare request. A member of our team will
            contact you within 5 working days to discuss the service and arrange
            an installation visit.
          </p>
          <p className="mt-3 text-sm text-wf-gray">
            If your situation is urgent, please call us on{" "}
            <a href="tel:02084963130" className="font-bold text-wf-green">
              020 8496 3130
            </a>
            .
          </p>
          <Link
            to="/live-independently/telecare"
            className="mt-4 inline-block text-sm font-semibold text-wf-green hover:underline"
          >
            Return to Telecare
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Who is the request for */}
          <fieldset>
            <legend className="text-sm font-semibold text-wf-dark">
              Who is this request for? <span className="text-wf-red">*</span>
            </legend>
            <div className="mt-2 space-y-2">
              <label className="flex items-center gap-2 text-sm text-wf-gray">
                <input
                  type="radio"
                  name="requestFor"
                  value="myself"
                  required
                  className="h-4 w-4 border-gray-300 text-wf-green focus:ring-wf-green"
                />
                Myself
              </label>
              <label className="flex items-center gap-2 text-sm text-wf-gray">
                <input
                  type="radio"
                  name="requestFor"
                  value="someone-else"
                  className="h-4 w-4 border-gray-300 text-wf-green focus:ring-wf-green"
                />
                Someone else
              </label>
            </div>
          </fieldset>

          {/* Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-wf-dark"
            >
              Full name of the person who needs telecare{" "}
              <span className="text-wf-red">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-wf-dark"
            >
              Home address <span className="text-wf-red">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-wf-dark"
            >
              Phone number <span className="text-wf-red">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-wf-dark"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
            />
          </div>

          {/* Reason */}
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-semibold text-wf-dark"
            >
              Why do you need telecare? <span className="text-wf-red">*</span>
            </label>
            <p className="mt-1 text-xs text-wf-gray">
              Please describe any health conditions, disabilities or concerns
              that telecare could help with.
            </p>
            <textarea
              id="reason"
              name="reason"
              required
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
            />
          </div>

          {/* Emergency contacts */}
          <div>
            <label
              htmlFor="emergencyContact"
              className="block text-sm font-semibold text-wf-dark"
            >
              Emergency contact name and phone number
            </label>
            <p className="mt-1 text-xs text-wf-gray">
              A named person who can be contacted if the alarm is triggered.
            </p>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="rounded-md bg-wf-green px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-wf-green/90 focus:outline-none focus:ring-2 focus:ring-wf-green focus:ring-offset-2"
            >
              Submit request
            </button>
          </div>
        </form>
      )}

      {/* Alternative contact */}
      <section className="mt-10 rounded-lg bg-[#d7f8ff] p-6">
        <h2 className="text-xl font-bold text-wf-pink">Prefer to call?</h2>
        <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          You can also request telecare by calling our Adult Social Care team.
        </p>
        <p className="mt-3 text-sm text-wf-dark">
          <span className="font-semibold">Phone:</span>{" "}
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
            <Link to="/live-independently/telecare">
              About telecare
            </Link>
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
  );
}
