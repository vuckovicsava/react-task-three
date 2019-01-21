import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, removeTodo }) => (
  <ul>
    {todos.map((item, i) => (
      <ListItem removeTodo={removeTodo} text={item} key={i}/>
    ))}
  </ul>
);

export default List;