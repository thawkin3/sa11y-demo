import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { base, full } from '@sa11y/preset-rules'
import { axe } from 'jest-axe'
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
      // Passes
      it('is accessible for the entire example', async () => {
        const { container } = render(<ButtonExample />)
        const Button = document.getElementsByClassName('goodButton')[0]

        await expect(container).toBeAccessible(preset)
        await expect(Button).toBeAccessible(preset)
      })
    }
  )

  it('reports no a11y violations from jest-axe', async () => {
    const { container } = render(<ButtonExample />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
