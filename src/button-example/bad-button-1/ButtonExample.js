import React from 'react'
import { Button } from './Button'

export const ButtonExample = () => (
  <>
    <h2>Bad Button Example 1</h2>
    <Button buttonText="Click me" onClick={() => alert('Clicked!')} />
  </>
)
