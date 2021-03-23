import React from 'react';

import laborImg from './assets/images/service_labor.jpg';
import familiarImg from './assets/images/service_familiar.jpg';
import civilImg from './assets/images/service_civil.jpg';
import commercialImg from './assets/images/service_commercial.jpg';
import { Name, Logo, Contact, ServiceList } from './components';

import './App.scss';

const SERVICSES = [
  {
    title: 'Familiar',
    content: '',
    list: ['Divorcios', 'Aumento/Reducción de pensión alimenticia', 'Reconocimiento de paternidad', 'Declaración de incapacidad de persona'],
    picture: familiarImg,
  },
  {
    title: 'Laboral',
    content: '',
    list: ['Despidos', 'Contratos', 'Reglamento interior de trabajo'],
    picture: laborImg,
  },
  {
    title: 'Civil',
    content: '',
    list: ['Juicios mercantiles (ejecución de pagarés, cheques, letras de cambio)', 'Constitución de sociedades', 'Juicios testamentarios e intestamentarios'],
    picture: civilImg,
  },
  {
    title: 'Comercial',
    content: '',
    list: ['Contratos', 'Concursos y quiebras', 'Representación en juicios', 'Seguros'],
    picture: commercialImg,
  }
];

function App () {
  return (
    <div className="App">
      <div className='App__header'>
        <Logo width={150} />
        <Name />
      </div>
      <div className='App__body'>
        <Contact />
        <ServiceList services={SERVICSES} />
      </div>
    </div>
  );
}

export default App;
