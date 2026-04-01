import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoInput from './TodoInput'; //라헬 담당
import TodoList from './TodoList'; //굥 담당
import ToDo from './pages/ToDo';

  function App() {
  // 1. 전체 할 일 목록 상태 (이게 B님한테 전달됨)
  const [todos, setTodos] = useState([
    { id: 1, text: "Redux 공부하기", isDone: false },
    { id: 2, text: "리액트 협업하기", isDone: true }
  ]);

  // 2. [체크박스 토글] 함수 (B님이 클릭하면 실행됨)
  const onToggle = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  // 3. [삭제] 함수 (B님이 클릭하면 실행됨)
  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 4. [추가] 함수 (A님이 입력하면 실행됨)
  const onCreate = (text) => {
    const newTodo = { id: Date.now(), text, isDone: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      
    </div>
  );
}

export default App;