import { ToggleButton, Card } from '@components/common'
import { usePrefectures } from '@hooks/usePrefectures'
import { usePopulation } from '@hooks/usePopulation'
import style from '@styles/index.module.scss'
import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

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
  const prefectures = usePrefectures()
  const [selectedPrefectures, setSelectedPrefectures] = useState<Prefecture[]>(
    []
  )
  const [population, setPopulation] = useState<PrefecturePopulation[]>()

  const prefecturePopulation = usePopulation(selectedPrefectures)

  useEffect(() => {
    setPopulation(prefecturePopulation.population)
  }, [prefecturePopulation])

  const handleSelectPrefecture = (prefecture: Prefecture) => {
    if (
      selectedPrefectures?.find((pref) => pref.prefCode === prefecture.prefCode)
    ) {
      setSelectedPrefectures(
        selectedPrefectures.filter(
          (pref) => pref.prefCode !== prefecture.prefCode
        )
      )
    } else {
      setSelectedPrefectures([...(selectedPrefectures || []), prefecture])
    }
  }

  const prefectureButtons = prefectures.map((prefecture: Prefecture) => (
    <ToggleButton
      key={prefecture.prefCode}
      onClick={() => handleSelectPrefecture(prefecture)}
    >
      {prefecture.prefName}
    </ToggleButton>
  ))

  return (
    <div>
      <Card>
        <div>
          <h2 className={style.title}>Prefectures</h2>
          <div className={style.prefecture_container}>{prefectureButtons}</div>
        </div>
      </Card>
      <Card>
        <div>
          <h2 className={style.title}>Graph</h2>
          <div className={style.graph_container}></div>
        </div>
      </Card>
    </div>
  )
}
