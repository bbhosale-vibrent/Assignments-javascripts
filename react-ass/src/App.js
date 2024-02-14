import React, { createContext } from "react";
// import ChildC from "./contexthook/ChildC";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";
import FRInput from "./ForwardingRefs/FRInput";
import FRParentInput from "./ForwardingRefs/FRParentInput";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Products from './Pages/Products';

// const data = createContext();
// const data1 = createContext();

function App() {
// const name = "Bhagyashri";
// const age = "21";
 return(
 <>
{/* //     <data.Provider value={name}>
//       <data1.Provider value={age}>
//          <ChildC/>
//       </data1.Provider>
//     </data.Provider> */}
     <Router>
       <Navbar/>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="About" element={<About/>}/>            
           <Route path="Contact" element={<Contact/>}/>
           <Route path="Products" element={<Products/>}/>            
         </Routes>
     </Router>

{/* <ClickCounter/>
<HoverCounter/> */}

{/* <FRParentInput/>   */}
 </>

   )
  
 }
export default App;
// export {data,data1};
