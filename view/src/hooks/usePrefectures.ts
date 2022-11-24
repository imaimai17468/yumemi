import { getPrefectures } from '@api/getPrefectures'
import { useState, useEffect } from 'react'

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState([])
  useEffect(() => {
    getPrefectures().then((res) => setPrefectures(res.prefectures))
  }, [])
  return prefectures
}
