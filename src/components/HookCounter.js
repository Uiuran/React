import React, {useState} from 'react'

export function HookCounter() {

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count {count}</button>
    )
}