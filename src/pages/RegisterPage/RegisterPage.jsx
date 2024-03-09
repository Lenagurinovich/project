import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './registerpage.scss'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterPage() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errConfPassword, setErrConfPassword] = useState(false)

    const auth = getAuth();
    const navigate = useNavigate();
    

    function validPass(){
        return password === confirmPassword;
    }
    async function createUser(event) {
        event.preventDefault()
        if (!validPass()){
            setErrConfPassword(true)
            return;
        }
        setErrConfPassword(false);
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => navigate('/'))
    }

  return (
    <form onSubmit={createUser}>
        <div className="form-inner">
        <h3>Sign up</h3>
        <input type="text" placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <input type="text" placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        {errConfPassword && <p>Passwords don't match</p>}
        <input type="password" placeholder='Confirm the password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <input type="submit" value="Sign up"/>
        <Link className="NavLink" to='/login'>I already have an account</Link>
        </div>
    </form>
  )
}
