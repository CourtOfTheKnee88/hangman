import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function PlayScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');
  const navigate = useNavigate();
  const word = 'This is a really long test case......................................................'
  const stuff = `?wordDifficulty=${wordDifficulty}&pictureDifficulty=${pictureDifficulty}&word=${word}`

  function surrender() {
    navigate(`/gameOver`+stuff);
  }
  
  function easyWin() {
    navigate(`/winScreen`+stuff);
  }
  
  return (
    <div className='h-screen justify-center overflow-hidden'>            
    <h1 align='center' className='pt-3 font-bold text-5xl pb-6 underline bg-slate-400'>Hangman</h1>
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