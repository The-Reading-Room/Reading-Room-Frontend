"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface DropdownOption {
  id: string
  label: string
  icon?: React.ReactNode
  onClick: () => void
}

interface DropdownProps {
  trigger: React.ReactNode
  options: DropdownOption[]
  className?: string
}

export default function Dropdown({ trigger, options, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPosition({
        top: rect.top,
        left: rect.right + 10,
      })
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative"
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={cn(
            "fixed z-50 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 min-w-[280px]",
            "animate-in fade-in-0 zoom-in-95 duration-200",
            className,
          )}
          style={{ top: position.top, left: position.left }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                option.onClick()
                setIsOpen(false)
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
            >
              {option.icon && <span className="text-gray-400 group-hover:text-indigo-500">{option.icon}</span>}
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  )
}
