// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState("light")
  const [textt, setText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setTimeout(() => {
      setAlert()
    }, 3500);
    setAlert({
      msg: message,
      typee: type
    });
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setText("Enable Dark Mode")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.getElementById("exampleFormControlTextarea1").style.backgroundColor = 'white'
      document.getElementById("exampleFormControlTextarea1").style.color = 'black'
      showalert("Your light mode has been Enabled", "success");
      setMode("light");
      document.title = "TextUtiles - Light"
    }
    else {
      setText("Enable Light Mode")
      document.body.style.backgroundColor = 'rgb(44, 44, 44)'
      document.body.style.color = 'white'
      document.getElementById("exampleFormControlTextarea1").style.backgroundColor = '#212529'
      document.getElementById("exampleFormControlTextarea1").style.color = 'white'
      showalert("Your dark mode has been Enabled", "success")
      setMode("dark");
      document.title = "TextUtiles - Dark"
    }
  }
  const setcolor = (event) => {
    if (mode === "dark") {
      showalert("You can't change the color of website while you are in dark mode", "danger")
    }
    else {
      document.body.style.backgroundColor = event.target.value;
      document.body.style.color = 'white';
      document.getElementById("navbar").style.color = 'black';
      document.title = "TextUtiles - Custom"
    }
  }
  const defaulttheme = () =>{
  setText("Enable Dark Mode")
  document.body.style.backgroundColor = 'white'
  document.body.style.color = 'black'
  document.getElementById("exampleFormControlTextarea1").style.backgroundColor = 'white'
  document.getElementById("exampleFormControlTextarea1").style.color = 'black'
  showalert("Your default mode has been Enabled", "success");
  setMode("light");
  document.title = "TextUtiles - Home"
  }

  
  return (
    <>
      <Navbar title='TextUtiles' about='About Us' home='Home' mode={mode} toggleModea={toggleMode} text={textt} setmode={setMode} setcol={setcolor} def={defaulttheme}/>
      <Alert showalertt={alert}  />
      {/* <Navbar/> */}
      <div className="container my-5">
        <TextForm heading='Enter Text' alertshow={showalert} />
      </div>
    </>
  )
}

export default App;
