import React from 'react';

const Button = ({ addTodo }) => (
  <button onClick={addTodo}className="todo-app__button">
    Add New Todo
  </button>
);

export default Button;