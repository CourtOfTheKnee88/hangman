import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center rounded-xl shadow-xl w-[40%] bg-slate-100 p-2'>
        <h1 className='font-bold text-3xl pb-6 underline'>Hangman</h1>
        <div className='space-y-6 flex justify-center flex-col'>

          <div className='flex flex-col'>
            <p className='font-semibold pb-2 text-lg text-center'>Word Difficulty:</p>
            <div className='flex justify-center space-x-2'>
              <button className='bg-green-500 text-white rounded-md px-2'>Easy</button>
              <button className='bg-yellow-400 text-white rounded-md px-2'>Medium</button>
              <button className='bg-red-600 text-white rounded-md px-2'>Hard</button>
            </div>
          </div>

          <div className='flex flex-col'>
            <p className='font-semibold pb-2 text-lg text-center'>Picture Difficulty:</p>
            <div className='flex justify-center space-x-2'>
              <button className='bg-green-500 text-white rounded-md px-2'>Easy (9 tries)</button>
              <button className='bg-yellow-400 text-white rounded-md px-2'>Medium (6 tries)</button>
              <button className='bg-red-600 text-white rounded-md px-2'>Hard (4 tries)</button>
            </div>
          </div>
        </div>
        <div className='py-6'>
          <button className='rounded-md bg-blue-500 text-white px-2 text-2xl'>Start</button>
        </div>
      </div>
    </div>
  )
}

export default App
