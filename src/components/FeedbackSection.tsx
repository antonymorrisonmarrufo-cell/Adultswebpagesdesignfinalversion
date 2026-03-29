import React, { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/components/ui/utils";

interface FeedbackSectionProps {
  pageTitle?: string;
  className?: string;
}

export default function FeedbackSection({
  pageTitle,
  className,
}: FeedbackSectionProps) {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (value: "yes" | "no") => {
    setFeedback(value);
    setSubmitted(true);
  };

  return (
    <section className={cn("border-t border-gray-200 py-8", className)}>
      <div className="mx-auto max-w-5xl px-4">
        {submitted ? (
          <div className="text-center">
            <p className="text-lg font-semibold text-wf-green">
              Thank you for your feedback
            </p>
            <p className="mt-1 text-sm text-wf-gray">
              Your response helps us improve our services.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-lg font-bold text-wf-dark">
              Was this page useful?
            </h2>
            {pageTitle && (
              <p className="mt-1 text-sm text-wf-gray">{pageTitle}</p>
            )}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleFeedback("yes")}
                className={cn(
                  "flex items-center gap-2 rounded-md border-2 px-5 py-2.5 text-sm font-semibold transition-colors",
                  feedback === "yes"
                    ? "border-wf-green bg-wf-green text-white"
                    : "border-wf-green text-wf-green hover:bg-wf-green-light",
                )}
              >
                <ThumbsUp className="h-4 w-4" />
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleFeedback("no")}
                className={cn(
                  "flex items-center gap-2 rounded-md border-2 px-5 py-2.5 text-sm font-semibold transition-colors",
                  feedback === "no"
                    ? "border-wf-pink bg-wf-pink text-white"
                    : "border-wf-pink text-wf-pink hover:bg-wf-pink-light",
                )}
              >
                <ThumbsDown className="h-4 w-4" />
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
