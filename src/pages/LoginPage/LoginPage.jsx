import React, { useState } from 'react'
import './loginpage.scss'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const auth = getAuth();
    const navigate = useNavigate();


    function loginUser(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(user => console.log(user)).catch(e => console.log(e))
        navigate('/')
    }
  return (
    <form onSubmit={(loginUser)}>
        <div className="form-inner">
        <h3>Log in</h3>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value="Log in"/>
        <Link className="NavLink" to='/register'>Don't have an account</Link>
        </div>
    </form>
    
  )
}
