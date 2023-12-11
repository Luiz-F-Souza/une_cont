"use client"

import { useState } from "react"
import { CiFilter } from "react-icons/ci"
import { FiltersModal } from "./FiltersModal"
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll"

export const Filters = () => {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)

  useLockBodyScroll(isFiltersModalOpen)
  return (
    <>
      <div
        className="flex items-center border-1 p-2 rounded-full gap-1 hover:cursor-pointer"
        onClick={() => setIsFiltersModalOpen(true)}
      >
        <CiFilter />
        <p>Filtros</p>
      </div>

      <FiltersModal
        handleClose={() => setIsFiltersModalOpen(false)}
        isOpen={isFiltersModalOpen}
      />
    </>
  )
}
