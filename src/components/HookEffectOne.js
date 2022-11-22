import React, { useEffect, useState } from 'react'

export function HookEffectOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
            console.log("Updating ...")
            document.title = ` You clicked ${count} times`
        },
        [count]
    )

    return (
        <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={() => setCount(prevCount => prevCount + 1)}> Click {count} times</button>
        </div>
    )
}