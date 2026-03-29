import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const footerSections = [
  {
    title: "Support & Services",
    links: [
      { label: "How to get support", href: "/how-to-get-support" },
      { label: "Being a carer", href: "/carers" },
      { label: "Live independently", href: "/live-independently" },
      { label: "Paying for care", href: "/paying-for-care" },
      { label: "Mental health & wellbeing", href: "/mental-health" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "How adult social care works", href: "/how-adult-social-care-works" },
      { label: "Understand your rights", href: "/understand-your-rights" },
      { label: "Our policies", href: "/our-policies" },
      { label: "Information for professionals", href: "/information-for-professionals" },
      { label: "Complaints & compliments", href: "/complaints-compliments" },
    ],
  },
  {
    title: "Conditions & Disabilities",
    links: [
      { label: "Dementia", href: "/dementia" },
      { label: "Learning disability", href: "/learning-disability" },
      { label: "Autism", href: "/autism" },
      { label: "Physical disabilities", href: "/physical-disabilities" },
      { label: "Safeguarding", href: "/safeguarding" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-wf-dark text-white">
      {/* Contact bar */}
      <div className="border-b border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 py-5">
          <h2 className="text-lg font-bold">Contact us</h2>
          <a
            href="tel:02084963130"
            className="flex items-center gap-2 text-white no-underline hover:text-wf-yellow"
          >
            <Phone className="h-4 w-4" />
            020 8496 3130
          </a>
          <a
            href="mailto:socialcaredirect@walthamforest.gov.uk"
            className="flex items-center gap-2 text-white no-underline hover:text-wf-yellow"
          >
            <Mail className="h-4 w-4" />
            socialcaredirect@walthamforest.gov.uk
          </a>
          <span className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-4 w-4" />
            Monday to Friday, 9am to 5pm
          </span>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-300 no-underline hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} London Borough of Waltham Forest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
