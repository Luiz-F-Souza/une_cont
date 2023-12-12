"use client"

import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

type Props = {
  labels: string[]

  datasets: {
    label: string
    data: number[]
    borderColor: string
    backgroundColor: string,
    tension: number,
    radius: number
  }[]
}

export const LineChart = ({ labels, datasets }: Props) => {
  const options = {
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
          beginAtZero: true
        },
      },
    },
  }
  
  const data = {
    labels,
    datasets,
  }

  return <Line options={options} data={data} />
}
