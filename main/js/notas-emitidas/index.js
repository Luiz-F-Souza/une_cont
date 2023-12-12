import { getListOfInvoices } from "../api/listOfInvoices.js"
import { formatCurrency } from "../utils/formatCurrency.js"
import { formatDate } from "../utils/formatDate.js"
import { sidebarFunctions } from "../common/side-bar.js"

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

if (listOfInvoices) {
  const listPlaceholder = document.getElementById("list-of-invoices-container")

  const htmlTemplate = []

  listOfInvoices.forEach((invoice) => {
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
