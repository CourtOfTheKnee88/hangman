import { useState, useEffect } from 'react';
import stage1 from '../../public/1.svg';
import stage2 from '../../public/2.svg';
import stage3 from '../../public/3.svg';
import stage4 from '../../public/4.svg';
import stage5 from '../../public/5.svg';
import stage6 from '../../public/6.svg';
import stage7 from '../../public/7.svg';
import stage8 from '../../public/8.svg';
import stage9 from '../../public/9.svg';
import stage10 from '../../public/10.svg';

function Picture({ pictureDifficulty, incorrectLetters }) {
    const [picture, setPicture] = useState(stage1);

    useEffect(() => {
        if (pictureDifficulty === 'easy') {
            easyIteration();
        } else if (pictureDifficulty === 'medium') {
            mediumIteration();
        } else if (pictureDifficulty === 'hard') {
            hardIteration();
        }
    }, [pictureDifficulty, incorrectLetters.length]);

    const hardIteration = () => {
        if (incorrectLetters.length === 0) {
            setPicture(stage1);
        } else if (incorrectLetters.length === 1) {
            setPicture(stage2);
        } else if (incorrectLetters.length === 2) {
            setPicture(stage3);
        } else if (incorrectLetters.length === 3) {
            setPicture(stage5);
        } else if (incorrectLetters.length === 4) {
            setPicture(stage10);
        }
    };

    const mediumIteration = () => {
        if (incorrectLetters.length === 0) {
            setPicture(stage1);
        } else if (incorrectLetters.length === 1) {
            setPicture(stage2);
        } else if (incorrectLetters.length === 2) {
            setPicture(stage3);
        } else if (incorrectLetters.length === 3) {
            setPicture(stage4);
        } else if (incorrectLetters.length === 4) {
            setPicture(stage5);
        } else if (incorrectLetters.length === 5) {
            setPicture(stage6);
        } else if (incorrectLetters.length === 6) {
            setPicture(stage10);
        }
    };

    const easyIteration = () => {
        if (incorrectLetters.length === 0) {
            setPicture(stage1);
        } else if (incorrectLetters.length === 1) {
            setPicture(stage2);
        } else if (incorrectLetters.length === 2) {
            setPicture(stage3);
        } else if (incorrectLetters.length === 3) {
            setPicture(stage4);
        } else if (incorrectLetters.length === 4) {
            setPicture(stage5);
        } else if (incorrectLetters.length === 5) {
            setPicture(stage6);
        } else if (incorrectLetters.length === 6) {
            setPicture(stage7);
        } else if (incorrectLetters.length === 7) {
            setPicture(stage8);
        } else if (incorrectLetters.length === 8) {
            setPicture(stage9);
        } else if (incorrectLetters.length === 9) {
            setPicture(stage10);
        }
    };

    return (
        <div>
            <img src={picture} />
        </div>
    );
}

export default Picture;