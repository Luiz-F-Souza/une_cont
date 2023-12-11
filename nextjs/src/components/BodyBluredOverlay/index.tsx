"use client"

import { createPortal } from "react-dom"

type Props = {
  handleClose?: () => void
}
export const BodyBluredOverlay = ({ handleClose }: Props) => {
  return createPortal(
    <div
      className="fixed bg-gray-700/10 backdrop-blur-[2px] top-0 bottom-0 left-0 right-0"
      onClick={handleClose}
    />,
    document.body
  )
}
