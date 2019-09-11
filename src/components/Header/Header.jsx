import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import { LoginButton } from '..';

const Component = () =>
  <header className="App-header" >
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
    <LoginButton />
  </header>
;

export default Component;
