import { useLocation } from 'react-router-dom';
import Keyboard from './components/keyboard';
import Word from './components/word';
import Picture from './components/picture';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function playScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');
  const navigate = useNavigate();

  const word = 'TEST'

  const stuff = `?wordDifficulty=${wordDifficulty}&pictureDifficulty=${pictureDifficulty}&word=${word}`

  // const getWord = () => {
  //   if (wordDifficulty === 'easy') {
  //     word = 'TEST';
  //   } else if (wordDifficulty === 'medium') {
  //     word = 'HELLO';
  //   } else if (wordDifficulty === 'hard') {
  //     word = 'WORLD';
  //   }
  // }

  const getPicture = () => {
    if (pictureDifficulty === 'easy') {
      return 'Picture 1';
    } else if (pictureDifficulty === 'medium') {
      return 'Picture 2';
    } else if (pictureDifficulty === 'hard') {
      return 'Picture 3';
    }
  }

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

  function surrender() {
    navigate(`/gameOver` + stuff);
  }

  function easyWin() {
    navigate(`/winScreen` + stuff);
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {/* <h1>Play Screen</h1>
      <p>Word Difficulty: {wordDifficulty}</p>
      <p>Picture Difficulty: {pictureDifficulty}</p> */}
      <div className='border-2'>
        <div>
          <Picture pictureDifficulty={pictureDifficulty} incorrectLetters={incorrectLetters}/>
        </div>
        <div>
          <Word word={word} correctLetters={correctLetters} />
        </div>
      </div>
      <div>
        <Keyboard word={word} onLetterClick={handleLetterClick} />
      </div>
      <button onClick={surrender} className='bg-gray-400 text-white rounded-md px-2 hover:bg-gray-600 '>Give Up</button>
      <button onClick={easyWin} className='bg-green-500 text-white rounded-md px-2 hover:bg-green-700 '>Easy Win</button>
    </div>
  );
}

export default playScreen;