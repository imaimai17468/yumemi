import { prefecturesAPI } from './axiosAPIs'

interface Prefecture {
  prefCode: number
  prefName: string
}

export const getPrefectures = async () => {
  const res = await prefecturesAPI.get('')
  const prefectures = res.data.result.map((prefecture: Prefecture) => ({
    prefCode: prefecture.prefCode,
    prefName: prefecture.prefName,
  }))
  return { prefectures }
}
