import { invoices } from "@prisma/client"
import { InvoicesInterface } from "../repositories/@interface/invoices-interface"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface ReplyType {
  invoices: GroupedInvoices[] | null
}

type GroupedInvoices = {
  month: string
  totalInMonth: number
  invoices: invoices[]
}
export class getAllInvoicesUseCase {
  constructor(private invoicesRepository: InvoicesInterface) {}

  async execute(): Promise<ReplyType> {
    const invoices = await this.invoicesRepository.getAllInvoices()

    const invoicesGroupedByMonth: GroupedInvoices[] | undefined =
      invoices?.reduce((groupedArr: GroupedInvoices[], invoice) => {
        const monthName = format(invoice.createdAt, "MMMM", { locale: ptBR })
        const registeredMonth = groupedArr.find(
          (registeredMonth) => registeredMonth.month === monthName
        )

        const isInvoicePaid = invoice.status === 4

        const currentPaidValue = isInvoicePaid ? invoice.value : 0

        if (registeredMonth) {
          registeredMonth.totalInMonth += currentPaidValue

          registeredMonth.invoices.push(invoice)
        } else {
          groupedArr.push({
            month: monthName,
            totalInMonth: currentPaidValue,
            invoices: [invoice],
          })
        }

        return groupedArr
      }, [])

    return {
      invoices: invoicesGroupedByMonth ?? null,
    }
  }
}
