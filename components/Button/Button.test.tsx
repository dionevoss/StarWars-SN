import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { Button } from './Button'

describe('button tests', () => {
  it('should render button without errors', () => {
    const testMessage = 'Test Message'
    const { getByRole } = render(<Button>{testMessage}</Button>)

    expect(getByRole('button')).toBeInTheDocument()
  })
})
