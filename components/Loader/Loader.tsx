import { FC, memo } from 'react'
import styled from 'styled-components'

interface ILoader {
  size?: string
}

const Loader: FC<ILoader> = ({ size }) => (
  <LoaderComponent
    src="/loader.svg"
    alt="carregando..."
    width={size}
    height={size}
  />
)

Loader.defaultProps = {
  size: '40px',
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
