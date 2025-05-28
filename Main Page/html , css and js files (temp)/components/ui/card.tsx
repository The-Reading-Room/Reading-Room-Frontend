import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  padding?: "sm" | "md" | "lg"
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, padding = "md", children, ...props }, ref) => {
    const baseClasses = "bg-white rounded-xl border border-gray-200 transition-all duration-300"
    const hoverClasses = hover ? "hover:shadow-lg hover:-translate-y-1" : ""

    const paddings = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    }

    return (
      <div ref={ref} className={cn(baseClasses, hoverClasses, paddings[padding], className)} {...props}>
        {children}
      </div>
    )
  },
)

Card.displayName = "Card"
export default Card
