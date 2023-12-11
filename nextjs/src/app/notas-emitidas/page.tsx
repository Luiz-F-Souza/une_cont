import { IoIosSearch } from "react-icons/io"
import { CiFilter } from "react-icons/ci"
import { InvoiceCard } from "./(components)/Cards/InvoiceCard"
import { CurrencyText } from "@/components/CurrencyText"
import { ListOfInvoices } from "@/@types/dto"
import { Filters } from "./(components)/Filters"

const listOfInvoices: ListOfInvoices = [
  {
    month: "Dezembro",
    totalInMonth: 239234.49,
    invoices: [
      {
        payerName: "Luiz Felipe de Souza Barbosa",
        status: "Pagamento realizado",
        identification: "224.449",
        value: 80985.85,
        createdAt: new Date(),
        chargedIn: new Date(),
        paidAt: new Date(),
        bankSlip: "399340",
        nfIdentification: "153324",
      },
      {
        payerName: "Amanda Lima Pinto",
        status: "Pagamento realizado",
        identification: "22334.349",
        value: 58248.64,
        createdAt: new Date(2023, 11, 8),
        chargedIn: new Date(2023, 11, 8),
        paidAt: new Date(2023, 10, 9),
        bankSlip: "349340",
        nfIdentification: "183024",
      },
      {
        payerName: "Livia Cardoso Oliveira",
        status: "Pagamento realizado",
        identification: "11423.049",
        value: 84589.39,
        createdAt: new Date(2023, 11, 7),
        chargedIn: new Date(2023, 11, 7),
        paidAt: new Date(2023, 10, 7),
        bankSlip: "223440",
        nfIdentification: "183000",
      },
      {
        payerName: "Kauê Ferreira Castro",
        status: "Pagamento realizado",
        identification: "004.049",
        value: 15410.61,
        createdAt: new Date(2023, 11, 5),
        chargedIn: new Date(2023, 11, 6),
        paidAt: new Date(2023, 10, 8),
        bankSlip: "093440",
        nfIdentification: "003000",
      },
    ],
  },
  {
    month: "Novembro",
    totalInMonth: 2349.34,
    invoices: [
      {
        payerName: "Luiz Felipe de Souza Barbosa",
        status: "Pagamento realizado",
        identification: "224.449",
        value: 478.23,
        createdAt: new Date(2023, 10, 25),
        chargedIn: new Date(2023, 10, 25),
        paidAt: new Date(2023, 10, 26),
        bankSlip: "399340",
        nfIdentification: "153324",
      },
      {
        payerName: "Amanda Lima Pinto",
        status: "Emitida",
        identification: "2324.349",
        value: 239.23,
        createdAt: new Date(2023, 10, 8),
        chargedIn: null,
        paidAt: null,
        bankSlip: "349340",
        nfIdentification: "183024",
      },
      {
        payerName: "Livia Cardoso Oliveira",
        status: "Pagamento em atraso",
        identification: "114.049",
        value: 210312.34,
        createdAt: new Date(2023, 10, 6),
        chargedIn: new Date(2023, 10, 7),
        paidAt: null,
        bankSlip: "223440",
        nfIdentification: "183000",
      },
      {
        payerName: "Kauê Ferreira Castro",
        status: "Cobrança realizada",
        identification: "004.049",
        value: 1000.0,
        createdAt: new Date(2023, 10, 23),
        chargedIn: new Date(2023, 10, 25),
        paidAt: null,
        bankSlip: "093440",
        nfIdentification: "003000",
      },
    ],
  },
]

export default function InvoicesPage() {
  return (
    <section className="px-4 py-8 text-gray-800">
      <div className="flex items-center justify-between">
        <label className="flex items-center border-1 p-2 gap-2 rounded-md">
          <IoIosSearch />
          <input className="border-none focus-within:outline-none" />
        </label>

        <Filters />
      </div>

      <article className="mt-8">
        {listOfInvoices.map((month) => {
          return (
            <section key={month.month} className="mt-12">
              <h3 className="font-bold text-gray-800">{month.month}</h3>
              <h4 className="text-zinc-400 text-xs font-semibold">
                Total recebido{" "}
                <CurrencyText
                  className="text-gray-800 inline"
                  value={month.totalInMonth}
                />
              </h4>

              {month.invoices.map((invoice) => {
                return (
                  <InvoiceCard
                    key={invoice.identification}
                    payerName={invoice.payerName}
                    status={invoice.status}
                    value={invoice.value}
                    identification={invoice.identification}
                    nfIdentification={invoice.nfIdentification}
                    createdAt={invoice.createdAt}
                    chargedIn={invoice.chargedIn}
                    paidAt={invoice.paidAt}
                    bankSlip={invoice.bankSlip}
                  />
                )
              })}
            </section>
          )
        })}
      </article>
    </section>
  )
}
