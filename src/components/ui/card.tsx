import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-md border border-border/70 bg-card/80 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_40px_rgba(18,18,23,0.05)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 sm:p-6", className)} {...props} />;
}

export { Card, CardContent };
