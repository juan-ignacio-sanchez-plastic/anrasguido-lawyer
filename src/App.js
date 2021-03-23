import React from 'react';

import { Name, Logo } from './components';

import './App.scss';
import Contact from './components/Contact/Contact';

function App () {
  return (
    <div className="App">
      <header className='App__header'>
        <Logo width={150} />
        <Name />
      </header>
      <body className='App__body'>
        <Contact />
      </body>
    </div>
  );
}

export default App;
