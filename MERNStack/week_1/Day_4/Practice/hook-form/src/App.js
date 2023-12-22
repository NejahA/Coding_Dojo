import { useState } from 'react';
import './App.css';

function App() {

    const [firstName, setFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");  
  
      const CreateUser = (e) => {
        e.preventDefault()
      //   const newUser = { 
      //     firstName: firstName,
      //     lastName: lastName, 
      //     email: email, 
      //     password: password,
      //     confPassword: confPassword
      // };


      } 


  return (
    <div className="App">
      <form onSubmit={CreateUser}>

      <div className='form-input'>
      <label htmlFor="">First Name :</label>
      <input type="text"  onChange={ (e) => setFirstName(e.target.value) }  value={firstName}/>
      </div>
      <div className='form-input'>
      <label htmlFor="">Last Name :</label>
      <input type="text"  onChange={ (e) => SetLastName(e.target.value) } value={lastName} />
      </div>
      <div className='form-input'>
      <label htmlFor="">Email :</label>
      <input type="text"  onChange={ (e) => setEmail(e.target.value) } value={email} />
      </div>
      <div className='form-input'>
      <label htmlFor="">Password :</label>
      <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}  />
      </div>
      <div className='form-input'>
      <label htmlFor="">Confirm Password :</label>
      <input type="text"  onChange={ (e) => setConfPassword(e.target.value) }  value={confPassword}/>
      </div>
      </form>
      <div className='display' >
      <div className='form-display'><h4>First Name :   {firstName}  </h4></div>
      <div className='form-display'><h4>Last Name :   {lastName}  </h4></div>
      <div className='form-display'><h4>Email :  {email}   </h4></div>
      <div className='form-display'><h4>Password :  {password}  </h4></div>
      <div className='form-display'><h4>Confirm Password :   {confPassword} </h4></div>
      </div>
    </div>
  );
}

export default App;
