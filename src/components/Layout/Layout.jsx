import React from 'react';
import { Header, Sidebar, Main, Footer } from '../';

const Layout = (props) =>
  <div className="App">
    <Header />
    <Sidebar />
    <Main>
      {props.children}
    </Main>
    <Footer />
  </div>
;

export default Layout;
