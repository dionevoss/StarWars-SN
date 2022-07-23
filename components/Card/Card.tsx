import { FC } from 'react'
import styled from 'styled-components'

const Card: FC = ({ name }) => <StyledCard>{name}</StyledCard>

const StyledCard = styled.div`
  padding: 16px;
`

export { Card }
