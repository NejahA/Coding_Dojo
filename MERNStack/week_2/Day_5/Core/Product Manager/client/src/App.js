import './App.css';
import { useState,useEffect  } from 'react';
import axios from "axios"
import Main from './views/Main'
function App() {
  const [prodcut, setProduct]  = useState(null);
  const handleSubmit=  (e) => {
    e.preventDefautl();
    axios.post("http://localhost:8000/api/products/new")
  }
  return (<>
    <div className="App">
      <Main />
    </div>
  </>
  );
}

export default App;
