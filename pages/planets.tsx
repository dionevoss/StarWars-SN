import axios from 'axios'
import { useRouter } from 'next/router'

import { Head } from '../components/Head'
import { Card } from '../components/Card'
import { Column } from '../components/Grid'

import type { NextPage } from 'next'

interface IPlanets {
  planetsData: {
    name: string
  }[]
}

export async function getServerSideProps() {
  const response = await axios.get(`https://swapi.dev/api/planets`)
  const planetsData = response.data.results
  return {
    props: {
      planetsData,
    },
  }
}

const Planets: NextPage<IPlanets> = ({ planetsData }) => {
  const router = useRouter()
  return (
    <>
      <Head title="Planets" />
      <Column width="300px">
        {planetsData.map((planet, index) => (
          <Column
            key={planet.name}
            cursor="pointer"
            borderRadius="4px"
            boxShadow="2px 2px 10px -4px #525354"
            my="8px"
          >
            <Card
              onClick={() => router.push(`planets/${index + 1}`)}
              name={planet.name}
            />
          </Column>
        ))}
      </Column>
    </>
  )
}

export default Planets
