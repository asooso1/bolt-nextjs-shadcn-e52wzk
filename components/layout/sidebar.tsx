"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Building2, Users, Home, Menu, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const sidebarItems = [
  { icon: Home, label: "홈", href: "/" },
  { icon: Users, label: "작업자", href: "/worker" },
  { icon: Building2, label: "관리자", href: "/admin" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar Toggle Button */}
      <div
        className={cn(
          "hidden md:block fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-200",
          isCollapsed ? "left-0" : "left-64"
        )}
      >
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "h-8 border-gray-200 transition-transform duration-200 hover:bg-gray-100",
            isCollapsed ? "w-4 rounded-l-none" : "w-8 -mr-4 rounded-l bg-white"
          )}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out md:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed && "md:-translate-x-64"
        )}
      >
        <ScrollArea className="h-full py-6">
          <div className="px-3 py-2">
            <h2 className="mb-6 px-4 text-lg font-semibold">작업자 관리 시스템</h2>
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}