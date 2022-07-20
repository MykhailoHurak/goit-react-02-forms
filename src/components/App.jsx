import React from 'react';
import shortid from 'shortid';
import TodoList from './TodoList';
import './TodoList/TodoList.css';

import TodoEditor from './TodoEditor';
import TodoFilter from './TodoFilter';

class App extends React.Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Man Utd', completed: true },
      { id: 'id-2', text: 'Man City', completed: false },
      { id: 'id-3', text: 'Chelsea London', completed: false },
      { id: 'id-4', text: 'Arsenal London', completed: false },
    ],
    filter: ''
  };

  addTodo = (text) => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };

    this.setState((previousState) => ({
      todos: [todo, ...previousState.todos],
    }))
  };

  deleteTodo = (todoId) => {
    this.setState((previousState) => ({
      todos: previousState.todos.filter(todo => todo.id !== todoId)
    }))
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    // this.setState((previousState) => ({
    //   todos: previousState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       };
    //     }
    //     return todo;
    //   })
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
    }))
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.todos.filter((todo) => (
      todo.text.toLowerCase().includes(normalizedFilter)
    ))
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0
    )
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const totalCompletedTodoCount = this.calculateCompletedTodos();

    // const normalizedFilter = this.state.filter.toLowerCase();

    // const visibleTodos = this.state.todos.filter((todo) => (
    //   todo.text.toLowerCase().includes(normalizedFilter)
    // ))

    const visibleTodos = this.getVisibleTodos();
    
    return (
      <>
        <div className='TodoListBox'>
          <h2 className='TodoList__title'>TodoList</h2>
          <div>
            <p>Total Todos: <span className='TodoList__totalCount'>{totalTodoCount}</span></p>
            <p>Total Done: <span className='TodoList__totalCount'>{totalCompletedTodoCount}</span></p>
          </div>

          <TodoEditor
            onSubmit={this.addTodo}
          />

          <TodoFilter
            value={this.state.filter}
            onChange={this.changeFilter}
          />

          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
      </>
    );
  };
}

export default App;