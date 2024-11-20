import { useState } from 'react';

function Keyboard({ word }) {

    const wordToGuess = word;

    const letters = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
        'Z', 'X', 'C', 'V', 'B', 'N', 'M',
    ];

    const [letterStates, setLetterStates] = useState(
        letters.reduce((acc, letter) => {
            acc[letter] = null;
            return acc;
        }, {})
    );

    const [topRow] = useState(letters.slice(0, 10));
    const [middleRow] = useState(letters.slice(10, 19));
    const [bottomRow] = useState(letters.slice(19, 26));

    const isCorrect = (letter) => {
        setLetterStates(prevState => ({
            ...prevState,
            [letter]: wordToGuess.includes(letter)
        }));
    }

    const handleClick = (letter) => {
        console.log(letter);
    }

    return (
        <div className='justify-center'>
            <div className='flex justify-center items-center'>
                {topRow.map((letter, index) => {
                    return (
                        <button
                            onClick={() => isCorrect(letter)}
                            key={index}
                            className={`${letterStates[letter] === true ? 'bg-green-200' : letterStates[letter] === false ? 'bg-red-200' : 'bg-gray-200'} m-1 rounded-md px-2`}>{letter}</button>
                    )
                })}
            </div>
            <div className='flex justify-center items-center'>
                {middleRow.map((letter, index) => {
                    return (
                        <button
                            onClick={() => isCorrect(letter)} 
                            key={index} 
                            className={`${letterStates[letter] === true ? 'bg-green-200' : letterStates[letter] === false ? 'bg-red-200' : 'bg-gray-200'} m-1 rounded-md px-2`}>{letter}</button>
                    )
                })}
            </div>
            <div className='flex justify-center items-center'>
                {bottomRow.map((letter, index) => {
                    return (
                        <button 
                            onClick={() => handleClick(letter)} 
                            key={index} 
                            className={`${letterStates[letter] === true ? 'bg-green-200' : letterStates[letter] === false ? 'bg-red-200' : 'bg-gray-200'} m-1 rounded-md px-2`}>{letter}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Keyboard