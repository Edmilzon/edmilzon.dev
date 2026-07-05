import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-border bg-surface-light px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary",
        className,
      )}
      {...props}
    />
  );
}
