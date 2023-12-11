import { invoices } from "@prisma/client"

export interface InvoicesInterface {
  getAllInvoices(): Promise<invoices[] | null>
}
