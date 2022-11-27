import { ToggleButton, LoadingCard } from '../../common'
import style from './PrefectureButtons.module.scss'

interface Prefecture {
  prefCode: number
  prefName: string
}

interface Props {
  prefectures: Prefecture[]
  selectedPrefectures: Prefecture[]
  setSelectedPrefectures: React.Dispatch<React.SetStateAction<Prefecture[]>>
  isLoading: boolean
}

export default function PrefectureButtons(props: Props): JSX.Element {
  const { prefectures, selectedPrefectures, setSelectedPrefectures, isLoading } = props

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
    <div className={style.prefecture_container}>
      {isLoading && <LoadingCard />}
      {prefectureButtons}
    </div>
  )
}
