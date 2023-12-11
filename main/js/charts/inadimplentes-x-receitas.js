const monthsLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']


export const createDefaultersAndRevenuesChart = () => {
  const ctx = document
    .getElementById("chart-defaulters-x-revenues")
    .getContext("2d")

  const data = {
    labels: monthsLabels,
    datasets: [
      {
        label: "Receita",
        data: [3, 2, 4],
        borderColor: 'blue',
        backgroundColor: '#fff',
        yAxisID: "y",
      },
      {
        label: "Inadimplência",
        data: [12,34,54,23,12,34,54,23,12,34,54,23],
        borderColor: 'red',
        backgroundColor: '#fff',
        yAxisID: "y1",
      },
    ],
  }

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Inadimplência x Receitas",
        },
      },

    },
  }

  const myChart = new Chart(ctx, config)
}
