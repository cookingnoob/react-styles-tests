import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Main from './Main'

/**
* @vitest-environment jsdom
*/

describe('Main component', () => {
  test('renders header', () => {
    render(<Main />)
    const header = screen.getByRole('heading', { level: 1 })
    expect(header).toBeInTheDocument()
  })
})