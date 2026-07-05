import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg border border-border bg-surface-light px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary",
        className,
      )}
      rows={4}
      {...props}
    />
  );
}
