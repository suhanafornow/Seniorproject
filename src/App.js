import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/home"
import Aboutus from "./Pages/aboutus"
import Howitworks from "./Pages/howitworks"
import Newsletter from "./Pages/newsletter"
import Navbar from "./Components/navbar"
import Signup from "./Pages/signup"
import Startmeeting from './Pages/startmeeting';
import Login from "./Pages/login"
import Userprofile from "./Pages/userprofile"
import { UserContext } from './Context/usercontext';
import { useState } from 'react';
import Protect from './Context/protected';

function App() {
  const [user, setUser] = useState(null);
  return (
   <div> 
    <UserContext.Provider value = {{user, setUser}}>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/howitworks" element={<Howitworks/>}/>
      <Route path="/newsletter" element={<Newsletter/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/userprofile" element = {<Userprofile/>}/>
      <Route path= "/startmeeting" element = {<Startmeeting/>}/>




      
   




    </Routes>
    </UserContext.Provider>
   </div>
  )
}

export default App;
