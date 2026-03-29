import React from "react";
import { MessageSquare } from "lucide-react";
import { cn } from "@/components/ui/utils";

interface FeedbackBannerProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
  className?: string;
}

export default function FeedbackBanner({
  title = "Help us improve this page",
  description = "We'd love to hear your feedback on this page. Your comments help us make our services better.",
  ctaLabel = "Give feedback",
  onCtaClick,
  ctaHref,
  className,
}: FeedbackBannerProps) {
  return (
    <section
      className={cn(
        "border-t-4 border-wf-pink bg-wf-pink-light py-8",
        className,
      )}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <MessageSquare className="mt-0.5 h-6 w-6 flex-shrink-0 text-wf-pink" />
          <div>
            <h2 className="text-lg font-bold text-wf-dark">{title}</h2>
            <p className="mt-1 text-sm text-wf-gray">{description}</p>
          </div>
        </div>
        {ctaHref ? (
          <a
            href={ctaHref}
            className="inline-block flex-shrink-0 rounded-md bg-wf-pink px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-sm hover:bg-wf-pink/90 transition-colors"
          >
            {ctaLabel}
          </a>
        ) : (
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-block flex-shrink-0 rounded-md bg-wf-pink px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-wf-pink/90 transition-colors"
          >
            {ctaLabel}
          </button>
        )}
      </div>
    </section>
  );
}
