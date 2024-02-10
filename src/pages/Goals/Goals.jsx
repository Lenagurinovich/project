// import React, { useEffect, useState } from 'react';
// import style from './goals.module.scss';
// import PlusIcon from '../../assets/plus-large-svgrepo-com.svg';
// import Goal from '../../Components/Goal';

// export default function MyTasks() {
//   const [addGoal, setAddGoal] = useState(() => JSON.parse(localStorage.getItem('goals')) || []);
//   const [openModal, setOpenModal] = useState(false);
//   const [title, setTitle] = useState('');
//   const [points, setPoints] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     localStorage.setItem('goals', JSON.stringify(addGoal));
//   }, [addGoal]);

//   const handleOpen = () => setOpenModal(true);
//   const handleClose = () => setOpenModal(false);

//   const createGoal = () => {
//     if (title === '') {
//       return;
//     } else {
//       const newGoal = {
//         title: title,
//         id: count,
//         points: points.map((point, index) => ({ id: index + 1, text: point, completed: false })),
//       };
//       setAddGoal([...addGoal, newGoal]);
//       setTitle('');
//       setPoints([]);
//       setCount(prevCount => prevCount + 1);
//     }
//   };

//   const deleteGoal = id => {
//     const updatedGoals = addGoal.filter(goal => goal.id !== id);
//     setAddGoal(updatedGoals);
//   };

//   const togglePoint = (goalId, pointId) => {
//     const updatedGoals = addGoal.map(goal => {
//       if (goal.id === goalId) {
//         const updatedPoints = goal.points.map(point => {
//           if (point.id === pointId) {
//             return {
//               ...point,
//               completed: !point.completed,
//             };
//           }
//           return point;
//         });
//         return {
//           ...goal,
//           points: updatedPoints,
//         };
//       }
//       return goal;
//     });
//     setAddGoal(updatedGoals);
//   };

//   return (
//     <>
//       {openModal && (
//         <div className={style.modal_bg}>
//           <div className={style.modal}>
//             <div className={style.modal_content}>
//               <h2>New Goal</h2>
//               <form>
//                 <input
//                   type="text"
//                   placeholder="Title"
//                   value={title}
//                   onChange={e => setTitle(e.target.value)}
//                 />
//                 <h3>Add points:</h3>
//                 <div className="point">
//                   <label htmlFor="firstpoint">1.</label>
//                   <input
//                     type="text"
//                     id="firstpoint"
//                     value={points[0] || ''}
//                     onChange={e => {
//                       const updatedPoints = [...points];
//                       updatedPoints[0] = e.target.value;
//                       setPoints(updatedPoints);
//                     }}
//                   />
//                 </div>
//                 {points.slice(1).map((point, index) => (
//                   <div className="point" key={index + 2}>
//                     <label htmlFor={`point-${index + 2}`}>{index + 2}.</label>
//                     <input
//                       type="text"
//                       id={`point-${index + 2}`}
//                       value={point}
//                       onChange={e => {
//                         const updatedPoints = [...points];
//                         updatedPoints[index + 1] = e.target.value;
//                         setPoints(updatedPoints);
//                       }}
//                     />
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   className="newpoint"
//                   onClick={() => {
//                     setPoints([...points, '']);
//                   }}
//                 >
//                   New point
//                 </button>
//                 <button type="button" onClick={createGoal}>
//                   Create
//                 </button>
//               </form>
//               <button className={style.btn_close} onClick={handleClose}>
//                 Back
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       <h1 className={style.title}>Goals:</h1>
//       {addGoal.map(goal => (
//         <Goal
//           key={goal.id}
//           goal={goal}
//           deleteGoal={deleteGoal}
//           togglePoint={togglePoint}
//           points={points}
//         />
//       ))}
//       <button className={style.addTask} onClick={handleOpen}>
//         <img src={PlusIcon} alt="+" />
//       </button>
//     </>
//   );
// }