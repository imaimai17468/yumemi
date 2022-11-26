import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

interface Population {
  year: number
  value: number
}

interface PrefecturePopulation {
  prefCode: number
  prefName: string
  population: Population[]
}

interface Datasets {
  label: string
  data: number[]
  borderColor: string
}

interface Props {
  population: PrefecturePopulation[]
}

export default function PopulationGraph(props: Props): JSX.Element {
  const [labels, setLabels] = useState<string[]>([])
  const [datasets, setDatasets] = useState<Datasets[]>([])
  Chart.register(...registerables)

  const { population } = props

  useEffect(() => {
    if (population.length === 0) return

    const labels = population[0].population.map((p: Population) => {
      return p.year.toString()
    })
    setLabels(labels)

    const datasets = population.map((p) => {
      return {
        label: p.prefName,
        data: p.population.map((pop) => pop.value),
        borderColor: `hsl(${p.prefCode * 15}, 100%, 50%)`,
      }
    })

    setDatasets(datasets)
  }, [population])

  return (
    <Line
      data={{
        labels: labels,
        datasets: datasets,
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  )
}
