import React from 'react';

export const Select = ({ children }) => {
  return (
    <select name="Author" id="author">
      {children}
    </select>
  );
};
