import Link from 'next/link'

import { Head } from '../components/Head'
import { Button } from '../components/Button'
import { Column } from '../components/Grid'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main>
      <Head />
      <Column width="300px">
        <Link href="/planets">
          <Button>Planets</Button>
        </Link>
        <Link href="/peoples">
          <Button my="16px">Peoples</Button>
        </Link>
        <Link href="/species">
          <Button>Species</Button>
        </Link>
      </Column>
    </main>
  )
}

export default Home
