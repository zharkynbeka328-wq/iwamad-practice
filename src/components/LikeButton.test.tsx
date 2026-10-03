import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

describe('LikeButton', () => {
  it('changes visible text after clicking', () => {
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>,
    )

    const button = screen.getByRole('button', {
      name: /Like \(0\)/i,
    })

    expect(button).toHaveTextContent('Like (0)')

    fireEvent.click(button)

    expect(button).toHaveTextContent('Like (1)')
  })
})