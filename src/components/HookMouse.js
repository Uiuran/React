import React, { useEffect, useState } from 'react'

export function HookMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
  


    const logMousePosition = e => {
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mousemove',logMousePosition)
        return () =>{
            console.log('Component unmounting ')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>Hook X {x}, Y {y}
        
        </div>
    )


}

export function ToggleButton (){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [display, setDisplay] = useState(true);

    const logMousePosition = e => {
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mousemove',logMousePosition)
        return () =>{
            console.log('Component unmounting ')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return ( 
    <div>
    <button onClick={()=>setDisplay(!display)} >Toggle</button>
    {display && <HookMouse />}
    </div>
    )
}