import React from 'react';

export const Select = ({ name, id, option, value }) => {
  return (
    <select name={name} id={id}>
      <option value={value}>{option}</option>
    </select>
  );
};
