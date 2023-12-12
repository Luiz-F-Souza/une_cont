export const checkNestedMonthItems = ({ object, propertyToCheck, value }) => {
  if (!object) return false

  const filtered = object.invoices.filter((invoice) => {
    const currentChecking = invoice[propertyToCheck]

    if (!currentChecking) return false

    const currentInvoiceMonthIndex = new Date(currentChecking).getMonth()

    if (currentInvoiceMonthIndex !== value) return false

    return true
  })

  object.invoices = filtered

  const hasNoItems = filtered.length === 0

  if (hasNoItems) return false

  return true
}

export const checkIfHasFilter = (value) => {
  const valueAsNumber = Number(value)
  const hasFilterActive = valueAsNumber > 0

  return { hasFilterActive, index: valueAsNumber - 1 }
}

export const checkNestedYear = ({ object, propertyToCheck, value }) => {
  if (!object) return false

  const filtered = object.invoices.filter((invoice) => {
    const currentChecking = invoice[propertyToCheck]

    if (!currentChecking) return false

    const currentYear = new Date(currentChecking).getFullYear()

    if (currentYear !== value) return false

    return true
  })

  object.invoices = filtered

  const hasNoItems = filtered.length === 0

  if (hasNoItems) return false

  return true
}
