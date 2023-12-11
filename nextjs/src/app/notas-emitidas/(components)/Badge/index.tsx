import { Invoice } from "@/@types/dto"
import { twMerge } from "tailwind-merge"

type Props = {
    status: Invoice["status"]
}

export const Badge = ({status}: Props) => {

  return (
    <div
      className={twMerge(
        "bg-green-400 rounded-full w-fit px-2 py-1 text-xs",
        status === "Emitida" && "bg-gray-400",
        status === "Cobrança realizada" && "bg-yellow-400",
        status === "Pagamento realizado" && "bg-green-400",
        status === "Pagamento em atraso" && "bg-red-400"
      )}
    >
      <p
        className={twMerge(
          "font-bold",
          status === "Emitida" && "text-gray-900",
          status === "Cobrança realizada" && "text-yellow-900",
          status === "Pagamento realizado" && "text-green-900",
          status === "Pagamento em atraso" && "text-red-900"
        )}
      >
        {status}
      </p>
    </div>
  )
}
