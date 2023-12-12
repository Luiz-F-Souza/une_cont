import { appendListOfInvoices } from "./index.js"

const handlePushQuery = ({ key, value }) => {
  const windowLocation = window.location.search
  const searchParams = new URLSearchParams(windowLocation)

  searchParams.set(key, value)

  history.pushState(null, null, `?${searchParams.toString()}`)

  appendListOfInvoices()
}

const handleAddEventListener = ({ input, key, searchParams }) => {
  const eventListener = (e) => {
    const value = e.currentTarget.value

    handlePushQuery({ key, value, searchParams })
  }

  input.addEventListener("change", eventListener)
}


export const handleFiltering = async () => {

  const yearInput = document.getElementById("filter-by-year")
  const createdAtInput = document.getElementById("filter-by-created-at")
  const chargedAtInput = document.getElementById("filter-by-charged-at")
  const paidAtInput = document.getElementById("filter-by-paid-at")
  const statusInput = document.getElementById("filter-by-status")

  const setParamsValues = () => {
    const windowLocationSearch = window.location.search
    const params = new URLSearchParams(windowLocationSearch)

    const initialYear = params.get("ano") ?? "0"
    const initialCreatedAt = params.get("emissao") ?? "0"
    const initialChargedAt = params.get("cobrado") ?? "0"
    const initialPaid = params.get("pago") ?? "0"
    const initialStatus = params.get("status") ?? "0"

    yearInput.value = initialYear
    createdAtInput.value = initialCreatedAt
    chargedAtInput.value = initialChargedAt
    paidAtInput.value = initialPaid
    statusInput.value = initialStatus
  }
  setParamsValues()

  handleAddEventListener({ input: yearInput, key: "ano" })
  handleAddEventListener({
    input: createdAtInput,
    key: "emissao",
  })
  handleAddEventListener({
    input: chargedAtInput,
    key: "cobrado",
  })
  handleAddEventListener({
    input: paidAtInput,
    key: "pago",
  })
  handleAddEventListener({
    input: statusInput,
    key: "status",
  })

  const clearFiltersButton = document.getElementById("clear-filters")

  clearFiltersButton.addEventListener("click", () => {
    history.pushState(null, null, "?")
    setParamsValues()
    appendListOfInvoices()
  })
}
