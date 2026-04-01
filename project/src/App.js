import React from 'react';
import SettingPage from './pages/SettingPage.js'; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SettingPage />
    </div>
    </BrowserRouter>
  );
}

export default App;