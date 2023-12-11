"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { menuStore } from "../store/menuStore"

type Props = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
  }
export const SidebarMenuItem = ({
  children,
  href,
  className: newClasses,
  ...props
}: Props) => {
  const pathname = usePathname()
  const { setIsMobileMenuOpen } = menuStore()

  const isActive = pathname === href.toString()

  return (
    <Link
      href={href}
      className={twMerge(
        "w-full p-2  hover:bg-brand-orange-200 hover:shadow-sm text-gray-800 ml-3 flex gap-2 items-center rounded-l-full transition-all",
        isActive && "bg-brand-orange-200  shadow-md ",
        newClasses
      )}
      {...props}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {children}
    </Link>
  )
}
