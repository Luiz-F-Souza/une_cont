import { IoIosSearch } from "react-icons/io"
import { InvoiceCard } from "./(components)/Cards/InvoiceCard"
import { CurrencyText } from "@/components/CurrencyText"
import { Filters } from "./(components)/Filters"
import { captalize } from "@/utils/captalize"
import { getListOfInvoices } from "@/apiCalls/invoices"


export default async function InvoicesPage() {


  const { listOfInvoices } = await getListOfInvoices()
  return (
    <section className="px-4 py-8 text-gray-800">
      <div className="flex items-center justify-between gap-2">
        <label className="flex items-center border-1 p-2 gap-2 rounded-md min-w-0 w-64">
          <IoIosSearch className="w-5 h-5" />
          <input className="border-none focus-within:outline-none min-w-0" />
        </label>

        <Filters />
      </div>

      <article className="mt-8">
        {listOfInvoices?.map((month) => {
          return (
            <section key={month.month} className="mt-12">
              <h3 className="font-bold text-gray-800">
                {captalize(month.month)}
              </h3>
              <h4 className="text-zinc-400 text-xs font-semibold">
                Total recebido{" "}
                <CurrencyText
                  className="text-gray-800 inline"
                  value={month.totalInMonth}
                />
              </h4>

              {month.invoices.map((invoice) => {
                return (
                  <InvoiceCard key={invoice.identification} invoice={invoice} />
                )
              })}
            </section>
          )
        })}
      </article>
    </section>
  )
}
