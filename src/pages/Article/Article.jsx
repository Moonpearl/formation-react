import React from 'react';

import { Layout, Article } from '../../components';

const ArticlePage = (props) =>
  <Layout>
    <Article {...props.articles[props.match.params.id]} />
  </Layout>
;

export default ArticlePage;
