import React from 'react'
import { Button } from './Button'

export const ButtonExample = () => (
  <>
    <h2>Good Button Example</h2>
    <Button buttonText="Click me" onClick={() => alert('Clicked!')} />
  </>
)
