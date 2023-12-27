import './App.css';
import axios from 'axios';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Form from './Form';
import Display from "./Display"
import { useState,useEffect  } from 'react';






function App() {
  const [item,SetItem] = useState()
  return (
    <div className="App">
      <Form  />
      <Routes>
        <Route path={`/:category/:id`}  element={<Display  />} />
      </Routes>
    </div>
  );
}

export default App;
