import React, { useState } from 'react'
import axios from 'axios';
function Register() {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

    async function handleSubmit(ev){
        ev.preventDefault();
        try{
            const response = await axios.post('register',{email,password});
            alert('registration succesfull')
        }
        catch(err){
            alert('registration failed');
        }
        
    }

  return (
    <form  onClick={handleSubmit}>   
        <div>
            <label>email</label>;
            <input type='text' value={email} onChange={ev => setEmail(ev.target.value)}/>
        </div>
        <div>
            <label>password</label>;
            <input type='text' value={password} onChange={ev => setPassword(ev.target.value)}/>
        </div>
        <button>Submit</button>
    </form>
  )
}

export default Register;