// import React from 'react';
// import style from './goal.module.scss';

// export default function Goal(props) {


//   return (
//     <div className={style.goal}>
//       <h3>{props.goal.title}</h3>
//       <ul>
//         {props.points.map(point => (
//           <li
//             key={point.id}
//             className={point.completed ? style.completed : ''}
//             onClick={() => togglePoint(id, point.id)}
//           >
//             {point.text}
//           </li>
//         ))}
//       </ul>
//       <button className={style.deleteBtn} onClick={() => deleteGoal(id)}>
//         Delete
//       </button>
//     </div>
//   );
// }