import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Keyboard from './components/keyboard';
import Word from './components/word';
import { useState } from 'react';

function PlayScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');
  const navigate = useNavigate();
  const word = 'test'
  const stuff = `?wordDifficulty=${wordDifficulty}&pictureDifficulty=${pictureDifficulty}&word=${word}`

  function surrender() {
    navigate(`/gameOver`+stuff);
  }
  
  function easyWin() {
    navigate(`/winScreen`+stuff);
  }
  
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
    <div className='absolute top-0 py-6 bg-slate-400 w-full'>
        <h1 className='flex justify-center items-center font-bold text-5xl py-1 underline'>Hangman</h1>
    </div>    

      <h1>Play Screen</h1>
      <p>Word Difficulty: {wordDifficulty}</p>
      <p>Picture Difficulty: {pictureDifficulty}</p> 
      <div className='border-2'>
        <div>
          Picture
        </div>
        <div>
          <Word word={word} correctLetters={correctLetters} />
        </div>
      </div>
      <div>
        <Keyboard word={word} onLetterClick={handleLetterClick} />
      </div>
    </div>
  );
}

export default PlayScreen;