import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


function winScreen() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const wordDifficulty = params.get('wordDifficulty');
    const pictureDifficulty = params.get('pictureDifficulty');
    const word = params.get('word');
    const navigate = useNavigate();

    function playAgain() {
        navigate(`/playScreen?wordDifficulty=${wordDifficulty}&pictureDifficulty=${pictureDifficulty}`);
    }
    
    function restart() {
        navigate('/')
    }

    return (
        <div className='h-screen justify-center overflow-hidden'>            
        <h1 align='center' className='pt-3 font-bold text-5xl pb-6 underline bg-slate-400'>Hangman</h1>
        <div className='h-screen flex justify-center items-center'>
                  <div className='flex flex-col justify-center items-center rounded-xl shadow-xl w-[40%] bg-slate-100 p-2'>
            <h1 className='font-bold text-3xl pb-6 underline'>Hangman</h1>
        <div className='flex flex-col justify-center items-center rounded-xl  w-[40%] bg-slate-100 p-2'>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center space-x-2'>
                    <p className='font-semibold pb-2 text-lg'>YOU WIN!</p>
                    <p>The word was <b>{word}</b>.</p>
                    <div className='py-6 flex justify-center space-x-2'>
                        <button onClick={playAgain} className='bg-gray-500 text-white rounded-md px-2 hover:bg-gray-700 '>Play Again</button>
                        <button onClick={restart}className='bg-gray-400 text-white rounded-md px-2 hover:bg-gray-600 '>Change Difficulty</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default winScreen