import React from "react";
import { cn } from "@/components/ui/utils";

interface ChipProps {
  label: string;
  icon?: React.ReactNode;
  variant?: "green" | "pink" | "gray";
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<string, string> = {
  green: "bg-wf-green-light text-wf-green border-wf-green/20",
  pink: "bg-wf-pink-light text-wf-pink border-wf-pink/20",
  gray: "bg-wf-gray-light text-wf-gray border-wf-gray/20",
};

export default function Chip({
  label,
  icon,
  variant = "green",
  className,
  onClick,
}: ChipProps) {
  const Component = onClick ? "button" : "span";

  return (
    <Component
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium leading-tight",
        variantStyles[variant],
        onClick && "cursor-pointer hover:opacity-80 transition-opacity",
        className,
      )}
      {...(onClick ? { onClick, type: "button" as const } : {})}
    >
      {icon && <span className="flex-shrink-0 [&>svg]:h-4 [&>svg]:w-4">{icon}</span>}
      {label}
    </Component>
  );
}
