import { useState } from 'react'
import { useLocation } from 'react-router-dom';


function winScreen() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    return (
        <div>

        </div>
    )
}

export default winScreen