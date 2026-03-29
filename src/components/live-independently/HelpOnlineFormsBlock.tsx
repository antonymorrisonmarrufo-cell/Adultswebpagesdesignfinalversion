import React from "react";
import { cn } from "@/components/ui/utils";

interface FormLink {
  label: string;
  href: string;
  description?: string;
}

interface HelpOnlineFormsBlockProps {
  title?: string;
  description?: string;
  forms: FormLink[];
  phoneNumber?: string;
  emailAddress?: string;
  className?: string;
}

export default function HelpOnlineFormsBlock({
  title = "Get help to live independently",
  description = "Use our online forms to request support or make a referral.",
  forms,
  phoneNumber = "020 8496 3130",
  emailAddress,
  className,
}: HelpOnlineFormsBlockProps) {
  return (
    <section
      className={cn(
        "rounded-lg bg-wf-green-light p-6 md:p-8",
        className,
      )}
    >
      <h2 className="text-xl font-bold text-wf-green md:text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-wf-gray">{description}</p>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2" role="list">
        {forms.map((form) => (
          <li key={form.href}>
            <a
              href={form.href}
              className="group flex h-full flex-col rounded-md border border-wf-green/20 bg-white p-4 no-underline shadow-sm transition-shadow hover:shadow-md hover:border-wf-green/40"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex-shrink-0 text-wf-green"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-wf-green group-hover:underline">
                    {form.label}
                  </span>
                  {form.description && (
                    <p className="mt-0.5 text-xs text-wf-gray">
                      {form.description}
                    </p>
                  )}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-3 rounded-md bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-wf-dark">
          <span className="font-semibold">Need help?</span> Our team is here to
          support you.
        </p>
        <div className="flex flex-col gap-1 text-sm sm:items-end">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="font-bold text-wf-green"
          >
            {phoneNumber}
          </a>
          {emailAddress && (
            <a
              href={`mailto:${emailAddress}`}
              className="text-wf-blue"
            >
              {emailAddress}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
