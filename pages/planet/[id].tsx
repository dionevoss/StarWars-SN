import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { Loader } from '../../components/Loader'

type TPlanetData = {
  name: string
  gravity: string
  terrain: string
  orbital_period: string
  diameter: string
}

const Planet = () => {
  const [planetData, setPlanetData] = useState<TPlanetData>()

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!router.isReady) return
    handleGetPlanet()
  }, [router.isReady])

  const handleGetPlanet = async () => {
    try {
      const { data } = await axios.get(`https://swapi.dev/api/planets/${id}`)
      setPlanetData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {!!planetData ? (
        <ul>
          <li>Nome: {planetData.name}</li>
          <li>Gravidade: {planetData.gravity}</li>
          <li>Terreno: {planetData.terrain}</li>
          <li>Periodo Orbital: {planetData.orbital_period}</li>
          <li>Diametro: {planetData.diameter}</li>
        </ul>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Planet
