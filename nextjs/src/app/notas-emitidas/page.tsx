import { IoIosSearch } from "react-icons/io"
import { InvoiceCard } from "./(components)/(Cards)/InvoiceCard"
import { CurrencyText } from "@/components/CurrencyText"
import { Filters } from "./(components)/(Filters)"
import { captalize } from "@/utils/captalize"
import { getListOfInvoices } from "@/apiCalls/invoices"
import {
  checkIfHasFilter,
  checkNestedMonthItems,
  checkNestedYear,
} from "./(utils)/filters"
import { listOfMonths } from "./(utils)/LIST_OF_MONTHS"

type Props = {
  searchParams: {
    ano: string
    cobrado: string
    emissao: string
    "pago-em": string
    status: string
  }
}

export default async function InvoicesPage({ searchParams }: Props) {
  const { listOfInvoices } = await getListOfInvoices()

  const filteredListOfInvoices = listOfInvoices?.filter((group) => {
    const { hasFilterActive: hasCreatedAtFilter, index: createdAtIndex } =
      checkIfHasFilter(searchParams.emissao)

    // CREATED AT
    if (hasCreatedAtFilter) {
      if (listOfMonths[createdAtIndex] !== group.month) return false
    }

    // CHARGED AT
    const { hasFilterActive: hasChargedAtFilter, index: chargedAtIndex } =
      checkIfHasFilter(searchParams.cobrado)

    if (hasChargedAtFilter) {
      const chargedAtFilterResult = checkNestedMonthItems({
        object: group,
        propertyToCheck: "chargedIn",
        value: chargedAtIndex,
      })

      if (!chargedAtFilterResult) return false
    }

    // PAID AT
    const { hasFilterActive: hasPaidAtFilter, index: paidAtIndex } =
      checkIfHasFilter(searchParams["pago-em"])

    if (hasPaidAtFilter) {
      const paidAtFilterResult = checkNestedMonthItems({
        object: group,
        propertyToCheck: "paidAt",
        value: paidAtIndex,
      })

      if (!paidAtFilterResult) return false
    }

    // YEAR
    const { hasFilterActive: hasYearFilter } = checkIfHasFilter(
      searchParams.ano
    )

    if (hasYearFilter) {
      const paidAtFilterResult = checkNestedYear({
        object: group,
        propertyToCheck: "createdAt",
        value: Number(searchParams.ano),
      })

      if (!paidAtFilterResult) return false
    }

    // STATUS
    const statusFilter = Number(searchParams.status)

    const hasStatusFilter = statusFilter > 0
    if (hasStatusFilter) {
      const filtered = group.invoices.filter((invoice) => {
        const currentStatus = invoice.status

        if (currentStatus !== statusFilter) return false

        return true
      })

      group.invoices = filtered

      const hasNoItems = filtered.length === 0

      if (hasNoItems) return false
    }

    return true
  })

  const hasFilteredItems =
    filteredListOfInvoices && filteredListOfInvoices.length > 0

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
        {filteredListOfInvoices?.map((month) => {
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

        {!hasFilteredItems && (
          <div className="text-center mt-5 py-5 border rounded">
            <h4 className="font-bold">Não há resultados. </h4>
            <p>
              Infelizmente sua consulta não retornou nenhum dado. Tente mudar os
              filtros {":)"}
            </p>
          </div>
        )}
      </article>
    </section>
  )
}
