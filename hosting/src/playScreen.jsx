import { useState } from 'react'

function playScreen() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div>
                <h1>Picture</h1>
            </div>
            <div>
                <h1>Keyboard</h1>
            </div>
            <div>
                <h1>Incorrect Letter Cloud</h1>
            </div>
        </div>
    )
}

export default playScreen
