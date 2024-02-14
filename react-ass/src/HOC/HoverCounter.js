import React, { useState } from 'react'
import WithCounter from './WithCounter';

function HoverCounter(props) {
    const{count,incrementCount} = props;
  return (
    <div>
      <button onMouseMove={incrementCount}>Click ME</button>
      <h3>Hover Counter: {count}</h3>

    </div>
  )
}

export default WithCounter(HoverCounter,10);
