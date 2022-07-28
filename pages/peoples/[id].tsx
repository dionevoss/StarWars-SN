import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { Loader } from '../../components/Loader'

import { NextPage } from 'next'

type TPeopleData = {
  name: string
  gender: string
  hair_color: string
  height: string
}

const People: NextPage = () => {
  const [peopleData, setPeopleData] = useState<TPeopleData>()

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!router.isReady) return
    handleGetPeople()
  }, [router.isReady])

  const handleGetPeople = async () => {
    try {
      const { data } = await axios.get(`https://swapi.dev/api/people/${id}`)
      setPeopleData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {!!peopleData ? (
        <ul>
          <li>Nome: {peopleData.name}</li>
          <li>Sexo: {peopleData.gender}</li>
          <li>Cor de cabelo: {peopleData.hair_color}</li>
          <li>Altura: {peopleData.height}cm</li>
        </ul>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default People
