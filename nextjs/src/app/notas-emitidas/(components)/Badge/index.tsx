import { Invoice } from "@/@types/dto"
import { twMerge } from "tailwind-merge"

type Props = {
  status: Invoice["status"]
}

export const Badge = ({ status }: Props) => {
  let statusText = ""

  switch (status) {
    case 1:
      statusText = "Emitida"
      break
    case 2:
      statusText = "Cobrança realizada"
      break
    case 3:
      statusText = "Pagamento em atraso"
      break
    case 4:
      statusText = "Pagamento realizado"
      break
  }

  return (
    <div
      className={twMerge(
        "bg-green-400 rounded-full min-w-max px-2 py-1 text-xs ",
        status === 1 && "bg-gray-400",
        status === 2 && "bg-yellow-400",
        status === 3 && "bg-red-400",
        status === 4 && "bg-green-400"
      )}
    >
      <p
        className={twMerge(
          "font-bold",
          status === 1 && "text-gray-900",
          status === 2 && "text-yellow-900",
          status === 3 && "text-red-900",
          status === 4 && "text-green-900"
        )}
      >
        {statusText}
      </p>
    </div>
  )
}
