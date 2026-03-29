import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/components/ui/utils";

export interface RelatedPageItem {
  title: string;
  href: string;
  description?: string;
}

interface RelatedPagesProps {
  title?: string;
  pages: RelatedPageItem[];
  className?: string;
}

export default function RelatedPages({
  title = "Related pages",
  pages,
  className,
}: RelatedPagesProps) {
  if (pages.length === 0) return null;

  return (
    <section className={cn("py-10 md:py-14 bg-wf-gray-light", className)}>
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-2xl font-bold text-wf-green">{title}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {pages.map((page) => (
            <li key={page.href}>
              <Link
                to={page.href}
                className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 no-underline transition-shadow hover:shadow-md hover:border-wf-green"
              >
                <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-wf-pink transition-transform group-hover:translate-x-0.5" />
                <div>
                  <span className="text-base font-semibold text-wf-green group-hover:underline">
                    {page.title}
                  </span>
                  {page.description && (
                    <p className="mt-1 text-sm text-wf-gray">
                      {page.description}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
