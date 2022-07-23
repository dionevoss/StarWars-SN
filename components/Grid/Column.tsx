import { FC } from 'react'
import { Row, RowProps } from './Row'

export type ColumnProps = RowProps

const Column: FC<ColumnProps> = (props) => (
  <Row flexDirection="column" {...props} />
)

export { Column }
