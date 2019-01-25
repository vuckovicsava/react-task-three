import React from 'react';

const Input = ({ inputValue, inputValueChange }) => (
  <input
    type="text"
    value={inputValue}
    onChange={inputValueChange}
  />
);

export default Input;