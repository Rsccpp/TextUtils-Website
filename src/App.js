import ReactDom from 'react-dom/client'
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
// To import react-router for smooth navigation
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   BrowserRouter
// } from "react-router-dom";




function App() {
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout( ()=> {
      setAlert(null);
    }, 2000)
  }
  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#08353f';
      showAlert("Dark mode is Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is Enabled", "success")

      // To change Title dynamically
      document.title = "TextUtils - Light Mode";

      // Instant Visible
      // setInterval( ()=> {
      //   document.title = "TextUtils - Amazing Mode";
      // }, 2000)
    }
  }

  const [rmode, setRedMode] = useState('light');

  const redMode = ()=> {
    if(rmode === 'light') {
      setRedMode("Red")
      document.body.style.backgroundColor = '#ea0c21c9'
      showAlert("Red mode is Enabled", "success")
    }
    else {
      setRedMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is Enabled", "success")
    }
  }

  const root = ReactDom.createRoot(document.getElementById('root'));

  root.render (
    <>

       <Navbar title=" TextUtils " aboutText="About Us " mode={mode} rmode={rmode} toggleMode={toggleMode} redMode={redMode} />
      <Alert alert={alert} />
      <div className="container my-3">
    
     <Textform heading="Enter the text to analyze " mode={mode} showAlert={showAlert}/> 
       {/* <About />  */}
       </div>
    </>

  );
}


// const root = ReactDom.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
