import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';

function App() {

  return (
    <div className='w-screen h-screen justify gap-2 bg-gray-400 flex p-2'>
      <Create />
      <Read />

    </div>
  )
}

export default App