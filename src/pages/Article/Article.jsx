import React from 'react';

import { Layout, Article } from '../../components';

import DATA from '../../data.json';

const ArticlePage = (props) =>
  <Layout>
    {console.log(props)}
    <Article {...DATA[props.match.params.id]} />
  </Layout>
;

export default ArticlePage;
