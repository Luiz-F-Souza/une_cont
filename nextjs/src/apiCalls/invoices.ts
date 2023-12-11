import { ListOfInvoices, YearSummary } from "@/@types/dto"

export const getListOfInvoices = async () => {
  const response = await fetch("http://localhost:8888/all-invoices")
  const { data: listOfInvoices } = (await response.json()) as ListOfInvoices

  return { listOfInvoices }
}

export const getYearSummary = async () => {
  const response = await fetch("http://localhost:8888/year-summary")
  const { data: yearSummary } = (await response.json()) as YearSummary

  return { yearSummary }
}
