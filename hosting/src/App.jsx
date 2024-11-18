import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center rounded-lg shadow-xl w-[40%] bg-slate-100 p-2'>
        <h1 className='font-bold text-3xl pb-6 underline'>Hangman</h1>
        <div className='space-y-6'>
          <div className='space-x-2'>
            <p className='font-semibold pb-2 text-lg'>Word Difficulty:</p>
            <button className='bg-green-500 text-white rounded-md px-2'>Easy</button>
            <button className='bg-yellow-400 text-white rounded-md px-2'>Medium</button>
            <button className='bg-red-600 text-white rounded-md px-2'>Hard</button>
          </div>
          <div className='space-x-2'>
            <p className='font-semibold pb-2 text-lg'>Picture Difficulty:</p>
            <button className='bg-green-500 text-white rounded-md px-2'>Easy (9 tries)</button>
            <button className='bg-yellow-400 text-white rounded-md px-2'>Medium (6 tries)</button>
            <button className='bg-red-600 text-white rounded-md px-2'>Hard (4 tries)</button>
          </div>
        </div>
        <div className='pt-6'>
          <button className='rounded-md bg-blue-500 text-white px-2 text-2xl'>Start</button>
        </div>
      </div>
    </div>
  )
}

export default App
