import React from 'react';
import TodoList from './TodoList';
import './TodoList/TodoList.css';

class App extends React.Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Task 1', completed: true },
      { id: 'id-2', text: 'Task 2', completed: false },
      { id: 'id-3', text: 'Task 3', completed: false },
    ],
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

    this.setState((previousState) => ({
      todos: previousState.todos.map(todo => todo.id === todoId ? {
            ...todo,
            completed: !todo.completed
          } : todo)
    }))
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const totalCompletedTodoCount = (todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0
    ));

    return (
      <>
        <div className='TodoListBox'>
          <h2 className='TodoList__title'>TodoList</h2>
          <div>
            <p>Total Todos: <span className='TodoList__totalCount'>{totalTodoCount}</span></p>
            <p>Total Done: <span className='TodoList__totalCount'>{totalCompletedTodoCount}</span></p>
          </div>
          <TodoList
            todos={todos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
        </div>
      </>
    );
  };
}

export default App;