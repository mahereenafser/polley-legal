"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative px-5 py-2 rounded-full",
          "border-2 border-white",
          "bg-transparent",
          "cursor-pointer",
          "transition-all duration-300",
          "hover:bg-white/10",
          "active:scale-[0.975]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }
