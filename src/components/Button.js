import React from 'react';

const Button = ({ addTodo, inputValue }) => (
  <button 
    className="todo-app__button"
    onClick={addTodo} 
    disabled={inputValue.length > 0 ? false : true}
  >
    Add New Todo
  </button>
);

export default Button;