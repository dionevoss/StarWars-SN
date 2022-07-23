import axios from 'axios'

import { Head } from '../components/Head'
import { Card } from '../components/Card'
import { Row, Column } from '../components/Grid'

import type { NextPage } from 'next'

interface IHome {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  planetsData: any[]
}

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.API}/planets`)
  const planetsData = response.data.results
  return {
    props: {
      planetsData,
    },
  }
}

const Home: NextPage<IHome> = ({ planetsData }) => {
  return (
    <div>
      <Head />
      <Row>
        {planetsData.map((planet) => (
          <Column
            key={planet.name}
            cursor="pointer"
            borderRadius="4px"
            boxShadow="2px 2px 10px -4px #525354"
            mr="16px"
          >
            <Card name={planet.name} />
          </Column>
        ))}
      </Row>
    </div>
  )
}

export default Home
