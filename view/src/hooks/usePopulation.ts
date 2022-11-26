import { getPopulation } from '@api/getPopulation'
import { useState, useEffect, useRef, useCallback } from 'react'

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

export const usePopulation = (prefectures: Prefecture[]) => {
  const [population, setPopulation] = useState<PrefecturePopulation[]>([])

  const cache = useRef(new Map())

  const fetchPopulation = useCallback(async (prefCode: number) => {
    if (cache.current.has(prefCode)) {
      return cache.current.get(prefCode)
    }

    const res = await getPopulation(prefCode)
    cache.current.set(prefCode, res.population)
    return res.population
  }, [])

  useEffect(() => {
    const fetchAllPopulation = async () => {
      const allPopulation = await Promise.all(
        prefectures.map(async (prefecture) => {
          const population = await fetchPopulation(prefecture.prefCode)
          return {
            prefCode: prefecture.prefCode,
            prefName: prefecture.prefName,
            population,
          }
        })
      )
      setPopulation(allPopulation)
    }
    fetchAllPopulation()
  }, [prefectures, fetchPopulation])

  return { population }
}
