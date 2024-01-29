import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WelcomePage from './WelcomePage'

/**
* @vitest-environment jsdom
*/

describe('Main component', () => {
  test('welcome page has an image and a text', () => {
    render(<WelcomePage />)
    const image = screen.getByAltText(/alcazar de cordoba/i)
    const title = screen.getByRole('heading', { level: 1 })
    expect(image).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  });
  test('title button flow', () => {

  })
})