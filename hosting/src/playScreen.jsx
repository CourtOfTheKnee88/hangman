import { useLocation } from 'react-router-dom';

function PlayScreen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const wordDifficulty = params.get('wordDifficulty');
  const pictureDifficulty = params.get('pictureDifficulty');

  return (
    <div>
      <h1>Play Screen</h1>
      <p>Word Difficulty: {wordDifficulty}</p>
      <p>Picture Difficulty: {pictureDifficulty}</p>
    </div>
  );
}

export default PlayScreen;