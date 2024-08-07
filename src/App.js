import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  
  const [mode, setMode] = useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null); 
    }, 2500);
  }
  
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';  
      showAlert("Light mode has been enabled.","success");
    }else{
      setMode('dark')
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled.", "success");
    }
  }
  
  return (
    <>
    <Router>

   
    <Navbar title='TextUtils' aboutText="About" mode={mode} toggleMode={toggleMode}/>
    

      <div className="container my-1">
        <Alert alert={alert}/>
      </div>

      <Routes>
        <Route path="/About" element={<About/>}/>
          
       
        
        <Route path="/" element={
            <div className="container my-3">
              <TextForm heading="Enter text for analysis" mode={mode} showAlert={showAlert} />
            </div>
        }/>
          
        
      </Routes>

   
      </Router>
    </>
  );
}

export default App;
