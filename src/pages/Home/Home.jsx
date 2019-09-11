import React from 'react';

import { Article, Layout } from '../../components';

import DATA from '../../data.json';

const Home = () =>
  <Layout>
    <h1>Liste des articles</h1>
    {DATA.map( item =>
      <Article {...item} />
    )}
  </Layout>
;

export default Home;
