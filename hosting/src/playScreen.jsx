import { useLocation } from 'react-router-dom';
import Keyboard from './components/keyboard';
import { useState } from 'react';

function playScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');

  const word = 'TEST';

  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);

  const handleLetterClick = (letter) => {
    if (word.includes(letter)) {
      setCorrectLetters(prevLetters => {
        const newCorrectLetters = [...prevLetters, letter];
        if (word.split('').every(l => newCorrectLetters.includes(l))) {
          console.log('You win!');
        }
        return newCorrectLetters;
      });
    } else {
      setIncorrectLetters([...incorrectLetters, letter]);
    }
  }

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
        <Keyboard word={word} onLetterClick={handleLetterClick} />
      </div>
    </div>
  );
}

export default playScreen;