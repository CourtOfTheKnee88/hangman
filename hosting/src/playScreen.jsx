import { useLocation } from 'react-router-dom';
import Keyboard from './components/keyboard';
import Word from './components/word';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function playScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');
  const navigate = useNavigate();

  const stuff = `?wordDifficulty=${wordDifficulty}&pictureDifficulty=${pictureDifficulty}`

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
          Picture
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