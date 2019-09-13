import React from 'react';

import { Layout, Article } from '../../components';

const ArticlePage = (props) =>
  <Layout>
    {console.log(props)}
    <Article {...props.articles[props.match.params.id]} />
  </Layout>
;

export default ArticlePage;
