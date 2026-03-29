import React from "react";
import { cn } from "@/components/ui/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface CarersHeaderProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  className?: string;
}

export default function CarersHeader({
  breadcrumbs,
  title,
  className,
}: CarersHeaderProps) {
  return (
    <header className={cn("border-b border-wf-gray-light bg-white", className)}>
      <div className="mx-auto max-w-5xl px-4 py-4">
        <nav aria-label="Breadcrumb" className="mb-2">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-wf-gray">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <span aria-hidden="true" className="mx-1 text-wf-gray/50">
                    /
                  </span>
                )}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="text-wf-blue underline hover:text-wf-green"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="font-medium text-wf-dark">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-2xl font-bold text-wf-green md:text-3xl">
          {title}
        </h1>
      </div>
    </header>
  );
}
