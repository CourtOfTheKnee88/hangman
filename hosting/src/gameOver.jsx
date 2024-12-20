import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import dead from '../public/10.svg';


function gameOver() {
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
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className='absolute top-0 py-6 bg-slate-400 w-full'>
                <h1 className='flex justify-center items-center font-bold text-5xl py-1 underline'>Hangman</h1>
            </div>
            <div className='flex flex-col justify-center items-center rounded-xl shadow-xl w-[40%] bg-slate-100 p-2'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center rounded-xl  w-[40%] bg-slate-100 p-2'>
                        <div className='flex justify-center items-center'>
                            <div className='flex flex-col justify-center items-center space-x-2'>
                                <p className='font-extrabold pb-4 text-3xl whitespace-nowrap'>GAME OVER</p>
                                <img src={dead} alt='dead' className='w-32 h-32' />
                                <div className='text-center w-max pt-2'>
                                    <p>The word was <b>{word}</b>.</p>
                                </div>
                                <div className='py-4 flex justify-center space-x-2'>
                                    <button onClick={playAgain} className='bg-gray-500 text-white rounded-md px-2 hover:bg-gray-700 '>Play Again</button>
                                    <button onClick={restart} className='bg-gray-400 text-white rounded-md px-2 hover:bg-gray-600 '>Change Difficulty</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default gameOver
