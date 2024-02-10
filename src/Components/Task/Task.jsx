import { useEffect, useState } from "react";
import style from "./task.module.scss";
export default function Task(props) {
    const [checked, setChecked] = useState(props.object.completed);

    const priority = props.object.priority;
    const priorityColor = () => {
        if (priority === 'urgent') {
          return 'red';
        } else if (priority === 'important') {
          return 'blue';
        } else if (priority === 'long-term') {
          return 'green';
        } else {
          return 'gray';
        }
      };

      function delTask() {
        const updatedTasks = props.arr.filter((item) => item.id !== props.object.id);
        props.setAddTask(updatedTasks);
      }

  return (
    <div id={style.card} className={`${checked ? style.checked : ""} `} >
        <div className={style.galochka}>
            <input className="checkbox-input" type="checkbox" id="my-checkbox"  onClick={() => {setChecked(!checked); props.object.completed = checked}}/>
        </div>
        
            <div className={style.task_card}>
                <div className={`${style.task_content} ${style[priorityColor()]}`}>
                    <h2>{props.object.title}</h2>
                    <p>{props.object.task}</p>
                    <p className="priority">{props.object.priority}</p>
                </div>
            </div>
        
        <div className={style.delete}>
            <button className={style.delete_btn} onClick={delTask}>del</button>
        </div>
    </div>
    
  )
}
