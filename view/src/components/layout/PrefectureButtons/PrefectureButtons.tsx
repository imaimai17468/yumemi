import { ToggleButton } from '../../common'
import style from './PrefectureButtons.module.scss'

interface Prefecture {
  prefCode: number
  prefName: string
}

interface Props {
  prefectures: Prefecture[]
  selectedPrefectures: Prefecture[]
  setSelectedPrefectures: React.Dispatch<React.SetStateAction<Prefecture[]>>
}

export default function PrefectureButtons(props: Props): JSX.Element {
  const { prefectures, selectedPrefectures, setSelectedPrefectures } = props

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

  return(
    <div className={style.prefecture_container}>{prefectureButtons}</div>
  )

};