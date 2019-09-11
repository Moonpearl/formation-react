import React from 'react';
import './Article.css';

const Article = (props) => {
  const { className, title, date, content } = props;

  return (
    <article className={`App-article ${className}`}>
      {/* Commentaire */}
      <h2>{title}</h2>
      <div className="date">{date}</div>
      <p>{content}</p>
    </article>
  );
}

export default Article;
