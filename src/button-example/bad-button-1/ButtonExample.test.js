import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { base, full } from '@sa11y/preset-rules'
import { ButtonExample } from './ButtonExample'

describe('ButtonExample', () => {
  it('renders a button', () => {
    render(<ButtonExample />)

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls the onClick method when clicked', () => {
    jest.spyOn(window, 'alert')
    render(<ButtonExample />)

    fireEvent.click(screen.getByText('Click me'))
    expect(window.alert).toHaveBeenCalled()
  })

  describe.each`
    presetName   | preset
    ${'default'} | ${undefined}
    ${'base'}    | ${base}
    ${'full'}    | ${full}
  `(
    'accessibility check using $presetName preset',
    ({ presetName, preset }) => {
      // Passes, but it really shouldn't.
      // This is an anchor tag acting as a button with a fake href attribute and onClick handler,
      // but we should really be using the button element.
      // The anchor tag only responds to the Enter key to click it,
      // whereas a button element responds to both the Enter and Space keys.
      // The screen reader will also read this as a link and not a button.
      it('is accessible', async () => {
        const { container } = render(<ButtonExample />)
        const Button = document.getElementsByClassName('badButton1')[0]

        await expect(container).toBeAccessible(preset)
        await expect(Button).toBeAccessible(preset)
      })
    }
  )
})
