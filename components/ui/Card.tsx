import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface-light p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        className,
      )}
      {...props}
    />
  );
}
