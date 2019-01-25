import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, removeTodo }) => {
  if (todos.length === 0) {
    return <h2 className="empty">No items in to-do list</h2>;
  } else {
    return (
      <ul className="todo-app__item-list">
        {todos.map((item, i) => (
          <ListItem removeTodo={removeTodo} text={item} key={i}/>
        ))}
      </ul>
    );
  }
}

export default List;