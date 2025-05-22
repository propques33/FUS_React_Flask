import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer bg-blue-500 overflow-hidden rounded-full border  p-2 px-6 text-center text-xs",
        className
      )}
      {...props}>
      <div className="flex items-center gap-2">
        <div
          className="h-2 w-2 bg-white rounded-full  transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span
          className="inline-block transition-all text-white duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 text-blue-500 items-center justify-center gap-2  opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
