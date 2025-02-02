import React, { use } from 'react';
import ReactDom from 'react-dom/client';
import {useState} from 'react';


export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor:"white"

  })
  const [button, setStyle] = useState("Enable  dark mode")

  const toggleButton = ()=> {
           if(myStyle.color == "black"){
               setMyStyle({
                 color: 'white',
                 backgroundColor: 'black'
               })
               setStyle("Enable light mode");
           }
           else {
            setMyStyle({
              color: 'black',
              backgroundColor: 'white'
            })
            setStyle("Enable dark mode");
           }
  }

  return (
    <div>
      <>
      <p style={myStyle}>
        Most systems need several languages for different parts of the system Partha Pratim ◦ HTML for front-end rendering and Javascript for active front-end logic
        Das
        ◦ Java for servlet (business layer) and JSP for server-end embedding
        Objectives &
        Outline	◦ SQL for data manipulation
        Know Your
        C/C++	• Nature of Application decides the choice of the language

      </p>
      
      </>
      <button className="btn btn-primary my-5" onClick={toggleButton} type="button" style={myStyle}>{button} </button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<About />);