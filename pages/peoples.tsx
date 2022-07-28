import axios from 'axios'
import { useRouter } from 'next/router'

import { Head } from '../components/Head'
import { Card } from '../components/Card'
import { Column } from '../components/Grid'

import type { NextPage } from 'next'

interface IPeople {
  peopleData: {
    name: string
  }[]
}

export async function getServerSideProps() {
  const response = await axios.get(`https://swapi.dev/api/people`)
  const peopleData = response.data.results
  return {
    props: {
      peopleData,
    },
  }
}

const Peoples: NextPage<IPeople> = ({ peopleData }) => {
  const router = useRouter()
  return (
    <>
      <Head title="People" />
      <Column width="300px">
        {peopleData.map((people, index) => (
          <Column
            key={people.name}
            cursor="pointer"
            borderRadius="4px"
            boxShadow="2px 2px 10px -4px #525354"
            my="8px"
          >
            <Card
              onClick={() => router.push(`peoples/${index + 1}`)}
              name={people.name}
            />
          </Column>
        ))}
      </Column>
    </>
  )
}

export default Peoples
