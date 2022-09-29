import logo from './logo.svg';
import './App.css';
import './style.css'
import Navbar from './components/Navbar';
import AddData from './components/AddData';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/adddata" element={<AddData />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
