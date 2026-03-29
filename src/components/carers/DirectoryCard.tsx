import React from "react";
import { cn } from "@/components/ui/utils";

interface DirectoryCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  tags?: string[];
  className?: string;
}

export default function DirectoryCard({
  title,
  description,
  href,
  icon,
  tags,
  className,
}: DirectoryCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block rounded-lg border border-wf-gray-light bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md hover:border-wf-green/40 focus:outline-none focus:ring-2 focus:ring-wf-green focus:ring-offset-2",
        className,
      )}
    >
      <div className="flex gap-4">
        {icon && (
          <span className="flex-shrink-0 mt-1 text-wf-green [&>svg]:h-8 [&>svg]:w-8">
            {icon}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-wf-green group-hover:underline">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-wf-gray line-clamp-3">
            {description}
          </p>
          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-wf-green-light px-2.5 py-0.5 text-xs font-medium text-wf-green"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <span
          aria-hidden="true"
          className="flex-shrink-0 self-center text-wf-green opacity-0 transition-opacity group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
