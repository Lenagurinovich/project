import { useEffect, useState } from "react";
import   PlusIcon from "../../assets/plus-large-svgrepo-com.svg";
import Task from "../../Components/Task/Task";
import style from "./myTask.module.scss";


export default function Home() {

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);


  const [addTask, setAddTask] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);

  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(addTask));
    }, [addTask]);

 let allTasks;
  if (localStorage.length != 0){
    allTasks = JSON.parse(localStorage.getItem('tasks'));
  } else{
    console.log(false);
    allTasks = [...addTask];
  }

  function createTask(title, task){
    if (title === '' || task === ''){
      return;
    } else{
      setAddTask([...addTask, {title, task}]);    
    }
  }
  
 

  return (
    <div>
      {openModal &&
                <div className={style.modal_bg}>
                  <div className={style.modal}>
                    <div className={style.modal_content}>
                  <h2>New Task</h2>
                  <form>
                      <div>
                          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                      </div>
                      <div>
                          <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                      </div>
                      <button type="button"
                      onClick={() => {createTask(title, task)
                              setTitle('');
                              setTask('');
                      }}
                      >Create</button>
                  </form>
                  
                  <button className={style.btn_close} onClick={handleClose}>back</button>
                  </div>
                  </div>
                </div>
        }
        <h1 className={style.title}>My Tasks:</h1>
        
        {
          
        allTasks.map((item, index) => 
        (
          <Task object={item} key={index} array={allTasks}/>
        ))
        }
        
        <button className={style.addTask} onClick={handleOpen}><img src={PlusIcon} alt="+" /></button>
        
    </div>
  )
}
