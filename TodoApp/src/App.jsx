  import { useEffect, useState } from 'react';
  import './App.css';
  
  const App = () => {
    const [formData, setFormData] = useState({
      name: '',
      completed: false,
    });
  
    const [listoftasks, setListoftasks] = useState([]);
  
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

 useEffect(()=>{
  fetch('http://localhost:8000/api')
  .then((response)=>response.json())
  .then((data)=>{setListoftasks(data.task)})
 },[])
  
    // Function to add a new task
    const addTask = () => {
      fetch('http://localhost:8000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then((data) => {
          setListoftasks([...listoftasks, data.taskNewField]);
          console.log(listoftasks)
          setFormData({ name: '', completed: false });
        })
        .catch((error) => {
          console.error('Error adding task:', error);
        });
    };
  
    // Function to remove a task
    const removeTask = (taskId) => {
      fetch(`http://localhost:8000/api/${taskId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setListoftasks(listoftasks.filter((task) => task._id !== taskId));
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch((error) => {
          console.error('Error removing task:', error);
        });
    };
  
    // Function to toggle task completion status
    const toggleTaskCompletion = (taskId) => {
      const updatedTasks = [...listoftasks];
      const taskToUpdate = updatedTasks.find((task) => task._id === taskId);
  
      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed;
  
        // Send a PATCH request to update the task on the server
        fetch(`http://localhost:8000/api/${taskId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ completed: taskToUpdate.completed }),
        })
          .then((response) => {
            if (response.ok) {
              setListoftasks(updatedTasks);
            } else {
              throw new Error('Network response was not ok');
            }
          })
          .catch((error) => {
            console.error('Error updating task:', error);
          });
      }
    };
  
    return (
      <div className='todo-app-container'>
        <h2 className='heading1'>ToDo List</h2>
        <div className='input-todo'>
          <input
            type='text'
            name='name'
            className='input'
            placeholder='Add Your New Todo..'
            onChange={handleChange}
            value={formData.name}
            required
          />
          <button className='task-add-button' onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className='list-tasks'>
          <ul>
            {listoftasks.map((task) => (
              <div key={task._id}>
                <li className='li'>
                  <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task._id)}
                  />
                  <span>{task.name}</span>
                  <button
                    className='delete-button'
                    onClick={() => removeTask(task._id)}
                  >
                    Delete
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default App;
  





    // import { useEffect, useState } from 'react';
// import './App.css';


// const App = () => {
//   const [check, setCheck] = useState([false]); 

//   const [formData,setFormData]=useState({
//     name:"",
//     completed:false,
//   });

//   const [listoftasks, setListoftasks] = useState(()=>{
//     const storedTask =JSON.parse(localStorage.getItem("todoLists"))
//     return storedTask ? storedTask :[]
//   });

//   useEffect(()=>{
//     localStorage.setItem("todoLists",JSON.stringify(listoftasks))
//   },[listoftasks])

//   useEffect(()=>{
//     fetch("http://localhost:8000/api")
//     .then((res)=>res.json())
//     .then((response)=>{setListoftasks(response.task)})
//     console.log({listoftasks})
//  },[]);
 
//   const handleChange=(e)=>{
//   const{value,name}=e.target;
//   setFormData((prevTasks)=>{
//   return {...prevTasks,
//   [name]:value,
//    }
//   })
//   }

//   const addTask = () => {
//     const updatedTasks = [...listoftasks];
//     updatedTasks.push(newtask);
//     setListoftasks(updatedTasks);
//   };

//   const removeTask = (index) => {
//     const updatedTasks = [...listoftasks];
//     updatedTasks.splice(index, 1);
//     setListoftasks(updatedTasks);

//     const updatedCheck = [...check];
//     updatedCheck.splice(index, 1);
//     setCheck(updatedCheck);
//   };

//   const checkBox = (index) => {
//     const updatedCheck = [...check];
//     updatedCheck[index] = !updatedCheck[index];
//     setCheck(updatedCheck);
//   };

//   return (
//     <>
//       <div className='todo-app-container'>
//         <h2 className='heading1'>ToDo List</h2>
//         <div className='input-todo'>
//           <input type='text' name="name" className='input' placeholder='Add Your New Todo..' onChange={handleChange} required/>
//           <button className='task-add-button' onClick={addTask}>Add Task</button>
//         </div>
//         <div className='list-tasks'>
//           <ul>
//          <div>
//             {listoftasks.map((task) => (
//               <div key={task._id}>
//                 <li className='li'  >
                 
//                 <input type='checkbox'/>
//                 <span>{task.name}</span>
//                 <button className='delete-button' >Delete</button>
//               </li>
//               </div>
//             ))}
//             </div>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
// export default App;

// import axios from "axios"
// const getData=async()=>{
//   await axios.get("http://localhost:8000/api/")
//   .then((response)=>console.log(response))
// }
// useEffect(()=>{
//   getData();
// },[])
 // const handleChange = (event) => {
  //   setNewtask(event.target.value);
  // };




















