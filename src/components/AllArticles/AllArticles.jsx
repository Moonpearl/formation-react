import React, { Fragment } from 'react';
import { Article } from '../';

const AllArticles = (props) =>
  <Fragment>
    {console.log('Store state = ', props)}
    <h1>Liste des articles</h1>
    {props.articles.map( item =>
      <Article {...item} />
    )}
  </Fragment>
;

export default AllArticles;
