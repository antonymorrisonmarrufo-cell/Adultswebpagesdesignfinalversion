import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/components/ui/utils";

export interface TopicItem {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface TopicsSectionProps {
  title?: string;
  subtitle?: string;
  topics: TopicItem[];
  columns?: 2 | 3;
  className?: string;
}

export default function TopicsSection({
  title,
  subtitle,
  topics,
  columns = 3,
  className,
}: TopicsSectionProps) {
  return (
    <section className={cn("py-10 md:py-14", className)}>
      <div className="mx-auto max-w-5xl px-4">
        {title && (
          <h2 className="text-2xl font-bold text-wf-green md:text-3xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-2 text-wf-gray">{subtitle}</p>
        )}

        <div
          className={cn(
            "mt-8 grid gap-4",
            columns === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {topics.map((topic) => (
            <Link
              key={topic.href}
              to={topic.href}
              className="group flex flex-col rounded-lg border border-gray-200 bg-white p-5 no-underline shadow-sm transition-shadow hover:shadow-md hover:border-wf-green"
            >
              {topic.icon && (
                <span className="mb-3 text-wf-pink">{topic.icon}</span>
              )}
              <h3 className="flex items-center gap-1 text-base font-bold text-wf-green group-hover:text-wf-green">
                {topic.title}
                <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-wf-gray">
                {topic.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
