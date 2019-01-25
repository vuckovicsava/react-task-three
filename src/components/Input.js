import React from 'react';

const Input = ({ inputValue, inputValueChange }) => (
  <input
    className="todo-app__input"
    type="text"
    placeholder="add a new todo"
    value={inputValue}
    onChange={inputValueChange}
  />
);

export default Input;