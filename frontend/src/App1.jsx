import { useEffect, useState } from 'react'

import { getAllTasks, addTask, deleteTask, updateTask } from './hook'
import './App.css'

function App () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getAllTasks()
      .then(response => setTasks(response))
      .catch(err => console.log(err))
  }, [])

  const readAllTasks = () => {
    console.log('trigger readAllTasks')

    getAllTasks()
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  const showTasks = () => {
    console.log('tasks : ', tasks)
  }

  return (
    <>
      <h1>Vite + React todoList</h1>
      <button onClick={() => readAllTasks()}>
        call serverSide function : getAllTasks , open console to see result
      </button>
      <button onClick={() => showTasks()}> showTasks </button>
      <div className='card'>
        <h1>todo list region</h1>
        <ul>
          {tasks.map(task => (
            <li key={task[0]}>
              <input
                type='checkbox'
                checked={task[2] === 'Y'}
                onChange={() => updateTask(task[0], !task[2])}
              />
              {task[1]}
              <button onClick={() => deleteTask(task[0])}>刪除</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
