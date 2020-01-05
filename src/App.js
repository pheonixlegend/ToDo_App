import React, { Component } from 'react';
import Header from './components/layout/Header';
import ToDos from './components/ToDos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with the wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with CEO',
        completed: false
      }
    ]
  }

  // Toggle Completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo;

    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !== id)]});
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
   // console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <ToDos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
