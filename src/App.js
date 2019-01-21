import React, { Component } from 'react';
import Input from './components/Input';
import List from './components/List';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input/>
        <List/>
        <Button/>
      </div>
    );
  }
}

export default App;
