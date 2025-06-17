
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default Counter