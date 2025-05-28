import type React from "react"
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "danger" | "ghost"
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", icon, loading, children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
      default: "bg-gray-100 text-gray-700 hover:bg-gray-200",
      primary:
        "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      secondary: "bg-white border-2 border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-gray-50",
      danger: "bg-red-500 text-white hover:bg-red-600",
      ghost: "text-gray-600 hover:bg-gray-100",
    }

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={loading}
        {...props}
      >
        {loading ? <i className="fas fa-spinner fa-spin" /> : icon ? icon : null}
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
export default Button
