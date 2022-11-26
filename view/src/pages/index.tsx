import { Card, LoadingCard, PopulationGraph } from '@components/common'
import { PrefectureButtons } from '@components/layout'
import { usePrefectures } from '@hooks/usePrefectures'
import { usePopulation } from '@hooks/usePopulation'
import style from '@styles/index.module.scss'
import { useState, useEffect } from 'react'

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

export default function Home() {
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>(
    []
  )
  const [population, setPopulation] = useState<PrefecturePopulation[]>([])
  const [notSelected, setNotSelected] = useState<boolean>(true)
  const [isPrefectureLoading, setIsPrefectureLoading] = useState<boolean>(true)
  const prefectures = usePrefectures()
  const prefecturePopulation = usePopulation(selectedPrefectures)

  useEffect(() => {
    console.log(prefecturePopulation.loading)
    setPopulation(prefecturePopulation.population)
  }, [prefecturePopulation])

  useEffect(() => {
    if (population.length === 0) {
      setNotSelected(true)
      return
    }
    setNotSelected(false)
  }, [population])

  useEffect(() => {
    if (prefectures.length === 0) {
      setIsPrefectureLoading(true)
      return
    }
    setIsPrefectureLoading(false)
  }, [prefectures])

  return (
    <div className={style.main_container}>
      <Card>
        <div className={style.prefecture_card}>
          {isPrefectureLoading && <LoadingCard />}
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
            {prefecturePopulation.loading && <LoadingCard />}
            {notSelected ? (
              <p className={style.not_selected}>Please select prefectures</p>
            ) : (
              <PopulationGraph population={population} />
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
