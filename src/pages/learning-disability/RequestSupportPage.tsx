import { Link } from "react-router-dom";
import { useState } from "react";

export default function RequestSupportPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="mx-auto max-w-5xl px-4 pt-6 pb-2">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            <li className="flex items-center gap-1">
              <Link to="/" className="text-wf-blue underline hover:text-wf-green">
                Home
              </Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li className="flex items-center gap-1">
              <Link
                to="/adult-social-care"
                className="text-wf-blue underline hover:text-wf-green"
              >
                Adult Social Care
              </Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li className="flex items-center gap-1">
              <Link
                to="/adult-social-care/learning-disability-support"
                className="text-wf-blue underline hover:text-wf-green"
              >
                Learning disability support
              </Link>
              <span aria-hidden="true" className="mx-1 text-wf-gray/50">/</span>
            </li>
            <li>
              <span className="font-medium text-wf-dark">Request support</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl px-4 pb-8">
        <h1 className="text-5xl font-bold text-wf-green leading-tight">
          Request support
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-wf-gray leading-relaxed">
          Use this form to request learning disability support for yourself or someone
          you care for. A member of our team will contact you within five working days.
        </p>
      </div>

      {/* Form or confirmation */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        {submitted ? (
          <div className="rounded-lg border-l-4 border-wf-green bg-wf-green-light p-6">
            <h2 className="text-xl font-bold text-wf-pink">
              Thank you for your request
            </h2>
            <p className="mt-2 text-sm text-wf-dark leading-relaxed">
              We have received your request for support. A member of our learning
              disability team will contact you within five working days.
            </p>
            <p className="mt-3 text-sm text-wf-dark leading-relaxed">
              If your situation is urgent, please call us on{" "}
              <a href="tel:02084963130" className="text-wf-blue underline">
                020 8496 3130
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            {/* About you */}
            <fieldset className="space-y-4">
              <legend className="text-2xl font-bold text-wf-pink">About you</legend>

              <div>
                <label htmlFor="requestor-type" className="block text-sm font-medium text-wf-dark">
                  I am requesting support for
                </label>
                <select
                  id="requestor-type"
                  name="requestor-type"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
                >
                  <option value="">Please select</option>
                  <option value="myself">Myself</option>
                  <option value="someone-else">Someone I care for</option>
                  <option value="professional">Someone I support as a professional</option>
                </select>
              </div>

              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-wf-dark">
                  Full name of the person who needs support
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-wf-dark">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-wf-dark">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
                />
              </div>
            </fieldset>

            {/* Contact details */}
            <fieldset className="space-y-4">
              <legend className="text-2xl font-bold text-wf-pink">Contact details</legend>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-wf-dark">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-wf-dark">
                  Email address (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
                />
              </div>
            </fieldset>

            {/* Support needed */}
            <fieldset className="space-y-4">
              <legend className="text-2xl font-bold text-wf-pink">
                About the support needed
              </legend>

              <div>
                <label htmlFor="support-details" className="block text-sm font-medium text-wf-dark">
                  Please describe the support you are looking for
                </label>
                <textarea
                  id="support-details"
                  name="support-details"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
                />
              </div>

              <div>
                <label htmlFor="gp-details" className="block text-sm font-medium text-wf-dark">
                  GP name and surgery (optional)
                </label>
                <input
                  type="text"
                  id="gp-details"
                  name="gp-details"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-wf-green focus:outline-none focus:ring-1 focus:ring-wf-green"
                />
              </div>
            </fieldset>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-wf-green focus:ring-wf-green"
              />
              <label htmlFor="consent" className="text-sm text-wf-dark leading-relaxed">
                I confirm that the person named in this form has given their consent for
                this request to be made, or I am the person requesting support for myself.
              </label>
            </div>

            <button
              type="submit"
              className="rounded-md bg-wf-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-wf-green/90 focus:outline-none focus:ring-2 focus:ring-wf-green focus:ring-offset-2"
            >
              Submit request
            </button>
          </form>
        )}
      </div>

      {/* Related links */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-bold text-wf-pink">Related pages</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/adult-social-care/learning-disability-support/ask-for-support"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Ask for support
              </Link>
            </li>
            <li>
              <Link
                to="/adult-social-care/learning-disability-support/professional-referral"
                className="text-sm text-wf-blue underline hover:text-wf-green"
              >
                Professional referral
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Last updated */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <p className="text-xs text-wf-gray">Last updated: March 2026</p>
      </div>
    </div>
  );
}
