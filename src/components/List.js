import React from 'react';
import ListItem from './ListItem';

const List = ({ todos }) => (
  <ul>
    {todos.map((item, i) => <ListItem text={item} key={i}/>)}
  </ul>
);

export default List;