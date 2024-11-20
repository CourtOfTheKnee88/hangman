import { useState } from 'react'

const word = "test"

function gameOver() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='space-x-2'>
                    <p className='font-semibold pb-2 text-lg'>GAME OVER</p>
                    <p>The word was {word}.</p>
                    <button className='bg-gray-500 text-white rounded-md px-2 '>Retry</button>
                    <button className='bg-gray-200 text-white rounded-md px-2'>Change Difficulty</button>
                </div>
            </div>
        </div>
    )
}

export default gameOver
