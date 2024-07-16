import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';
import { Typography } from 'antd';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('Fetching todos from localStorage...');
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    console.log('Fetched todos:', savedTodos);
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    console.log('Saving todos to localStorage:', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    console.log('Added todo:', newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    console.log('Toggled complete:', newTodos);
  };

  const editTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    console.log('Editing todo:', newTodos);
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: false } : todo
    );
    setTodos(newTodos);
    console.log('Edited task:', newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    console.log('Deleted todo:', newTodos);
  };

  return (
    <div className="todo-wrapper">
      <Typography className="heading-todo">Get Things Done!</Typography>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
