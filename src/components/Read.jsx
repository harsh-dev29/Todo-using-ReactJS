import React from 'react'
import './Read.css'


function Read(props) {
    const Todos = props.Todos;
    const setTodos = props.setTodos;

    const deleteHandler = (id) => {
        const filteredTodos = Todos.filter((todo) => todo.id != id)
        setTodos(filteredTodos);


    }


    const renderTodos = Todos.map((todo) => {
        return (
            <li className='background-gray-900 flex gap-2 justify-between back' key={todo.id}>
                {todo.title}<span className='bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out' onClick={() => {
                    deleteHandler(todo.id)
                }}>Delete</span>
            </li>
        )
    })
    return (
        <div
            className='pl-5 flex flex-col gap-5 w-[49%'>
            <h1 className='font-thin text-7xl'>Pending <span className='text-red-600 text-8xl'>Todos</span></h1>
            <ol className='background-gray-200 flex flex-col gap-2 p-5 rounded-lg shadow-lg '>
                {renderTodos}
            </ol>
        </div>
    )
}

export default Read