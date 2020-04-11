import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';

import LANY from '../assets/LANY-CLASSIC.jpg';
import './styles/style.scss';
import './styles/something.scss';

console.log("Nisa cantik!");

render(
  <React.Fragment>
    <h1>Hello world!</h1>
    <Header />
    <img src={LANY} alt='LANY' />
  </React.Fragment>,
  document.getElementById('app')
);
