import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, removeTodo }) => {
  if (todos.length === 0) {
    return <h1>No items in to-do list</h1>;
  } else {
    return (
      <ul>
        {todos.map((item, i) => (
          <ListItem removeTodo={removeTodo} text={item} key={i}/>
        ))}
      </ul>
    );
  }
}

export default List;