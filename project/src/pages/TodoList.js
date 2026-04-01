import React from 'react';

function TodoList({ todos = [], onToggle, onRemove }) {

  if (todos.length === 0) {
    return (
      <div className="list-container empty-state">
        <p style={{ color: '#ccc' }}>새로운 할 일을 등록해 보세요!</p>
      </div>
    );
  }

  const isAllDone = todos.every(todo => todo.isDone);

  if (isAllDone) {
    return (
      <div className="list-container empty-state">
        <div className="check-circle">✓</div>
        <p>할 일을 모두 완료했습니다!</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      {todos.map(todo => (
        <div key={todo.id} className="todo-item">
          <input 
            type="checkbox" 
            checked={todo.isDone} 
            onChange={() => onToggle?.(todo.id)} 
          />
          <span className={todo.isDone ? 'done' : ''}>
            {todo.text}
          </span>
          <button 
            className="remove-btn" 
            onClick={() => onRemove?.(todo.id)}
          >
            <span role="img" aria-label="remove">⊖</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;