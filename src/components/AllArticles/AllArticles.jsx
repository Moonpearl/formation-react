import React, { Fragment } from 'react';
import { Article } from '../';

const AllArticles = (props) =>
  <Fragment>
    <h1>Liste des articles</h1>
    {props.articles.map( (item, index) =>
      <Article key={index} {...item} />
    )}
  </Fragment>
;

export default AllArticles;
