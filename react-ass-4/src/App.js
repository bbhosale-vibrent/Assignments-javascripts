import './App.css';
import NavbarLogin from './HOCforlogin/NavbarLogin';
import Login from './HOCforlogin/Login';
import HomeLogin from './HOCforlogin/HomeLogin';
import AboutLogin from './HOCforlogin/AboutLogin';
import ContactLogin from './HOCforlogin/ContactLogin';
import ProductLogin from './HOCforlogin/ProductLogin';
import PrivateRoute from './HOCforlogin/PrivateRoute';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
       <NavbarLogin/>
       <Routes>
           <Route path="Login" element={<Login/>}/>
           <Route path="/" element={<PrivateRoute Component={HomeLogin}/>}/>
           <Route path="About" element={<PrivateRoute Component={AboutLogin}/>}/>            
           <Route path="Contact" element={<ContactLogin/>}/>
           <Route path="Products" element={<PrivateRoute Component={ProductLogin}/>}/>            
         </Routes>
     </Router> 

  );
}

export default App;
