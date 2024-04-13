import {Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Register from './components/Register';
import Home from './components/Home';
import Cart from './components/cart';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ='/login' element={<Register />} />
         <Route path='/' element={<Home/>} />        
         <Route path='/cart' element={<Cart/>} />
      </Routes>

    </div>
  );
}

export default App;
