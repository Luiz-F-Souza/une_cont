"use client"
type Props = React.HtmlHTMLAttributes<HTMLParagraphElement> & {
  value: number
}

export const CurrencyText = ({ value, ...props }: Props) => {
  return (
    <p {...props}>
      {Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 2,
      }).format(value)}
    </p>
  )
}
