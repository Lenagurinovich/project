import { useEffect, useState } from "react";
import   PlusIcon from "../../assets/plus-large-svgrepo-com.svg";
import Task from "../../Components/Task/Task";
import style from "./myTask.module.scss";


export default function Home() {
  const [addTask, setAddTask] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);


  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('without priority');
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(addTask));
    }, [addTask]);


    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
  

  function createTask(title, task, priority){
    
    if (title === '' || task === ''){
      return;
    } else{
      let id = count;
      setAddTask([...addTask, {title, task, priority, id, completed: false}]);  
      setCount((prevCount) => prevCount + 1);  
      setTitle("");
      setTask("");
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
                      <select onChange={(e) => setPriority(e.target.value)}>
                        <option value='without priotity'>without priority</option>
                        <option value='urgent'>urgent</option>
                        <option value='important'>important</option>
                        <option value='long-term'>long-term</option>
                      </select>


                      <button type="button"
                      onClick={() => {createTask(title, task, priority);
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
          
        addTask.map((item, index) => 
        (
          <Task 
          object={item} 
          key={index} 
          arr={addTask} 
          setAddTask={setAddTask}/>
        ))
        }
        
        <button className={style.addTask} onClick={handleOpen}><img src={PlusIcon} alt="+" /></button>
        
    </div>
  )
}
