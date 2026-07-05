import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-light px-2.5 py-0.5 text-xs font-medium text-text-secondary",
        className,
      )}
      {...props}
    />
  );
}
