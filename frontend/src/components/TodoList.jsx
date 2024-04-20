import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import {
  getAllTasks,
  addTask,
  deleteTask as deleteServerTask,
  updateTask
} from '../hook'

function TodoList () {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  function updataCanva () {
    getAllTasks().then(tasks => setTasks(tasks))
  }

  useEffect(() => {
    updataCanva()
  }, [])

  function addTaskToServer (text) {
    addTask(text)
      .then(() => updataCanva())
      .catch(err => console.log(err))

    setText('')
  }

  function deleteTask (id) {
    deleteServerTask(id)
      .then(() => updataCanva())
      .catch(err => console.log(err))
  }

  function toggleCompleted (id, completed) {
    updateTask(id, completed)
      .then(() => updataCanva())
      .catch(err => console.log(err))
  }

  return (
    <div className='todo-list'>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => addTaskToServer(text)}>Add</button>
    </div>
  )
}
export default TodoList
