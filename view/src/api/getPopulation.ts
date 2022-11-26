import { populationAPI } from './axiosAPIs'

interface Population {
  year: number
  value: number
}

interface Prefecture {
  prefCode: number
  prefName: string
}

export const getPopulation = async (prefCode: number) => {
  const res = await populationAPI(prefCode).get('')
  const population = res.data.result.data[0].data.map(
    (population: Population) => ({
      year: population.year,
      value: population.value,
    })
  )
  return { population }
}
