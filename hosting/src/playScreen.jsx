import { useLocation } from 'react-router-dom';
import Keyboard from './components/keyboard';
import { useState } from 'react';


function PlayScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  
  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');

  const word = 'TEST';

  const isWordGuessed = useState(false);


  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {/* <h1>Play Screen</h1>
      <p>Word Difficulty: {wordDifficulty}</p>
      <p>Picture Difficulty: {pictureDifficulty}</p> */}
      <div className='border-2'>
        <div>
          Picture
        </div>
        <p>Word</p>
      </div>
      <div>
        <Keyboard word={word} />
      </div>
    </div>
  );
}

export default PlayScreen;