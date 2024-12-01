import { useState } from 'react';

function Picture({ pictureDifficulty }) {
    const [picture, setPicture] = useState('');

    const getPicture = () => {
        if (pictureDifficulty === 'easy') {
            setPicture('Picture 1');
        } else if (pictureDifficulty === 'medium') {
            setPicture('Picture 2');
        } else if (pictureDifficulty === 'hard') {
            setPicture('Picture 3');
        }
    }

    return (
        <div>
            {getPicture()}
            <img src={picture} alt='picture' />
        </div>
    )
}