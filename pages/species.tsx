import axios from 'axios'
import { useRouter } from 'next/router'

import { Head } from '../components/Head'
import { Card } from '../components/Card'
import { Column } from '../components/Grid'

import type { NextPage } from 'next'

interface ISpecies {
  speciesData: {
    name: string
  }[]
}

export async function getServerSideProps() {
  const response = await axios.get(`https://swapi.dev/api/species`)
  const speciesData = response.data.results
  return {
    props: {
      speciesData,
    },
  }
}

const Planets: NextPage<ISpecies> = ({ speciesData }) => {
  const router = useRouter()
  return (
    <>
      <Head title="Planets" />
      <Column width="300px">
        {speciesData.map((specie, index) => (
          <Column
            key={specie.name}
            cursor="pointer"
            borderRadius="4px"
            boxShadow="2px 2px 10px -4px #525354"
            my="8px"
          >
            <Card
              onClick={() => router.push(`species/${index + 1}`)}
              name={specie.name}
            />
          </Column>
        ))}
      </Column>
    </>
  )
}

export default Planets
