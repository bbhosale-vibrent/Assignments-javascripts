import React, { useEffect, useState } from 'react'

function HookMouse() {
    const[X,SetX] = useState(0);
    const[Y,SetY] = useState(0);

    const logmouseposition = e =>{
        console.log("mouseclick");
        SetX(e.clientX);
        SetY(e.clientY);
    }
    useEffect (()=>{
        console.log("mouse clicked")
        window.addEventListener('mousemove',logmouseposition)
    
    return () =>{
      console.log("Component unmount");
      window.removeEventListener("mousemove",logmouseposition);
    }
    
      },[]);

  return (
    <div>
      Hooks  X - {X} Y - {Y}
    </div>
  )
}

export default HookMouse
