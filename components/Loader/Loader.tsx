import { FC, memo } from 'react'
import styled from 'styled-components'

import { Row } from '../Grid'

interface ILoader {
  size?: string
}

const Loader: FC<ILoader> = ({ size }) => (
  <Row width="100%" height="90vh" alignItems="center" justifyContent="center">
    <LoaderComponent
      src="/loader.svg"
      alt="carregando..."
      width={size}
      height={size}
    />
  </Row>
)

Loader.defaultProps = {
  size: '100px',
}

const LoaderComponent = styled.img`
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const MemoizedLoader = memo(Loader)

export { MemoizedLoader }
