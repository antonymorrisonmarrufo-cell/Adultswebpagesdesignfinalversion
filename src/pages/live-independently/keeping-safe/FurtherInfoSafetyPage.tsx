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

const contacts = [
  {
    name: "Action Fraud",
    description:
      "The UK's national reporting centre for fraud and cybercrime.",
    phone: "0300 123 2040",
    website: "https://www.actionfraud.police.uk",
  },
  {
    name: "Citizens Advice",
    description:
      "Free, confidential advice on consumer issues, scams and your rights.",
    phone: "0808 223 1133",
    website: "https://www.citizensadvice.org.uk",
  },
  {
    name: "Age UK Waltham Forest",
    description:
      "Support and advice for older people in the borough, including scam awareness.",
    phone: "020 8558 5512",
    website: "https://www.ageuk.org.uk/walthamforest",
  },
  {
    name: "London Fire Brigade",
    description:
      "Free home fire safety visits and fire prevention advice.",
    phone: "0800 028 4428",
    website: "https://www.london-fire.gov.uk",
  },
  {
    name: "Victim Support",
    description:
      "Free, confidential support for victims of crime, including fraud.",
    phone: "0808 168 9111",
    website: "https://www.victimsupport.org.uk",
  },
  {
    name: "Trading Standards",
    description:
      "Report rogue traders, scams and unfair trading practices.",
    phone: "0808 223 1133",
    website: "https://www.citizensadvice.org.uk/consumer",
  },
];

export default function FurtherInfoSafetyPage() {
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
          <BreadcrumbPage>Further information</BreadcrumbPage>
          </BreadcrumbItem>
          </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl font-bold text-[#231F20]">
          Further information on staying safe
          </h1>
          
          <p className="mt-4 text-lg leading-relaxed text-wf-gray">
          There are many organisations that can help you stay safe at home and in
          the community. Below is a list of useful contacts and resources.
          </p>
        </div>
      </div>

      {/* Gray section: all content below */}
      <div className="bg-[#f3f2f1]">
        <div className="max-w-5xl mx-auto px-4 py-10">

          {/* Useful contacts */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">Useful contacts</h2>
          <div className="mt-4 space-y-4">
          {contacts.map((contact) => (
          <div
          key={contact.name}
          className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
          <h3 className="text-lg font-bold text-[#231F20]">
          {contact.name}
          </h3>
          <p className="mt-1 text-sm text-wf-gray">
          {contact.description}
          </p>
          <div className="mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:gap-4">
          <a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="font-semibold text-wf-green"
          >
          {contact.phone}
          </a>
          <a
          href={contact.website}
          target="_blank"
          rel="noopener noreferrer"
          >
          {contact.website.replace("https://www.", "")}
          </a>
          </div>
          </div>
          ))}
          </div>
          </section>

          {/* Additional resources */}
          <section className="mt-8">
          <h2 className="text-2xl font-bold text-wf-pink">
          Additional resources
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-wf-gray">
          <li>
          <a
          href="https://www.met.police.uk/cp/crime-prevention"
          target="_blank"
          rel="noopener noreferrer"
          >
          Metropolitan Police crime prevention advice
          </a>
          </li>
          <li>
          <a
          href="https://www.thinkjessica.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          Think Jessica
          </a>{" "}
          - protecting vulnerable people from scams
          </li>
          <li>
          <a
          href="https://www.friendsagainstscams.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          >
          Friends Against Scams
          </a>{" "}
          - free online scam awareness training
          </li>
          <li>
          <a
          href="https://www.ncsc.gov.uk/cyberaware"
          target="_blank"
          rel="noopener noreferrer"
          >
          National Cyber Security Centre
          </a>{" "}
          - advice on staying secure online
          </li>
          </ul>
          </section>

          {/* CTA block */}
          <section className="mt-8 rounded-lg bg-[#d7f8ff] p-6">
          <h2 className="text-xl font-bold text-wf-pink">
          Contact Adult Social Care
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-wf-gray">
          If you are worried about your safety or the safety of someone you
          know, get in touch with our team.
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
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home/callers-to-your-door">
          Callers to your door
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home/online-email-or-postal-fraud">
          Online, email and postal fraud
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home/fraud-over-the-phone">
          Fraud over the phone
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/live-independently-at-home/keeping-safe-at-home/fire-safety-advice-for-your-home">
          Fire safety at home
          </Link>
          </li>
          <li>
          <Link to="/adult-social-care/protecting-adults-at-risk">Safeguarding</Link>
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
