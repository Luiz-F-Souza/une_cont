const monthLabels = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
]

export const drawSummaryCharts = (ctx, values, borderColor) => {
  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: false,
        data: values,
        fill: false,
        borderColor,
        tension: 0.1,
      },
    ],
  }

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          grid: {
            drawOnChartArea: false,
            beginAtZero: true,
          },
        },
      },
    },
  }

  new Chart(ctx, config)
}
