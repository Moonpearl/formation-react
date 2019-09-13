import React from 'react';

import { AllArticles, Layout } from '../../components';
import AllArticlesContainer from '../../redux/containers/AllArticlesContainer';

const Home = () =>
  <Layout>
    <AllArticlesContainer />
  </Layout>
;

export default Home;
