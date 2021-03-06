import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import Button from './components/Button';

class App extends Component {

  state = {
    todos: [],
    inputValue: ''
  }

  inputValueChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  addTodo = () => {
    this.setState(state => ({
      todos: [...state.todos, state.inputValue],
      inputValue: ''
    }));
  }

  removeTodo = target => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo !== target)
    }));
  }

  render() {
    const { inputValueChange, addTodo, removeTodo } = this;
    const { inputValue, todos } = this.state;

    return (
      <div className="todo-app">
        <Header text="todo app" />
        <Input inputValue={inputValue} inputValueChange={inputValueChange}/>
        <List todos={todos} removeTodo={removeTodo}/>
        <Button addTodo={addTodo} inputValue={inputValue}/>
      </div>
    );
  }
}

export default App;
