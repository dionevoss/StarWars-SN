import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { Loader } from '../../components/Loader'

import { NextPage } from 'next'

type TSpeciesData = {
  name: string
  designation: string
  classification: string
  average_height: string
  average_lifespan: string
}

const Specie: NextPage = () => {
  const [speciesData, setSpeciesData] = useState<TSpeciesData>()

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!router.isReady) return
    handleGetSpecie()
  }, [router.isReady])

  const handleGetSpecie = async () => {
    try {
      const { data } = await axios.get(`https://swapi.dev/api/species/${id}`)
      setSpeciesData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {!!speciesData ? (
        <ul>
          <li>Nome: {speciesData.name}</li>
          <li>Designação: {speciesData.designation}</li>
          <li>Classificação: {speciesData.classification}</li>
          <li>Altura média: {speciesData.average_height}</li>
          <li>Tempo de vida médio: {speciesData.average_lifespan}</li>
        </ul>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Specie
