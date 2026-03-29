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

export default function FraudOverPhonePage() {
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
          <BreadcrumbLink asChild>
          <Link to="/live-independently/keeping-safe">Keeping safe</Link>
          </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbPage>Fraud over the phone</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">
          Fraud over the phone
          </h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          Phone scams are one of the most common types of fraud. Criminals call
          pretending to be from banks, the police, HMRC or other trusted
          organisations to trick you into giving away money or personal
          information.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Phone scams */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Common phone scams
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-wf-gray">
          <li>
          <strong>Bank fraud calls:</strong> a caller claims to be from your
          bank and says your account has been compromised. They ask you to
          transfer money to a &quot;safe&quot; account or give them your card
          details.
          </li>
          <li>
          <strong>HMRC scams:</strong> a recorded message threatens you with
          arrest unless you pay an outstanding tax bill immediately.
          </li>
          <li>
          <strong>Police impersonation:</strong> a caller claims to be a
          police officer investigating fraud on your account and asks you to
          withdraw cash and hand it to a courier.
          </li>
          <li>
          <strong>Tech support scams:</strong> a caller says your computer has
          a virus and asks you to grant them remote access or pay for
          unnecessary software.
          </li>
          <li>
          <strong>Pension and investment scams:</strong> unsolicited calls
          offering high-return investments or early access to your pension.
          </li>
          </ul>
          </section>

          {/* Call blocking */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Call blocking and protection
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          There are several ways to reduce the number of nuisance and scam calls
          you receive:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-wf-gray">
          <li>
          <strong>Telephone Preference Service (TPS):</strong> register your
          number free of charge at{" "}
          <a
          href="https://www.tpsonline.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          >
          tpsonline.org.uk
          </a>{" "}
          or call 0345 070 0707. This will reduce sales and marketing calls.
          </li>
          <li>
          <strong>Call blocking devices:</strong> devices such as trueCall can
          be fitted to your phone to screen and block unwanted calls. Some are
          available free through the council for eligible residents.
          </li>
          <li>
          <strong>Do not engage:</strong> if you receive a suspicious call,
          hang up immediately. Do not press any buttons or give any
          information.
          </li>
          <li>
          <strong>Wait before calling back:</strong> scammers can keep the
          phone line open after you hang up. Wait five minutes or use a
          different phone before calling your bank or the police.
          </li>
          </ul>
          </section>

          {/* Reporting */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          How to report phone fraud
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If you have received a scam phone call or have lost money to phone
          fraud, report it:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-wf-gray">
          <li>
          <strong>Action Fraud:</strong> call 0300 123 2040 or visit{" "}
          <a
          href="https://www.actionfraud.police.uk"
          target="_blank"
          rel="noopener noreferrer"
          >
          actionfraud.police.uk
          </a>
          </li>
          <li>
          <strong>Your bank:</strong> contact your bank immediately if you
          have shared financial information
          </li>
          <li>
          <strong>Police non-emergency:</strong> call 101
          </li>
          <li>
          <strong>In an emergency:</strong> call 999
          </li>
          </ul>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">Need support?</h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          If you or someone you know has been affected by phone fraud, contact
          our Adult Social Care team for advice.
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
          <Link to="/live-independently/keeping-safe/online-email-postal-fraud">
          Online, email and postal fraud
          </Link>
          </li>
          <li>
          <Link to="/live-independently/keeping-safe/callers-to-your-door">
          Callers to your door
          </Link>
          </li>
          <li>
          <Link to="/live-independently/keeping-safe/further-information">
          Further information on staying safe
          </Link>
          </li>
          <li>
          <Link to="/safeguarding">Safeguarding</Link>
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
