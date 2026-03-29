import React from "react";
import { cn } from "@/components/ui/utils";

interface CalloutProps {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  variant?: "green" | "pink";
  className?: string;
}

const variantStyles = {
  green: {
    container: "border-wf-green bg-wf-green-light",
    title: "text-wf-green",
    icon: "text-wf-green",
  },
  pink: {
    container: "border-wf-pink bg-wf-pink-light",
    title: "text-wf-pink",
    icon: "text-wf-pink",
  },
};

export default function Callout({
  icon,
  title,
  children,
  variant = "green",
  className,
}: CalloutProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "rounded-lg border-l-4 p-5",
        styles.container,
        className,
      )}
      role="note"
    >
      <div className="flex gap-3">
        {icon && (
          <span
            className={cn(
              "flex-shrink-0 mt-0.5 [&>svg]:h-6 [&>svg]:w-6",
              styles.icon,
            )}
          >
            {icon}
          </span>
        )}
        <div className="flex-1">
          <h3 className={cn("text-lg font-bold mb-1", styles.title)}>
            {title}
          </h3>
          <div className="text-wf-dark text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
