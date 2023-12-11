import {invoices} from "@prisma/client"

export interface InvoicesInterface {
    getInvoicesYearSummary(): Promise< {} | null>
    getAllInvoices(): Promise< invoices[] | null>
}