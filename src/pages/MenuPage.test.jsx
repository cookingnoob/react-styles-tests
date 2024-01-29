import MenuPage from "./MenuPage";
import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

/**
* @vitest-environment jsdom
*/
describe('Menu page flow', () => {
  test('renders images and texts', () => {
    render(<MenuPage />)
    const cordobaImage = screen.getByAltText(/mezquita de cordoba/i)
    const cordobaTitle = screen.getByRole('heading', { name: /cordoba/i })
    const barcelonaImage = screen.getByAltText(/sagrada familia/i)
    const barcelonaTitle = screen.getByRole('heading', { name: /barcelona/i })
    const granadaImage = screen.getByAltText(/alhambra/i)
    const granadaTitle = screen.getByRole('heading', { name: /granada/i })
    const madridImage = screen.getByAltText(/catedral de la almudena/i)
    const madridTitle = screen.getByRole('heading', { name: /madrid/i })
    const bottomTitle = screen.getByRole('heading', { name: /visita españa/i })
    expect(cordobaImage).toBeInTheDocument()
    expect(cordobaTitle).toBeInTheDocument()
    expect(barcelonaImage).toBeInTheDocument()
    expect(barcelonaTitle).toBeInTheDocument()
    expect(granadaImage).toBeInTheDocument()
    expect(granadaTitle).toBeInTheDocument()
    expect(madridImage).toBeInTheDocument()
    expect(madridTitle).toBeInTheDocument()
    expect(bottomTitle).toBeInTheDocument()
  })

})