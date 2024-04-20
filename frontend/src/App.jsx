import { useState } from 'react'

import { getAllTasks } from './hook'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  const readAllTasks = () => {
    console.log('trigger readAllTasks')

    getAllTasks()
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Vite + React v3</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => readAllTasks()}>
          call serverSide function : getAllTasks , open console to see result
        </button>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
