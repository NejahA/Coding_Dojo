import './App.css';
import {  Routes,  Route,  Link, useParams} from "react-router-dom";

const Home = () => {
  return (<h1>Welcome</h1>)
}
const DisplaySimple = (props) => {
  const {text} = useParams()
  
      if (isNaN(+text)) {
        return <h1>The text is : {text}</h1>
      }
      else {return <h1>The Number is : {text}</h1>}
}
const DisplayComplex = (props) => {
  const {text, color, bgcolor} = useParams()
  if (isNaN(+text)) {
    return <h1 style={{color:color, backgroundColor:bgcolor}}>The text is : {text}</h1>
  }
  else {return <h1 style={{color:color, backgroundColor:bgcolor}}>The Number is : {text}</h1>}
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/:text' element={<DisplaySimple/>} />
        <Route path='/:text/:color/:bgcolor' element={<DisplayComplex/>} />

      </Routes>
    </div>
  );
}

export default App;
