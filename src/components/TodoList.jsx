import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    setTodos([...todos, { id: Date.now(), name: newTodo }]);
    setNewTodo('');
  };

  const removeLastHandler = () => {
    if (todos.length === 0) return; // Prevent removing from an empty array

    setTodos(todos.slice(0, -1)); // Removes the last element
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
        <button onClick={removeLastHandler}>Remove Last Entry</button>
      </div>
    </div>
  );
};

export default TodoList;
