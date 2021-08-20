import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { base, full } from '@sa11y/preset-rules'
import { axe } from 'jest-axe'
import { ModalExample } from './ModalExample'

describe('ModalExample', () => {
  it('renders a button to open the modal', () => {
    render(<ModalExample />)

    expect(screen.getByText('Open modal')).toBeInTheDocument()
  })

  describe.each`
    presetName   | preset
    ${'default'} | ${undefined}
    ${'base'}    | ${base}
    ${'full'}    | ${full}
  `(
    'accessibility check using $presetName preset',
    ({ presetName, preset }) => {
      // Passes
      it('is accessible when the modal is closed', async () => {
        const { container } = render(<ModalExample />)

        await expect(container).toBeAccessible(preset)
      })

      // Passes
      it('is accessible when the modal is open', async () => {
        const { container } = render(<ModalExample />)

        fireEvent.click(screen.getByText('Open modal'))
        expect(screen.getByText('Close')).toBeInTheDocument()

        await expect(container).toBeAccessible(preset)
      })
    }
  )

  describe('jest-axe', () => {
    // Passes
    it('is accessible when the modal is closed', async () => {
      const { container } = render(<ModalExample />)

      expect(await axe(container)).toHaveNoViolations()
    })

    // Passes
    it('is accessible when the modal is open', async () => {
      const { container } = render(<ModalExample />)

      fireEvent.click(screen.getByText('Open modal'))
      expect(screen.getByText('Close')).toBeInTheDocument()

      expect(await axe(container)).toHaveNoViolations()
    })
  })
})
