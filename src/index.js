import React from 'react';
import { render } from 'react-dom';

import LANY from '../assets/LANY-CLASSIC.jpg';
import './style.scss';

render(
  <React.Fragment>
    <h1>Hello world!</h1>
    <img src={LANY} alt='LANY' />
  </React.Fragment>,
  document.getElementById('app')
);
