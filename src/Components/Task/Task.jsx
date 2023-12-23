import { useState } from "react";
import style from "./task.module.scss";
export default function Task(props) {
    const [checked, setChecked] = useState(false);
    // function delTask(){
    //     props.setAddTask(props.arr.filter((item) => item.id !== props.object.id));
    // }
  return (
    <div id={style.card} className={checked ? style.checked : undefined}>
        <div className={style.galochka}>
            <input className="checkbox-input" type="checkbox" id="my-checkbox" onClick={() => {setChecked(!checked);
            {/*localStorage.setItem('')*/}}}/>
        </div>
        
            <div className={style.task_card}>
                <div className={style.task_content}>
                    <h2>{props.object.title}</h2>
                    <p>{props.object.task}</p>
                </div>
            </div>
        
        <div className={style.delete}>
            <button className={style.delete_btn}>del</button>
        </div>
    </div>
    
  )
}
