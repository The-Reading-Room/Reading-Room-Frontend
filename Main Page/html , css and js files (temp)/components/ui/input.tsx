import type React from "react"
import { cn } from "@/lib/utils"
import { type InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, icon, error, ...props }, ref) => {
  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 border-2 border-gray-200 rounded-lg transition-all duration-200",
          "focus:border-indigo-500 focus:outline-none focus:ring-3 focus:ring-indigo-100",
          "bg-gray-50 focus:bg-white",
          icon && "pl-10",
          error && "border-red-300 focus:border-red-500 focus:ring-red-100",
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
})

Input.displayName = "Input"
export default Input
