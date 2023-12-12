export const formatDate = (date) => {
  const asDate = new Date(date)

  const formated = asDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  return formated
}
