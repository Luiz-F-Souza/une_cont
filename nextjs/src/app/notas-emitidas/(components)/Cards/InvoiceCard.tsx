import { Invoice } from "@/@types/dto"
import { CurrencyText } from "@/components/CurrencyText"
import { format } from "date-fns"
import { Badge } from "../Badge"

type Props = { invoice: Invoice }
export const InvoiceCard = ({ invoice }: Props) => {
  const {
    payer_name,
    bankSlip,
    chargedIn,
    createdAt,
    identification,
    nfIdentification,
    paidAt,
    status,
    value,
  } = invoice



  return (
    <section className="mt-4 text-sm text-gray-800 border-b-1 pb-4">
      <div className="flex items-center gap-3">
        <p className="font-bold">{payer_name}</p>
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
          <p>{format(new Date(createdAt), "dd/MM/yyy")}</p>
        </div>

        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs">Nota</p>
          <p>{nfIdentification}</p>
        </div>

        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs">Cobrança</p>
          <p>
            {chargedIn ? format(new Date(chargedIn), "dd/MM/yyyy") : "Pendente"}
          </p>
        </div>

        <div className="border-r-1 pr-2">
          <p className="font-semibold text-xs">Pagamento</p>
          <p>{paidAt ? format(new Date(paidAt), "dd/MM/yyyy") : "Pendente"}</p>
        </div>
        <div>
          <p className="font-semibold text-xs">Boleto</p>
          <p>{bankSlip}</p>
        </div>
      </div>
    </section>
  )
}
