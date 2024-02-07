import React, { useEffect, useState } from 'react'

function useEffectHook() {

    const[count,setCount] = useState(0);
    const[name,setName] = useState('');

    useEffect(()=>{
        console.log('updating title')
        document.title = `you clicked ${count}`
    },[count])

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick={()=>setCount(count+1)}>click{count}times</button>
    </div>
  )
}

export default useEffectHook
