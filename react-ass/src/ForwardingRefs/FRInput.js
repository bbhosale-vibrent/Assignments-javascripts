import React from 'react'

const FRInput = React.forwardRef((props,ref)=>{
  return (
        <div>
          <input type="text" style={{margin:"10px"}} ref={ref}/>
        </div>
      )
})
  

export default FRInput
