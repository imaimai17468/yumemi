import { ToggleButton, Card } from '@components/common'
import { usePrefectures } from '@hooks/usePrefectures'
import style from '@styles/index.module.scss'
import { useState, useEffect } from 'react'

interface PrefectureProps {
  prefCode: number
  prefName: string
}

export default function Home() {
  const prefectures = usePrefectures()
  const [selectedPrefectures, setSelectedPrefectures] =
    useState<PrefectureProps[]>()

  useEffect(() => {}, [selectedPrefectures])

  const handleSelectPrefecture = (prefecture: PrefectureProps) => {
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

  const prefectureButtons = prefectures.map((prefecture: PrefectureProps) => (
    <ToggleButton onClick={() => handleSelectPrefecture(prefecture)}>
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
    </div>
  )
}
