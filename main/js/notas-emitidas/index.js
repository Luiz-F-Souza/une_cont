import { getListOfInvoices } from "../api/listOfInvoices.js"
import { formatCurrency } from "../utils/formatCurrency.js"
import { formatDate } from "../utils/formatDate.js"
import { sidebarFunctions } from "../common/side-bar.js"
import { handleFiltering } from "./handleFiltering.js"
import {
  checkNestedMonthItems,
  checkIfHasFilter,
  checkNestedYear,
} from "./utils/filters.js"
import { listOfMonths } from "./utils/LIST_OF_MONTHS.js"

sidebarFunctions()

const listOfStatus = {
  1: "Emitida",
  2: "Cobrança realizada",
  3: "Pagamento em atraso",
  4: "Pagamento realizado",
}

const colorsBasedOnStatus = {
  1: "gray",
  2: "yellow",
  3: "red",
  4: "green",
}

const { listOfInvoices } = await getListOfInvoices()

export const appendListOfInvoices = () => {
  const windowLocation = window.location.search
  const searchParams = new URLSearchParams(windowLocation)

  // deve ter outra forma melhor para realizar uma deepCopy, mas eu não sei qual ainda :(
  const deepListCopy = JSON.parse(JSON.stringify(listOfInvoices))

  const filteredListOfInvoices = deepListCopy?.filter((group) => {
    const { hasFilterActive: hasCreatedAtFilter, index: createdAtIndex } =
      checkIfHasFilter(searchParams.get("emissao"))

    // CREATED AT
    if (hasCreatedAtFilter) {
      if (listOfMonths[createdAtIndex] !== group.month) return false
    }

    // CHARGED AT
    const { hasFilterActive: hasChargedAtFilter, index: chargedAtIndex } =
      checkIfHasFilter(searchParams.get("cobrado"))

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
      checkIfHasFilter(searchParams.get("pago"))

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
      searchParams.get("ano")
    )

    if (hasYearFilter) {
      const paidAtFilterResult = checkNestedYear({
        object: group,
        propertyToCheck: "createdAt",
        value: Number(searchParams.get("ano")),
      })

      if (!paidAtFilterResult) return false
    }

    // STATUS
    const statusFilter = Number(searchParams.get("status"))

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

  const listPlaceholder = document.getElementById("list-of-invoices-container")

  const hasFilteredValues = filteredListOfInvoices.length > 0
  if (hasFilteredValues) {
    const htmlTemplate = []

    filteredListOfInvoices.forEach((invoice) => {
      const monthInvoices = invoice.invoices.map((item) => {
        return `
          <div class="mt-3 d-flex align-items-center gap-2">
              <p class="fw-bold text-sm ">${item.payer_name}</p>
              <div class="badge rounded-pill bg-${
                colorsBasedOnStatus[item.status]
              }-400 py-1 px-2">
                  <p class="text-${
                    colorsBasedOnStatus[item.status]
                  }-900 text-x-sm">${listOfStatus[item.status]}</p>
              </div>
          </div>
          <div class="d-flex flex-wrap align-items-center gap-2 mt-3 pb-3 text-center border-bottom ">
              <div class="border-end pe-3">
                  <p class="text-x-sm fw-bold">Identificação</p>
                  <p class="text-sm">${item.identification}</p>
              </div>
              <div class="border-end pe-3">
                  <p class="text-x-sm fw-bold">Valor</p>
                  <p class="text-sm">${formatCurrency(Number(item.value))}</p>
              </div>
              <div class="border-end pe-3">
                  <p class="text-x-sm fw-bold">Emissão</p>
                  <p class="text-sm">${formatDate(item.createdAt)}</p>
              </div>
              <div class="border-end pe-3">
                  <p class="text-x-sm fw-bold">Nota</p>
                  <p class="text-sm">${item.nfIdentification}</p>
              </div>
              <div class="border-end pe-3">
                  <p class="text-x-sm fw-bold">Cobrança</p>
                  <p class="text-sm">${formatDate(item.chargedIn)}</p>
              </div>
              <div class="border-end pe-3">
                  <p class="text-x-sm fw-bold">Pagamento</p>
                  <p class="text-sm">${formatDate(item.paidAt)}</p>
              </div>
              <div class="">
                  <p class="text-x-sm fw-bold">Boleto</p>
                  <p class="text-sm">${item.bankSlip}</p>
              </div>
          </div>
          
          `
      })
      htmlTemplate.push(`
          
          <div class="mt-5">
              <h3 class="text-capitalize fs-6 fw-bold">${invoice.month}</h3>
              <h4 class="text-x-sm  text-muted">Total recebido <span class="text-dark">${formatCurrency(
                Number(invoice.totalInMonth)
              )}</span></h4>
  
              ${monthInvoices.join("")}
  
       
          </div>         
      `)
    })

    listPlaceholder.innerHTML = htmlTemplate.join("")
  }

  if (!hasFilteredValues) {
    listPlaceholder.innerHTML = `
      <div class="text-center mt-5 py-5 border rounded">

        <h4 class="fw-bold">Não há resultados.  </h4>
        <p>Infelizmente sua consulta não retornou nenhum dado. Tente mudar os filtros <span class="bi bi-emoji-smile" /> </p>
      </div>
    
    `
  }
}

appendListOfInvoices()

handleFiltering()
