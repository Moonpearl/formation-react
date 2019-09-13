import React from 'react';
import './Sidebar.css';

const Sidebar = (props) =>
  <aside className="App-sidebar" >
    { props.logged ?
      <div>Bonjour {props.logged.username}!</div>
    : null }
    <ul>
      {props.articleTitles.map( (articleTitle, index) =>
        <li key={index}>
          {articleTitle}
        </li>
      )}
    </ul>
  </aside>
;

export default Sidebar;
