
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import {
 // BrowserRouter,
  Routes,
  Route 
 } from "react-router-dom";



function App() {
  return (
  <>
    <Navbar/>
  <div className="container my-4">
    <Routes>
      <Route path='/TextForm' element={<TextForm/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    
  </div>
  </>
    
  
  );
}

export default App;
