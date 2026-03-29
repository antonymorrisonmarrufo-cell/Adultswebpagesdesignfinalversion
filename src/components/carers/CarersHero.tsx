import React from "react";
import { cn } from "@/components/ui/utils";

interface CarersHeroProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
}

export default function CarersHero({
  title,
  description,
  ctaLabel,
  ctaHref,
  onCtaClick,
  className,
}: CarersHeroProps) {
  return (
    <section
      className={cn(
        "bg-wf-green text-white py-10 md:py-16",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
          {description}
        </p>
        {ctaLabel && (
          <div className="mt-6">
            {ctaHref ? (
              <a
                href={ctaHref}
                className="inline-block rounded bg-wf-pink px-6 py-3 text-base font-semibold text-white no-underline shadow hover:bg-wf-pink/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wf-green"
              >
                {ctaLabel}
              </a>
            ) : (
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-block rounded bg-wf-pink px-6 py-3 text-base font-semibold text-white shadow hover:bg-wf-pink/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wf-green"
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
