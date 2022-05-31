import './App.css';
import About from './components/About';
// import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



export default function App() {
  const bgColor = () => {
    if (mode === 'dark') { }
  }
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = col;
      document.body.style.Color = 'white';
      showalert("Dark Mode Enabled", "success");
      //document.title="Scribble Dark Mode" 
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode Enabled", "success")
    }

  }
  

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const [col, setcolor] = useState("#000000");
  const handleColor = (event) => {
    if (mode === 'light') {
      setcolor(event.target.value);
      //document.body.style.backgroundColor = 'white'
    }
    else {
      setcolor(event.target.value);
      //document.body.style.backgroundColor = 'pink';
    }
  }

  return (
    <>
      {/* <TextForm Heading="Type your Text"/> */}
      
      {/* <Router> */}
        <Navbar title='Scribble' mode={mode} toggleMode={toggleMode} col={col} handleColor={handleColor} />
        <Alerts alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<TextForm showalert={showalert} Heading="Type your Text" mode={mode} col={col} bgcolor={bgColor} />}/>
          </Routes> */}
          <TextForm showalert={showalert} Heading="Type your Text" mode={mode} col={col} bgcolor={bgColor} />
        </div>
      {/* </Router> */}
    </>
  );
}
