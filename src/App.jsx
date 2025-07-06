import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

function App() {
  const [Todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      completed: false
    }
  ])



  return (
    <div className='w-screen h-screen justify gap-2 bg-gray-400 flex p-2'>
      <Create setTodos={setTodos} Todos={Todos} />
      <Read setTodos={setTodos} Todos={Todos} />

    </div>
  )
}

export default App