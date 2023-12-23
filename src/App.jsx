import './App.scss'
import { BrowserRouter as Router, NavLink,Route,Routes} from "react-router-dom";
import Home from './pages/MyTasks/MyTasks';
import Goals from './pages/Goals/Goals';
import NewTag from './pages/NewTag/NewTag';
import { useState } from 'react';

function App() {
  const [addTask, setAddTask] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);


  return (
    <>
      <Router>
        <div className="window">
        <div className="left">
          <header>
          <div className="title">
            <h1></h1>
          </div>
          <nav>
            <h2>ToDo</h2>
            <div className="links">
              <NavLink className="navLink" to="/">My tasks</NavLink>
              <NavLink className="navLink" to="/goals">Goals</NavLink>
              <NavLink className="navLink" to="/newTag">New tag</NavLink>
            </div>
            
          </nav>
        </header>
        </div>
        
        <div className="right">
          <main>
          <Routes>
            <Route path='/' element={<Home addTask={addTask} setAddTask={setAddTask}/>}/>
            <Route path='/goals' element={<Goals addTask={addTask} setAddTask={setAddTask}/>}/>
            <Route path='/newTag' element={<NewTag addTask={addTask} setAddTask={setAddTask}/>}/>
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
