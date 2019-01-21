import React, { Component } from 'react';
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

  addTodo = newTodo => {
    console.log('added');
    this.setState(state => {
      state.todos.push(newTodo);
      state.inputValue = '';
    });
  }

  render() {
    const { inputValue, todos } = this.state;

    return (
      <div className="App">
        <Input inputValue={inputValue} inputValueChange={this.inputValueChange}/>
        <List todos={todos}/>
        <Button addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
