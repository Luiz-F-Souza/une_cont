import { Card } from "@/components/Card"
import { LineChart } from "@/components/Charts/LineChart"
import { monthLabels } from "@/components/Charts/utils/inex"

export default function DashboardPage() {
  return (
    <article className="px-2 md:px-4 py-8">
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
        <Card>
          <h3 className="font-bold text-sm text-gray-800">Faturamento Total</h3>
          <h4 className="text-lg text-gray-800">R$ 241.583,83</h4>
        </Card>
        <Card className="lg:col-span-2">
          <h3 className="font-bold text-sm text-gray-800">
            Pagamentos Confirmados
          </h3>
          <h4 className="text-lg text-gray-800">R$ 239.712,72</h4>
        </Card>
        <Card>
          <h3 className="font-bold text-sm text-gray-800">Projeção Futura</h3>
          <h4 className="text-lg text-gray-800">R$ 438.234,23</h4>
        </Card>
        <Card>
          <h3 className="font-bold text-sm text-gray-800">
            Cobranças Pendentes
          </h3>
          <h4 className="text-lg text-gray-800">R$ 239,23</h4>
        </Card>
        <Card>
          <h3 className="font-bold text-sm text-gray-800">Inadimplência</h3>
          <h4 className="text-lg text-gray-800">R$ 631,88</h4>
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
                data: [
                  12030, 43039, 66042, 74823, 53450, 50345, 63450, 69493, 45934,
                  60349, 2349.34, 239234.49,
                ],
                borderColor: "#00308F",
                backgroundColor: "#00308F",
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
                data: [
                  23044, 20302, 21230, 14294, 23202, 12930, 23940, 13913, 12932,
                  23333, 210312.34, 0,
                ],
                borderColor: "#800000",
                backgroundColor: "#800000",
              },
            ]}
          />
        </Card>
      </section>
    </article>
  )
}
