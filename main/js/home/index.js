import { insertYearSummaryOnHTML, getYearSummary } from "../api/yearSummary.js"
import { drawSummaryCharts } from "./charts/index.js"
import { sidebarFunctions } from "../common/side-bar.js"


sidebarFunctions()
const { yearSummary } = await getYearSummary()

if (yearSummary) {
  const {
    totalRevenue,
    confirmedPayments,
    futureProjection,
    pendingCharges,
    defaulters,
    byMonth,
  } = yearSummary

  insertYearSummaryOnHTML({
    confirmedPayments,
    defaulters,
    futureProjection,
    pendingCharges,
    totalRevenue,
  })

 
  const revenuesGraphCtx = document.getElementById("revenues-graph")
  const defaultersGraphCtx = document.getElementById("defaulters-graph")

  const revenuesValues = byMonth.map((month) => month.confirmedValues).reverse()
  const defaultersValues = byMonth.map((month) => month.defaulterValues).reverse()

  drawSummaryCharts(revenuesGraphCtx, revenuesValues, "rgb(75, 192, 192)")
  drawSummaryCharts(defaultersGraphCtx, defaultersValues, "red")
}
