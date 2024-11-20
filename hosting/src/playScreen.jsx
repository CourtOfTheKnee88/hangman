import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Play Screen</h1>
      <p>Word Difficulty: {wordDifficulty}</p>
      <p>Picture Difficulty: {pictureDifficulty}</p>
      <button onClick={surrender}className='bg-gray-400 text-white rounded-md px-2 hover:bg-gray-600 '>Give Up</button>
      <button onClick={easyWin}className='bg-green-500 text-white rounded-md px-2 hover:bg-green-700 '>Easy Win</button>
    </div>
    </div>
  );
}

export default PlayScreen;