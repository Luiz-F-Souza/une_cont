import { Invoice } from "@/@types/dto"
import { CurrencyText } from "@/components/CurrencyText"
import { format } from "date-fns"
import { Badge } from "../Badge"

type Props = Invoice
export const InvoiceCard = ({
  payerName,
  status,
  identification,
  value,
  createdAt,
  nfIdentification,
  chargedIn,
  paidAt,
  bankSlip,
}: Props) => {
  return (
    <section className="mt-4 text-sm text-gray-800 border-b-1 pb-4">
      <div className="flex items-center gap-3">
        <p className="font-bold">{payerName}</p>
        <Badge status={status} />
      </div>

      <div className="flex flex-wrap gap-3 items-center text-center mt-2  ">
        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs ">Identificação</p>
          <p>{identification}</p>
        </div>

        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs">Valor</p>
          <CurrencyText value={value} />
        </div>

        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs">Emissão</p>
          <p>{format(createdAt, "dd/MM/yyy")}</p>
        </div>

        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs">Nota</p>
          <p>{nfIdentification}</p>
        </div>

        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs">Cobrança</p>
          <p>{chargedIn ? format(chargedIn, "dd/MM/yyyy") : "Pendente"}</p>
        </div>

        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs">Pagamento</p>
          <p>{paidAt ? format(paidAt, "dd/MM/yyyy") : "Pendente"}</p>
        </div>
        <div>
          <p className="font-semibold text-xs">Boleto</p>
          <p>{bankSlip}</p>
        </div>
      </div>
    </section>
  )
}
