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

export default function RequestHomeAssessmentForm() {
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
            <BreadcrumbPage>Request a home assessment</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page heading */}
      <h1 className="text-5xl font-bold text-wf-green">
        Request a home assessment
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-wf-gray">
        Complete this form to request a home assessment from our occupational
        therapy team. We will contact you to arrange a convenient time to visit.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-lg border border-wf-green bg-wf-green-light p-6">
          <h2 className="text-2xl font-bold text-wf-green">
            Thank you for your request
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
            We have received your request for a home assessment. A member of our
            team will contact you within 5 working days to arrange an
            appointment.
          </p>
          <p className="mt-3 text-sm text-wf-gray">
            If your situation is urgent, please call us on{" "}
            <a href="tel:02084963130" className="font-bold text-wf-green">
              020 8496 3130
            </a>
            .
          </p>
          <Link
            to="/live-independently"
            className="mt-4 inline-block text-sm font-semibold text-wf-green hover:underline"
          >
            Return to Live independently
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-wf-dark"
            >
              Full name <span className="text-wf-red">*</span>
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

          {/* Description of needs */}
          <div>
            <label
              htmlFor="needs"
              className="block text-sm font-semibold text-wf-dark"
            >
              Description of needs <span className="text-wf-red">*</span>
            </label>
            <p className="mt-1 text-xs text-wf-gray">
              Please describe the difficulties you are experiencing at home and
              what kind of help you think you need.
            </p>
            <textarea
              id="needs"
              name="needs"
              required
              rows={5}
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
      <section className="mt-10 rounded-lg bg-wf-green-light p-6">
        <h2 className="text-xl font-bold text-wf-pink">Prefer to call?</h2>
        <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          You can also request a home assessment by calling our Adult Social Care
          team.
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
            <Link to="/live-independently/home-adaptations">
              Home adaptations
            </Link>
          </li>
          <li>
            <Link to="/live-independently/equipment-and-aids">
              Equipment and aids
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
  );
}
