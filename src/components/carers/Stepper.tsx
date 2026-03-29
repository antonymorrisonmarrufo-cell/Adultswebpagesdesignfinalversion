import React from "react";
import { cn } from "@/components/ui/utils";

interface Step {
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  activeStep?: number;
  className?: string;
}

export default function Stepper({
  steps,
  activeStep,
  className,
}: StepperProps) {
  return (
    <ol className={cn("space-y-0", className)} aria-label="Steps">
      {steps.map((step, index) => {
        const isActive = activeStep === index;
        const isCompleted = activeStep !== undefined && index < activeStep;
        const isLast = index === steps.length - 1;

        return (
          <li key={index} className="relative flex gap-4">
            {/* Vertical connector line */}
            {!isLast && (
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-4 top-9 h-[calc(100%-1rem)] w-0.5 -translate-x-1/2",
                  isCompleted ? "bg-wf-green" : "bg-wf-gray-light",
                )}
              />
            )}

            {/* Step number circle */}
            <span
              aria-hidden="true"
              className={cn(
                "relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold",
                isCompleted
                  ? "bg-wf-green text-white"
                  : isActive
                    ? "border-2 border-wf-green bg-white text-wf-green"
                    : "border-2 border-wf-gray-light bg-white text-wf-gray",
              )}
            >
              {isCompleted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                index + 1
              )}
            </span>

            {/* Step content */}
            <div className={cn("pb-6", isLast && "pb-0")}>
              <h3
                className={cn(
                  "text-base font-bold leading-8",
                  isActive ? "text-wf-green" : isCompleted ? "text-wf-dark" : "text-wf-gray",
                )}
              >
                {step.title}
              </h3>
              {step.description && (
                <p className="mt-1 text-sm leading-relaxed text-wf-gray">
                  {step.description}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
