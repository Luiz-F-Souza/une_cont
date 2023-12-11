export type Invoice = {
  payerName: string
  status:
    | "Emitida"
    | "Cobrança realizada"
    | "Pagamento em atraso"
    | "Pagamento realizado"
  identification: string
  value: number
  createdAt: Date
  chargedIn: Date | null
  paidAt: Date | null
  bankSlip: string
  nfIdentification: string
}
export type ListOfInvoices = {
  month: string
  totalInMonth: number
  invoices: Invoice[]
}[]
