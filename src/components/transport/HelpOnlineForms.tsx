import React from "react";
import { cn } from "@/components/ui/utils";

interface FormLink {
  label: string;
  href: string;
  description?: string;
}

interface HelpOnlineFormsProps {
  title?: string;
  description?: string;
  forms: FormLink[];
  phoneNumber?: string;
  className?: string;
}

export default function HelpOnlineForms({
  title = "Get help with transport",
  description = "Fill out one of our online forms or contact us directly.",
  forms,
  phoneNumber = "020 8496 3130",
  className,
}: HelpOnlineFormsProps) {
  return (
    <section
      className={cn("rounded-lg border border-wf-gray-light bg-white p-6 md:p-8", className)}
    >
      <h2 className="text-xl font-bold text-wf-pink md:text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-wf-gray">{description}</p>

      <div className="mt-5 space-y-3">
        {forms.map((form) => (
          <a
            key={form.href}
            href={form.href}
            className="group flex items-start gap-3 rounded-md border border-wf-gray-light p-4 no-underline transition-colors hover:border-wf-pink/40 hover:bg-wf-pink-light/50"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex-shrink-0 text-wf-pink"
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
            <span
              aria-hidden="true"
              className="flex-shrink-0 self-center text-wf-pink opacity-0 transition-opacity group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-6 rounded-md bg-wf-green-light p-4">
        <p className="text-sm text-wf-dark">
          <span className="font-semibold">Prefer to speak to someone?</span>{" "}
          Call us on{" "}
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="font-bold text-wf-green"
          >
            {phoneNumber}
          </a>
        </p>
      </div>
    </section>
  );
}
