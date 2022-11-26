import { getPrefectures } from '@api/getPrefectures'
import { useState, useEffect, useRef, useCallback } from 'react'

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState([])
  const cache = useRef(null)
  useEffect(() => {
    if (cache.current) {
      setPrefectures(cache.current)
      return
    }
    getPrefectures().then((res) => {
      cache.current = res.prefectures
      setPrefectures(res.prefectures)
    })
  }, [])
  return prefectures
}
