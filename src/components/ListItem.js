import React from 'react';

const ListItem = ({ text, removeTodo }) => (
  <li className="todo-app__item">
    <span>{text}</span>
    <i onClick={() => removeTodo(text)} class="fas fa-trash-alt"></i>
  </li>
);

export default ListItem;