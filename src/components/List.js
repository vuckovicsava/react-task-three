import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, removeTodo }) => {
  // if (todos.length === 0) {
  //   return <h1>No items in to-do list</h1>;
  // } else {
    return (
      <ul className="todo-app__item-list">
        <ListItem removeTodo={removeTodo} text="Random" />
        <ListItem removeTodo={removeTodo} text="Another" />
        {todos.map((item, i) => (
          <ListItem removeTodo={removeTodo} text={item} key={i}/>
        ))}
      </ul>
    );
  // }
}

export default List;