"use client"

import { AiOutlineDashboard } from "react-icons/ai"
import { LiaFileInvoiceDollarSolid } from "react-icons/lia"
import { SidebarMenuItem } from "./SidebarMenuItem"
import { twMerge } from "tailwind-merge"
import { menuStore } from "../store/menuStore"
import { BodyBluredOverlay } from "../BodyBluredOverlay"

export const Sidebar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = menuStore()

  return (
    <>
      <div className="w-0 lg:w-80">
        <aside
          className={twMerge(
            "fixed z-10 top-0 bottom-0 left-0 w-80 bg-brand-orange-500  overflow-hidden py-20 transition-all",
            !isMobileMenuOpen && "-left-full lg:left-0"
          )}
        >
          <ul className="flex flex-col gap-2">
            <li >
              <SidebarMenuItem href="/dashboard">
                <AiOutlineDashboard />
                Dashboard
              </SidebarMenuItem>
            </li>
            <li>
              <SidebarMenuItem href="/notas-emitidas">
                <LiaFileInvoiceDollarSolid />
                Notas emitidas
              </SidebarMenuItem>
            </li>
          </ul>
        </aside>
      </div>

      {isMobileMenuOpen && (
        <BodyBluredOverlay handleClose={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}
