import { FC } from 'react'
import Head from 'next/head'

interface IHeadComponent {
  title?: string
}

const HeadComponent: FC<IHeadComponent> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={title} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

HeadComponent.defaultProps = {
  title: 'Star Wars SN',
}

export { HeadComponent }
