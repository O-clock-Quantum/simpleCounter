import React from 'react';

import './app.scss';

import Counter from 'src/containers/Counter';
import Button from 'src/containers/Button';

const App = () => (
  <main id="app">
    <Counter />
    <Button name="oui" />
    <Button name="non" />
  </main>
);

export default App;
