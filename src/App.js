import React from 'react'
import { ButtonExample as BadButtonExample1 } from './button-example/bad-button-1/ButtonExample'
import { ButtonExample as BadButtonExample2 } from './button-example/bad-button-2/ButtonExample'
import { ButtonExample as GoodButtonExample } from './button-example/good-button/ButtonExample'
import { ImageExample as BadImageExample } from './image-example/bad-image/ImageExample'
import { ImageExample as GoodImageExample } from './image-example/good-image/ImageExample'
import { ModalExample as BadModalExample } from './modal-example/bad-modal/ModalExample'
import { ModalExample as GoodModalExample } from './modal-example/good-modal/ModalExample'
import './App.css'

function App() {
  return (
    <main className="App">
      <h1>Accessibility Testing with sa11y</h1>
      <BadButtonExample1 />
      <hr />
      <BadButtonExample2 />
      <hr />
      <GoodButtonExample />
      <hr />
      <BadImageExample />
      <hr />
      <GoodImageExample />
      <hr />
      <BadModalExample />
      <hr />
      <GoodModalExample />
    </main>
  )
}

export default App
