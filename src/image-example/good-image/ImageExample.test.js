import React from 'react'
import { render, screen } from '@testing-library/react'
import { base, full } from '@sa11y/preset-rules'
import { axe } from 'jest-axe'
import { ImageExample } from './ImageExample'

describe('ImageExample', () => {
  it('renders an image', () => {
    const { container } = render(<ImageExample />)

    expect(container.querySelector('img')).toBeInTheDocument()
  })

  describe.each`
    presetName   | preset
    ${'default'} | ${undefined}
    ${'base'}    | ${base}
    ${'full'}    | ${full}
  `(
    'accessibility check using @sa11y/jest $presetName preset',
    ({ presetName, preset }) => {
      // Passes, but it really shouldn't.
      // This is an anchor tag acting as a button with a fake href attribute and onClick handler,
      // but we should really be using the button element.
      // The anchor tag only responds to the Enter key to click it,
      // whereas a button element responds to both the Enter and Space keys.
      // The screen reader will also read this as a link and not a button.
      it('is accessible', async () => {
        const { container } = render(<ImageExample />)

        await expect(container).toBeAccessible(preset)
      })
    }
  )

  it('reports no a11y violations from jest-axe', async () => {
    const { container } = render(<ImageExample />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
