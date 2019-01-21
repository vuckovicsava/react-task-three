import React from 'react';

const ListItem = ({ text, removeTodo }) => (
<li>{text}<strong onClick={() => removeTodo(text)}>REMOVE</strong></li>
);

export default ListItem;