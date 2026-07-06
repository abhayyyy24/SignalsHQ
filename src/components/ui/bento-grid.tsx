import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[22rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-border bg-surface p-5 transition duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_-15px_var(--accent-glow)]",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mb-2 mt-2 font-heading text-base font-bold text-foreground">
          {title}
        </div>
        <div className="font-body text-sm font-normal text-muted">
          {description}
        </div>
      </div>
    </div>
  );
};