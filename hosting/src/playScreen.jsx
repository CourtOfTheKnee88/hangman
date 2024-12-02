import { useLocation } from 'react-router-dom';
import Keyboard from './components/keyboard';
import Word from './components/word';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function playScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');

  const getWord = () => {
    if (wordDifficulty === 'easy') {
      return 'TEST';
    } else if (wordDifficulty === 'medium') {
      return 'HELLO';
    } else if (wordDifficulty === 'hard') {
      return 'WORLD';
    }
  }

  const getPicture = () => {
    if (pictureDifficulty === 'easy') {
      return 'Picture 1';
    } else if (pictureDifficulty === 'medium') {
      return 'Picture 2';
    } else if (pictureDifficulty === 'hard') {
      return 'Picture 3';
    }
  }

  const word = 'TEST';

  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);

  const handleLetterClick = (letter) => {
    if (word.includes(letter)) {
      setCorrectLetters(prevLetters => {
        const newCorrectLetters = [...prevLetters, letter];
        if (word.split('').every(x => newCorrectLetters.includes(x))) {
          console.log('You win!');
        }
        return newCorrectLetters;
      });
    } else {
      if (incorrectLetters.every(x => !incorrectLetters.includes(letter))) {
        setIncorrectLetters([...incorrectLetters, letter]);
      }
    }
  }

  return (
    <div>
      <h1>Play Screen</h1>
      <p>Word Difficulty: {wordDifficulty}</p>
      <p>Picture Difficulty: {pictureDifficulty}</p> */
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

export default playScreen;