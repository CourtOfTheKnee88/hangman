import { useLocation } from 'react-router-dom';
import Keyboard from './components/keyboard';
import Word from './components/word';
import Picture from './components/picture';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function playScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');
  const navigate = useNavigate();

  const getRandomWord = (wordDifficulty) => {
    const [randomWord, setRandomWord] = useState('');
    useEffect(() => {
      // Fetch the file from the public directory
      fetch(`../src/words/${wordDifficulty}.txt`)
        .then(response => response.text())
        .then(data => {
          const words = data.split('\n').map(word => word.trim());
          const randomWord = words[Math.floor(Math.random() * words.length)];
          setRandomWord(randomWord);
        })
        .catch(error => console.error('Error fetching the file:', error));
    }, []);
    return randomWord;
  }

  const str = getRandomWord(wordDifficulty).toUpperCase();
  const word = str
  const stuff = `?wordDifficulty=${wordDifficulty}&pictureDifficulty=${pictureDifficulty}&word=${word}`


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
      <div className='absolute top-0 py-6 bg-slate-400 w-full'>
        <h1 className='flex justify-center items-center font-bold text-5xl py-1 underline'>Hangman</h1>
      </div>
      <div className='border-2'>
        <div>
          <Picture pictureDifficulty={pictureDifficulty} incorrectLetters={incorrectLetters} />
        </div>
        <div>
          <Word word={word} correctLetters={correctLetters} />
        </div>
      </div>
      <div>
        <Keyboard word={word} onLetterClick={handleLetterClick} />
      </div>
      <button onClick={surrender} className='bg-gray-400 text-white rounded-md px-2 hover:bg-gray-600 '>Give Up</button>
    </div>
  );
}

export default playScreen;