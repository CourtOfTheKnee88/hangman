import { useState } from 'react';

function Word({ word, correctLetters }) {
    const [wordToGuess] = useState(word);

    return (
        <div className='flex justify-center items-center'>
            {wordToGuess.split('').map((letter, index) => {
                return (
                    <div key={index} className='m-1'>
                        {correctLetters.includes(letter) ? letter : '_'}
                    </div>
                )
            })}
        </div>
    )
}

export default Word;