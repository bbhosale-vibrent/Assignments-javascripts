import { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
//   const [state, setState] = useState([])
  useEffect(() => {
    axios.get('https://data.covid19india.org/v4/min/data.min.json')
      .then((res) => {
        console.log(res.data.AN.total)
        // setState(res.data.state);
      })
  }, [])
  
  return (
   <></>
  )
}

export default Axios;