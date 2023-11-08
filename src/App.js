import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/home"
import Aboutus from "./Pages/aboutus"
import Howitworks from "./Pages/howitworks"
import Newsletter from "./Pages/newsletter"
import Navbar from "./Components/navbar"

function App() {
  return (
   <div> 
    <Navbar/>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/howitworks" element={<Howitworks/>}/>
      <Route path="/newsletter" element={<Newsletter/>}

      />
   




    </Routes>

   </div>
  );
}

export default App;
