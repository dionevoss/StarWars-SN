import { FC } from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  grid,
  shadow,
  system,
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
  FlexboxProps,
  ColorProps,
  GridProps,
  ShadowProps,
} from 'styled-system'

export interface RowProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    FlexboxProps,
    Omit<ColorProps, 'color'>,
    GridProps,
    ShadowProps,
    React.HTMLAttributes<HTMLDivElement> {
  cursor?: string
}

const Row: FC<RowProps> = styled.div<RowProps>(
  { display: 'flex' },
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  grid,
  shadow,
  system({ cursor: true })
)

export { Row }
