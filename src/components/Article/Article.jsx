import React from 'react';
import './Article.css';

const Article = (props) => 
  <article className={`App-article ${props.class}`}>
    {/* Commentaire */}
    <h2>{props.title}</h2>
    <div className="date">{props.date}</div>
    <p>{props.content}</p>
  </article>
;

export default Article;
