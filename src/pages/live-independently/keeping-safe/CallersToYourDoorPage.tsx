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

export default function CallersToYourDoorPage() {
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
            <BreadcrumbLink asChild>
              <Link to="/live-independently/keeping-safe">Keeping safe</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Callers to your door</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page heading */}
      <h1 className="text-5xl font-bold text-wf-green">
        Dealing with callers at your door
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-wf-gray">
        Bogus callers and rogue traders can be convincing and persistent.
        Knowing how to deal with unexpected callers can help you stay safe at
        home.
      </p>

      {/* Safety tips */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-wf-pink">
          Safety tips for doorstep callers
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-wf-gray">
          <li>
            Always use your door chain or spy hole before opening the door to
            anyone you do not know.
          </li>
          <li>
            Ask to see identification. Genuine callers will not mind waiting
            while you check. If in doubt, close the door and call the
            organisation they claim to be from using a number from your phone
            book or their official website.
          </li>
          <li>
            Never let anyone into your home if you are unsure who they are.
          </li>
          <li>
            Do not agree to have work done on your home by someone who calls
            without an appointment. Legitimate tradespeople will not pressure
            you into immediate decisions.
          </li>
          <li>
            Never hand over cash or your bank card to someone at the door.
          </li>
          <li>
            If someone claims there is an emergency (for example, a water leak),
            call the relevant utility company yourself to check before letting
            anyone in.
          </li>
          <li>
            Consider fitting a door chain, spy hole or video doorbell if you do
            not already have one.
          </li>
        </ul>
      </section>

      {/* No Cold Calling zones */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-wf-pink">
          No Cold Calling zones
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          Waltham Forest has established No Cold Calling zones in parts of the
          borough. In these areas, doorstep selling is discouraged and signs are
          displayed to deter cold callers. If you live in a No Cold Calling zone
          and receive an unwanted visit from a trader, you should report it to
          Trading Standards.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If you would like your street to become a No Cold Calling zone,
          contact the council&apos;s Trading Standards team for more information.
        </p>
      </section>

      {/* Reporting */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-wf-pink">
          Reporting suspicious callers
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If you have been targeted by a bogus caller or rogue trader, report it
          as soon as possible:
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
            <strong>Citizens Advice consumer helpline:</strong> call 0808 223
            1133
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
        <h2 className="text-xl font-bold text-wf-pink">Need advice?</h2>
        <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          If you are concerned about doorstep callers or would like advice on
          keeping safe, contact our Adult Social Care team.
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
            <Link to="/live-independently/keeping-safe/online-email-postal-fraud">
              Online, email and postal fraud
            </Link>
          </li>
          <li>
            <Link to="/live-independently/keeping-safe/fraud-over-the-phone">
              Fraud over the phone
            </Link>
          </li>
          <li>
            <Link to="/live-independently/keeping-safe/fire-safety">
              Fire safety at home
            </Link>
          </li>
          <li>
            <Link to="/live-independently/telecare">Telecare</Link>
          </li>
        </ul>
      </div>

      {/* Last updated */}
      <p className="mt-10 text-xs text-wf-gray">Last updated: March 2026</p>
    </div>
  );
}
