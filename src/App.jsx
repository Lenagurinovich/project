import './App.scss'
import { BrowserRouter as Router, NavLink,Route,Routes} from "react-router-dom";
import Home from './pages/MyTasks/MyTasks';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Profile from './pages/Profile/Profile';

function App() {
 


  return (
    <>
      <Router>
        <div className="window">
        <div className="left">
          <header>
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
