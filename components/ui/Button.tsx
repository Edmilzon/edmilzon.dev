import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
        {
          "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark":
            variant === "primary",
          "border border-border text-text-secondary hover:border-primary hover:text-primary":
            variant === "outline",
          "text-text-secondary hover:text-primary": variant === "ghost",
        },
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-5 py-2.5 text-sm": size === "md",
          "px-8 py-3 text-base": size === "lg",
        },
        className,
      )}
      {...props}
    />
  );
}
