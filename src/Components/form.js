import React from 'react';

const PageContent = ({ content, tokens, onWordClick }) => {
  return (
    <div>
      {content.split(' ').map((word, index) => (
        <span key={index} onClick={() => onWordClick(tokens[index].value)}>
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

export default PageContent;