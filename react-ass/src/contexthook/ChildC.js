import React, { useContext } from 'react'
import { data,data1} from '../App'

function ChildC() {
  const name = useContext(data);
  const age = useContext(data1);
  return (
    <div>
      <h1>heyy ... My name is {name} and age is {age}</h1>
      {/* <data.Consumer>
        {
          (name) =>{
            return (
              <data1.Consumer>
                {
                  (age) =>{
                    return(
                      <h1>My name is {name} and age is {age}</h1>
                    )
                  }
                }
              </data1.Consumer>
            )
          }
        }
      </data.Consumer>
       */}
    </div>
  )
}

export default ChildC
