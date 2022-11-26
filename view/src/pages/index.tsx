import { ToggleButton, Card } from '@components/common'
import { PrefectureButtons } from '@components/layout'
import { usePrefectures } from '@hooks/usePrefectures'
import { usePopulation } from '@hooks/usePopulation'
import style from '@styles/index.module.scss'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

interface Prefecture {
  prefCode: number
  prefName: string
}

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

export default function Home() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>(
    []
  )
  const [population, setPopulation] = useState<PrefecturePopulation[]>([])
  const prefectures = usePrefectures()
  const prefecturePopulation = usePopulation(selectedPrefectures)
  const [labels, setLabels] = useState<string[]>([])
  const [datasets, setDatasets] = useState<Datasets[]>([])
  const [notSelected, setNotSelected] = useState<boolean>(true)
  Chart.register(...registerables)

  useEffect(() => {
    setPopulation(prefecturePopulation.population)
  }, [prefecturePopulation])

  useEffect(() => {
    if (population.length === 0) {
      setNotSelected(true)
      return
    }
    setNotSelected(false)

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
    <div>
      <Card>
        <div>
          <h2 className={style.title}>Prefectures</h2>
          <PrefectureButtons
            prefectures={prefectures}
            selectedPrefectures={selectedPrefectures}
            setSelectedPrefectures={setSelectedPrefectures}
          />
        </div>
      </Card>
      <Card>
        <div>
          <h2 className={style.title}>Graph</h2>
          <div className={style.graph_container}>
            {notSelected ? (
              <p className={style.not_selected}>Please select prefectures</p>
            ) : (
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
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
