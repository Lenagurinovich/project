import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import './profile.scss'

export default function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();


    function logOutUser(){
        signOut(auth);
        navigate('/login')
    }
    
  return (
    <div>
        <button className="logoutbtn" onClick={logOutUser}>Log out</button>
    </div>
  )
}
