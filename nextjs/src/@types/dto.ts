// Status:
// 1 = Emitida;
// 2 = Cobrança realizada;
// 3 = Pagamento em atraso;
// 4 = Pagamento realizado

export type Invoice = {
  payer_name: string
  status: 1 | 2 | 3 | 4
  identification: string
  value: number
  createdAt: Date
  chargedIn: Date | null
  paidAt: Date | null
  bankSlip: string
  nfIdentification: string
}

// /all-invoices

export type InvoiceWithMonthSummary = {
  month: string
  totalInMonth: number
  invoices: Invoice[]
}
export type ListOfInvoices = {
  data: InvoiceWithMonthSummary[] | undefined
}

// /year-summary
export type YearSummary = {
  data:
    | {
        totalRevenue: number
        confirmedPayments: number
        futureProjection: number
        pendingCharges: number
        defaulters: number
        byMonth: {
          month: string
          confirmedValues: number
          defaulterValues: number
        }[]
      }
    | undefined
}
