import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ModalExample } from './ModalExample'

describe('ModalExample', () => {
  it('renders a button to open the modal', () => {
    render(<ModalExample />)

    expect(screen.getByText('Open modal')).toBeInTheDocument()
  })

  // Passes
  it('is accessible when the modal is closed', async () => {
    const { container } = render(<ModalExample />)

    await expect(container).toBeAccessible()
  })

  // Passes
  it('is accessible when the modal is open', async () => {
    const { container } = render(<ModalExample />)

    fireEvent.click(screen.getByText('Open modal'))
    expect(screen.getByText('Close')).toBeInTheDocument()

    await expect(container).toBeAccessible()
  })
})
