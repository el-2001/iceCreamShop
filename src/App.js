import React from 'react';
import './App.css';
import {Navbar} from './features/Navbar/Navbar.js';
import {Home} from './features/Home/Home.js';
import {OrderNow} from './features/OrderNow/OrderNow.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ReviewOrder} from "./features/ReviewOrder/ReviewOrder.js";
function App() {
  return (
    <Router>
       <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/OrderNow' element={<OrderNow/>}/>
        <Route path='ReviewOrder' element={<ReviewOrder/>}/>
      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
