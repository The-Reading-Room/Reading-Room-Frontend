import { cn } from "@/lib/utils"
import { type TextareaHTMLAttributes, forwardRef } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  showCount?: boolean
  maxLength?: number
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, showCount, maxLength, value, ...props }, ref) => {
    const currentLength = typeof value === "string" ? value.length : 0

    return (
      <div className="relative">
        <textarea
          ref={ref}
          value={value}
          maxLength={maxLength}
          className={cn(
            "w-full px-4 py-3 border-2 border-gray-200 rounded-lg transition-all duration-200",
            "focus:border-indigo-500 focus:outline-none focus:ring-3 focus:ring-indigo-100",
            "bg-gray-50 focus:bg-white resize-vertical min-h-[120px]",
            error && "border-red-300 focus:border-red-500 focus:ring-red-100",
            className,
          )}
          {...props}
        />
        {showCount && maxLength && (
          <div className="absolute bottom-3 right-3 text-sm text-gray-500">
            {currentLength}/{maxLength}
          </div>
        )}
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    )
  },
)

Textarea.displayName = "Textarea"
export default Textarea
