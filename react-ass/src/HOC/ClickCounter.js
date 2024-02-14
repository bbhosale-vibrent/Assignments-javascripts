import React, { useState } from 'react'
import WithCounter from './WithCounter';

function ClickCounter(props) {
    const{count,incrementCount} = props;
  return (
    <div>

        <button onClick={incrementCount}>Click ME</button>
        <h2>Count is: {count}</h2>
      
    </div>
  )
}

export default WithCounter(ClickCounter,5);
