import { useState } from 'react';

function Word({ word, correctLetters }) {
    return (
        <div className='flex justify-center items-center'>
            {word.split('').map((letter, index) => {
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