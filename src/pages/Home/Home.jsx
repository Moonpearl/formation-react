import React from 'react';

import { Article, Layout } from '../../components';

const DATA = [
  {
    title: 'React c\'est cool',
    class: 'blue',
    date: '2019-02-05',
    content: 'Nisi Lorem exercitation elit voluptate sint.',
  },
  {
    title: 'Le JSX aussi',
    class: 'red',
    date: '2019-02-05',
    content: 'Mollit elit quis officia laborum aliqua adipisicing sit.',
  },
  {
    title: 'Et les props encore plus',
    class: 'green',
    date: '2019-02-05',
    content: 'Qui enim ullamco pariatur anim ad ullamco labore enim id consectetur ex.',
  },
];

const Home = () =>
  <Layout>
    {DATA.map( item =>
      <Article {...item} />
    )}
  </Layout>
;

export default Home;
