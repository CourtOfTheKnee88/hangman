import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [wordDifficulty, setWordDifficulty] = useState('');
  const [pictureDifficulty, setPictureDifficulty] = useState('');
  const navigate = useNavigate();

  function startGame() {
    if (wordDifficulty === '' || pictureDifficulty === '') {
      alert('Please select both word and picture difficulty');
    } else {
      navigate(`/playScreen?wordDifficulty=${wordDifficulty}&pictureDifficulty=${pictureDifficulty}`);
    }
  }

  return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className='absolute top-0 py-6 bg-slate-400 w-full'>
                <h1 className='flex justify-center items-center font-bold text-5xl py-1 underline'>Hangman</h1>
            </div>    
      <div className='flex flex-col justify-center items-center rounded-xl shadow-xl w-[40%] bg-slate-100 p-2'>
        <div className='space-y-6 flex justify-center flex-col'>
          <div className='flex flex-col'>
            <p className='font-semibold pb-2 text-lg text-center'>Word Difficulty:</p>
            <div className='flex justify-center space-x-2'>
              <button 
                onClick={() => setWordDifficulty('easy')} 
                className={`${wordDifficulty === 'easy' ? 'bg-green-700' : 'bg-green-500'} text-white rounded-md px-2 hover:bg-green-700`}>Easy</button>
              <button 
                onClick={() => setWordDifficulty('medium')}
                className={`${wordDifficulty === 'medium' ? 'bg-yellow-500' : 'bg-yellow-400'} bg-yellow-400 text-white rounded-md px-2 hover:bg-yellow-500`}>Medium</button>
              <button 
                onClick={() => setWordDifficulty('hard')} 
                className={`${wordDifficulty === 'hard' ? 'bg-red-700' : 'bg-red-600'} bg-red-600 text-white rounded-md px-2 hover:bg-red-700`}>Hard</button>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold pb-2 text-lg text-center'>Picture Difficulty:</p>
            <div className='flex justify-center space-x-2'>
              <button 
                onClick={() => setPictureDifficulty('easy')}
                className={`${pictureDifficulty === 'easy' ? 'bg-green-700' : 'bg-green-500'} text-white rounded-md px-2 hover:bg-green-700`}>Easy (9 tries)</button>
              <button 
                onClick={() => setPictureDifficulty('medium')} 
                className={`${pictureDifficulty === 'medium' ? 'bg-yellow-500' : 'bg-yellow-400'} bg-yellow-400 text-white rounded-md px-2 hover:bg-yellow-500`}>Medium (6 tries)</button>
              <button 
                onClick={() => setPictureDifficulty('hard')} 
                className={`${pictureDifficulty === 'hard' ? 'bg-red-700' : 'bg-red-600'} bg-red-600 text-white rounded-md px-2 hover:bg-red-700`}>Hard (4 tries)</button>
            </div>
          </div>
        </div>
        <div className='py-6'>
          <button onClick={startGame} className='rounded-md bg-blue-500 hover:bg-blue-700 text-white px-2 text-2xl'>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Home;