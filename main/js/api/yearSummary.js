import { formatCurrency } from "../utils/formatCurrency.js"

export const getYearSummary = async () => {
  const request = new Request("http://localhost:8888/year-summary", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const response = await fetch(request)

  const { data: yearSummary } = await response.json()

  return { yearSummary }
}

export const insertYearSummaryOnHTML = ({totalRevenue, confirmedPayments, futureProjection, pendingCharges, defaulters}) => {
    
    
    const totalRevenuePlaceholder = document.getElementById('totalRevenue')
    const confirmedPaymentsPlaceholder = document.getElementById('confirmedPayments')
    const futureProjectionPlaceholder = document.getElementById("futureProjection")
    const pendingChargesPlaceholder = document.getElementById("pendingCharges")
    const defaultersPlaceholder = document.getElementById("defaulters")



    totalRevenuePlaceholder.innerHTML = formatCurrency(Number(totalRevenue)) 
    confirmedPaymentsPlaceholder.innerHTML = formatCurrency(Number(confirmedPayments))  
    futureProjectionPlaceholder.innerHTML = formatCurrency(Number(futureProjection))  
    pendingChargesPlaceholder.innerHTML = formatCurrency(Number(pendingCharges))  
    defaultersPlaceholder.innerHTML = formatCurrency(Number(defaulters))  
}
