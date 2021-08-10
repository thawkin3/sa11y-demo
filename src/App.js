import React from 'react';
import { ModalExample as BadModalExample } from './modal-example/bad-modal/ModalExample';
import { ModalExample as GoodModalExample } from './modal-example/good-modal/ModalExample';
import "./App.css";

function App() {
  return (
    <main className="App">
      <h1>Accessibility Testing with sa11y</h1>
      <BadModalExample />
      <hr />
      <GoodModalExample />
    </main>
  );
}

export default App;
