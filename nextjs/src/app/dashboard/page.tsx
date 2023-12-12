import { getYearSummary } from "@/apiCalls/invoices"
import { Card } from "@/components/Card"
import { LineChart } from "@/components/Charts/LineChart"
import { monthLabels } from "@/components/Charts/utils/inex"
import { CurrencyText } from "@/components/CurrencyText"

export default async function DashboardPage() {
  const { yearSummary } = await getYearSummary()
  return (
    <article className="px-2 md:px-4 py-8">
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
        <Card>
          <h3 className="font-bold text-sm text-gray-800">Faturamento Total</h3>
          <CurrencyText
            value={yearSummary?.totalRevenue ?? 0}
            className="text-lg text-gray-800"
          />
        </Card>
        <Card className="lg:col-span-2">
          <h3 className="font-bold text-sm text-gray-800">
            Pagamentos Confirmados
          </h3>
          <CurrencyText
            value={yearSummary?.confirmedPayments ?? 0}
            className="text-lg text-gray-800"
          />
        </Card>
        <Card>
          <h3 className="font-bold text-sm text-gray-800">Projeção Futura</h3>
          <CurrencyText
            value={yearSummary?.futureProjection ?? 0}
            className="text-lg text-gray-800"
          />
        </Card>
        <Card>
          <h3 className="font-bold text-sm text-gray-800">
            Cobranças Pendentes
          </h3>
          <CurrencyText
            value={yearSummary?.pendingCharges ?? 0}
            className="text-lg text-gray-800"
          />
        </Card>
        <Card>
          <h3 className="font-bold text-sm text-gray-800">Inadimplência</h3>
          <CurrencyText
            value={yearSummary?.defaulters ?? 0}
            className="text-lg text-gray-800"
          />
        </Card>
      </section>

      <section className="flex  flex-wrap md:flex-nowrap gap-4">
        <h2 className="sr-only">Gráficos</h2>

        <Card className="w-full md:w-1/2">
          <h3 className="font-bold text-center">Receitas</h3>
          <LineChart
            labels={monthLabels}
            datasets={[
              {
                label: "Receita",
                data:
                  yearSummary?.byMonth
                    .map((item) => item.confirmedValues)
                    .reverse() ?? [],
                borderColor: "#00308F",
                backgroundColor: "#00308F",
                tension: 0.1,
                radius: 3
              },
            ]}
          />
        </Card>

        <Card className="w-full md:w-1/2">
          <h3 className="font-bold text-center">Inadimplências</h3>
          <LineChart
            labels={monthLabels}
            datasets={[
              {
                label: "Inadimplência",
                data:
                  yearSummary?.byMonth
                    .map((item) => item.defaulterValues)
                    .reverse() ?? [],
                borderColor: "#800000",
                backgroundColor: "#800000",
                tension: 0.1,
                radius: 3
              },
            ]}
          />
        </Card>
      </section>
    </article>
  )
}
