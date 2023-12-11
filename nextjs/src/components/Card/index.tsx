import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}
export const Card = ({ children, className: NewStyles, ...props }: Props) => {
  return (
    <div
      className={twMerge("border-1 border-gray-200 rounded-md shadow-sm p-4", NewStyles)}
      {...props}
    >
      {children}
    </div>
  )
}
