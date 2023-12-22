import { useState } from 'react';
import './App.css';

function App() {

    const [firstName, setFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");  
  
      const CreateUser = (e) => {
        

      } 


  return (
    <div className="App">
      <form onSubmit={CreateUser}>

      <div className='form-input'>
      <label htmlFor="">First Name :</label>
      <input type="text"  onChange={ (e) => setFirstName(e.target.value) }  value={firstName}/>
      {  (firstName.length<2)&&(firstName.length !=0) ?  <p>First Name must be at least 2 characters </p>: <></> }
      </div>

      <div className='form-input'>
      <label htmlFor="">Last Name :</label>
      <input type="text"  onChange={ (e) => SetLastName(e.target.value) } value={lastName} />
      {  lastName.length<2 && lastName.length !=0?  <p>Last Name must be at least 2 characters </p>: <></> }

      </div>
      <div className='form-input'>
      <label htmlFor="">Email :</label>
      <input type="text"  onChange={ (e) => setEmail(e.target.value) } value={email} />
      {  email.length<5 && email.length!=0 ?  <p>First Name must be at least 5 characters </p>: <></> }

      </div>
      <div className='form-input'>
      <label htmlFor="">Password :</label>
      <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}  />
      {  ((password.length<8) || (password!= confPassword))&& password.length!=0?  <p>Password must be the same in the two fields and at least 8 characters </p>: <></> }

      </div>
      <div className='form-input'>
      <label htmlFor="">Confirm Password :</label>
      <input type="text"  onChange={ (e) => setConfPassword(e.target.value) }  value={confPassword}/>
      </div>
      </form>
    </div>
  );
}

export default App;
