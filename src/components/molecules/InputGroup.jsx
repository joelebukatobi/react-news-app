import React from 'react';

export const InputGroup = ({ children }) => {
  return (
    <div aria-label="input-group">
      <div className="relative">{children}</div>
    </div>
  );
};
