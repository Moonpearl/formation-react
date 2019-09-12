import React from 'react';

import styled from 'styled-components';

const HOVER_COLOR = '#eee';

const Container = styled.article`
  margin-bottom: 3em;

  &:hover {
    background: ${HOVER_COLOR};
  }
`;

const Date = styled.div`
  color: grey;
  font-size: .75em;
`;

const Article = (props) => {
  const { className, title, date, content } = props;

  return (
    <Container>
      {/* Commentaire */}
      <h2>{title}</h2>
      <Date>{date}</Date>
      <p>{content}</p>
    </Container>
  );
}

export default Article;
