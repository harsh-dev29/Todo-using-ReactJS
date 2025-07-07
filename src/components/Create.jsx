import { nanoid } from 'nanoid';
import { useContext, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { todocontext } from '../Wrapper';
function Create() {
    const [Todos, setTodos] = useContext(todocontext)

    const { register, handleSubmit, reset, formState: { error } } = useForm()
    const title = 'title';
    const onSubmit = (data) => {
        data.isCompleted = false;
        data.id = nanoid();
        console.log(data);
        console.log(error);
        toast.success("Todo Added Successfully", {
            position: "bottom-right"
        })
        setTodos([...Todos, data])

        reset();// Reset the form after submission
    }
    return (
        <div className='border-2 flex flex-col gap-10 border-black p-5 rounded-lg bg-gray-300 shadow-lg w-[49%]'>
            <h1 className='font-thin text-8xl'>Start <span className='text-red-600'>Reminders</span> for tasks</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                <input
                    {...register("title", { required: "title can not be empty" })}
                    className='border-b text-4xl border-black p-2 w-full'
                    type="text" placeholder='title' />
                {error && error.title && error.title.message && <small>{error.title.message}</small>}
                <br />
                <br />
                <div className='flex justify-center items-center'>
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-2xl transition duration-300 ease-in-out'
                        type="submit">Add Task</button>

                </div>
            </form></div>
    )
}

export default Create