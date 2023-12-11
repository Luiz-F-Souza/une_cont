"use client"

import { IoIosMenu, IoIosCloseCircleOutline } from "react-icons/io"
import { menuStore } from "../store/menuStore"

export const ToggleMenuButton = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = menuStore()
  return (
    <div className="z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
      {!isMobileMenuOpen && (
        <IoIosMenu className="w-8 h-8 hover:cursor-pointer lg:hidden" />
      )}
      {isMobileMenuOpen && (
        <IoIosCloseCircleOutline className="w-8 h-8 hover:cursor-pointer lg:hidden" />
      )}
    </div>
  )
}
