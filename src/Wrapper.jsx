import React, { createContext, useState } from 'react'

export const todocontext = createContext(null)

const Wrapper = (props) => {
    const [Todos, setTodos] = useState([
        {
            id: 1,
            title: 'Learn React',
            completed: false
        }
    ])
    return (
        <todocontext.Provider value={[Todos, setTodos]}>{props.children}</todocontext.Provider>
    )
}

export default Wrapper