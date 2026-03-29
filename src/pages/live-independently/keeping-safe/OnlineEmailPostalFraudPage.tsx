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

export default function OnlineEmailPostalFraudPage() {
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
          <BreadcrumbPage>Online, email and postal fraud</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">
          Online, email and postal fraud
          </h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          Scammers use emails, websites, social media and postal mail to trick
          people into handing over money or personal information. Learn how to
          recognise scams and protect yourself.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Common scam types */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Common scam types</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-wf-gray">
          <li>
          <strong>Phishing emails:</strong> emails that appear to be from
          banks, HMRC, the NHS or other trusted organisations, asking you to
          click a link and enter personal details.
          </li>
          <li>
          <strong>Fake websites:</strong> websites designed to look like
          genuine retailers or service providers to steal your payment details.
          </li>
          <li>
          <strong>Lottery and prize scams:</strong> letters or emails telling
          you that you have won a prize, but asking you to pay a fee or
          provide bank details to claim it.
          </li>
          <li>
          <strong>Romance scams:</strong> fraudsters building online
          relationships and then asking for money.
          </li>
          <li>
          <strong>Investment scams:</strong> offers of high returns on
          investments that do not exist.
          </li>
          <li>
          <strong>Postal scams:</strong> letters claiming you owe money,
          offering fake products or asking you to call premium-rate phone
          numbers.
          </li>
          </ul>
          </section>

          {/* Prevention */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          How to protect yourself
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-wf-gray">
          <li>
          Never click on links in emails or text messages from unknown
          senders. If an email claims to be from your bank, go to their
          website directly by typing the address into your browser.
          </li>
          <li>
          Look for the padlock symbol in your browser&apos;s address bar when
          shopping online, and check the website address carefully.
          </li>
          <li>
          Never give out personal or financial information by email.
          </li>
          <li>
          Be cautious of offers that seem too good to be true - they usually
          are.
          </li>
          <li>
          Use strong, unique passwords for each online account and enable
          two-factor authentication where possible.
          </li>
          <li>
          Keep your computer and phone software up to date to protect against
          security vulnerabilities.
          </li>
          <li>
          If you receive a suspicious letter, do not respond or call any
          numbers it contains.
          </li>
          </ul>
          </section>

          {/* Reporting */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          How to report fraud
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-wf-gray">
          If you think you have been a victim of fraud or have received a
          suspicious email, letter or message, report it:
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
          <strong>Suspicious emails:</strong> forward to{" "}
          <a href="mailto:report@phishing.gov.uk">report@phishing.gov.uk</a>
          </li>
          <li>
          <strong>Suspicious text messages:</strong> forward to 7726
          </li>
          <li>
          <strong>Royal Mail scam mail:</strong> send to Freepost SCAM MAIL
          (PO Box 797, Exeter EX1 9UN)
          </li>
          </ul>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">Need support?</h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          If you or someone you know has been affected by a scam, contact our
          Adult Social Care team for advice and support.
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
          <Link to="/live-independently/keeping-safe/fraud-over-the-phone">
          Fraud over the phone
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
