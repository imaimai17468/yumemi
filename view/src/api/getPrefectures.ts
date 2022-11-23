import axios from 'axios'

interface Prefecture {
  prefCode: number
  prefName: string
}

export const getPrefectures = async () => {
  const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures'
  const headers = {
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  }
  const res = await axios.get(url, { headers })
  const prefectures = res.data.result.map((prefecture: Prefecture) => ({
    prefCode: prefecture.prefCode,
    prefName: prefecture.prefName,
  }))
  return { prefectures }
}
