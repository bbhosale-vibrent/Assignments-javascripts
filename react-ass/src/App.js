import React, { Component, createContext } from "react";
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
import Login from "./HOCforlogin/Login";
import NavbarLogin from './HOCforlogin/NavbarLogin';
import HomeLogin from './HOCforlogin/HomeLogin';
import ContactLogin from './HOCforlogin/ContactLogin';
import AboutLogin from './HOCforlogin/AboutLogin';
import ProductLogin from './HOCforlogin/ProductLogin';
import PrivateRoute from "./HOCforlogin/PrivateRoute";
import Example from "./props/Example";

// const data = createContext();
// const data1 = createContext();

function App() {
// const name = "Bhagyashri";
// const age = "21";
 return(
 <>
   <Example name="Bhagyashri" age="21" />

{/* //     <data.Provider value={name}>
//       <data1.Provider value={age}>
//          <ChildC/>
//       </data1.Provider>
//     </data.Provider> */}
     {/* <Router>
       <NavbarLogin/>
       <Routes>
           <Route path="Login" element={<Login/>}/>
           <Route path="/" element={<PrivateRoute Component={HomeLogin}/>}/>
           <Route path="About" element={<PrivateRoute Component={AboutLogin}/>}/>            
           <Route path="Contact" element={<ContactLogin/>}/>
           <Route path="Products" element={<PrivateRoute Component={ProductLogin}/>}/>            
         </Routes>
     </Router> */}

{/* <ClickCounter/>
<HoverCounter/> */}

{/* <FRParentInput/>   */}
{/* <Login/> */}
 </>

   )
  
 }
export default App;
// export {data,data1};
