import { InvoicesInterface } from "../repositories/@interface/invoices-interface"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface ReplyType {
  summary: YearSummary | undefined
}

type YearSummary = {
  totalRevenue: number
  confirmedPayments: number
  futureProjection: number
  pendingCharges: number
  defaulters: number
  byMonth: { month: string; confirmedValues: number, defaulterValues: number }[]
}

export class getYearSummaryUseCase {
  constructor(private invoicesRepository: InvoicesInterface) {}

  async execute(): Promise<ReplyType> {
    const invoices = await this.invoicesRepository.getAllInvoices()

    const summary: YearSummary | undefined = invoices?.reduce(
      (totalSummary: YearSummary, invoice) => {
        const monthName = format(invoice.createdAt, "MMMM", { locale: ptBR })
        const registeredMonth = totalSummary.byMonth.find(
          (registeredMonth) => registeredMonth.month === monthName
        )

        const currentValue = invoice.value

        switch (invoice.status) {
          case 1:
            totalSummary.pendingCharges += currentValue

            totalSummary.futureProjection += currentValue
            totalSummary.totalRevenue += currentValue
            break
          case 2:
            totalSummary.futureProjection += currentValue
            totalSummary.totalRevenue += currentValue
            break
          case 3:
            totalSummary.defaulters += currentValue

            totalSummary.futureProjection += currentValue
            totalSummary.totalRevenue += currentValue
            break
          case 4:
            totalSummary.confirmedPayments += currentValue
            totalSummary.totalRevenue += currentValue
            break
        }

        const isInvoicePaid = invoice.status === 4
        const isInvoiceOutdated = invoice.status === 3

        const currentPaidValue = isInvoicePaid ? invoice.value : 0
        const currentNotPaidValue = isInvoiceOutdated ? invoice.value : 0

        if (registeredMonth) {
          registeredMonth.confirmedValues += currentPaidValue
          registeredMonth.defaulterValues += currentNotPaidValue
        } else {
          totalSummary.byMonth.push({
            month: monthName,
            confirmedValues: currentPaidValue,
            defaulterValues: currentNotPaidValue
          })
        }

        return totalSummary
      },
      {
        totalRevenue: 0,
        confirmedPayments: 0,
        futureProjection: 0,
        pendingCharges: 0,
        defaulters: 0,
        byMonth: [],
      }
    )

    return { summary }
  }
}
