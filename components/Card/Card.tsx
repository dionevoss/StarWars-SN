import { FC } from 'react'
import styled from 'styled-components'

interface ICard {
  name: string
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const Card: FC<ICard> = ({ name, onClick }) => (
  <StyledCard onClick={onClick}>{name}</StyledCard>
)

const StyledCard = styled.div`
  padding: 16px;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:hover {
    background-color: #ededed;
  }
`

export { Card }
