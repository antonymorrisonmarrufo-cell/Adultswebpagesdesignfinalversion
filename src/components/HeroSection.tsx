import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/components/ui/utils";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
}

export default function HeroSection({
  title,
  description,
  ctaLabel,
  ctaHref,
  onCtaClick,
  breadcrumbs,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn("bg-wf-green text-white py-10 md:py-16", className)}
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/80">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link
                      to={crumb.href}
                      className="text-white/80 no-underline hover:text-white hover:underline"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90">
          {description}
        </p>
        {ctaLabel && (
          <div className="mt-6">
            {ctaHref ? (
              <Link
                to={ctaHref}
                className="inline-block rounded-md bg-wf-pink px-6 py-3 text-base font-semibold text-white no-underline shadow-sm hover:bg-wf-pink/90 transition-colors"
              >
                {ctaLabel}
              </Link>
            ) : (
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-block rounded-md bg-wf-pink px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-wf-pink/90 transition-colors"
              >
                {ctaLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
