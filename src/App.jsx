import './App.scss'
import { BrowserRouter as Router, NavLink,Route,Routes} from "react-router-dom";
import Home from './pages/MyTasks/MyTasks';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Profile from './pages/Profile/Profile';
import burger from './assets/burger-menu.svg';
import { useState } from 'react';

function App() {
  const [flag, setFlag] = useState(false)
 
 

  return (
    <>
      <Router>
        <div className="window">
        <div className='left'>
        <div className={`burger-btn tpl_hamburger ${flag}`} id="sandwichmenu" onClick={() => setFlag(!flag)}>
            <svg viewBox="0 0 800 600">
                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                <path d="M300,320 L540,320" className="middle"></path>
                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
            </svg>
        </div>
          {/* <img src={burger} alt="." className={`burgermenu ${flag}`} onClick={() => setFlag(!flag)}/> */}
          <header className={`${flag}`}>
          <nav>
            <h2>ToDo</h2>
            <div className="links">
              <NavLink className="navLink" to="/">My tasks</NavLink>
              <NavLink className="navLink" to="/profile">Profile</NavLink>
            </div>
            
          </nav>
        </header>
        </div>
        
        <div className="right">
          <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/profile' element={<Profile/> }/>
          </Routes>
        </main>

        <footer></footer>
        </div>
        </div>      
      </Router>
    </>
  )
}

export default App
