import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { layout, space, SpaceProps, LayoutProps } from 'styled-system'

interface IButton
  extends LayoutProps,
    SpaceProps,
    React.HTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton & PropsWithChildren> = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
)

const StyledButton = styled.button`
  cursor: pointer;
  padding: 16px;
  border: 1px solid gray;
  border-radius: 4px;

  &:hover {
    background-color: #ededed;
  }

  ${layout};
  ${space};
`

export { Button }
