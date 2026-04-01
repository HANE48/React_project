import React from 'react';

function TodoList({ todos, onToggle, onRemove }) {
  
  // 1. 처음 시작해서 할 일이 아예 하나도 없을 때 (완전 빈 상태)
  if (todos.length === 0) {
    return (
      <div className="list-container empty-state">
        <p style={{ color: '#ccc' }}>새로운 할 일을 등록해 보세요!</p>
      </div>
    );
  }

  // 2. 할 일은 있는데, '모두' 체크해서 완료했을 때
  const isAllDone = todos.every(todo => todo.isDone);
  if (isAllDone) {
    return (
      <div className="list-container empty-state">
        <div className="check-circle">✓</div>
        <p>할 일을 모두 완료했습니다!</p>
      </div>
    );
  }

  // 3. 할 일이 남아있을 때 (리스트 보여주기)
  return (
    <div className="list-container">
      {todos.map(todo => (
        <div key={todo.id} className="todo-item">
          <input 
            type="checkbox" 
            checked={todo.isDone} 
            onChange={() => onToggle(todo.id)} 
          />
          <span className={todo.isDone ? 'done' : ''}>{todo.text}</span>
          <button className="remove-btn" onClick={() => onRemove(todo.id)}>
            <span role="img" aria-label="remove">⊖</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;