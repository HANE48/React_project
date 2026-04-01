import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainHome from './pages/MainHome';
import SelectEmotion from './components/SelectEmotion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/main/:id' element={<MainHome/>}/>
          <Route path='/selectEmotion/:id' element={<SelectEmotion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
