import React from 'react';
// import PropTypes from 'prop-types';


export default function Navbar(props) {

  // const[myColor, setColor] = useState({
  //   color: "#092958e8",
  //   backgroundColor: "white"
  // });

  // const[text, setText] = useState("dark mode");

  // const changeOnColor = ()=> {
  //   if(myColor.color == "#092958e8") {
  //     setColor({
  //       color: "white",
  //       backgroundColor: "#092958e8"
  //     })
  //     setText("dark mode")
  //   }
  //   else {
  //     setColor({
  //       color:"#092958e8",
  //       backgroundColor: "white"
  //     })
  //     setText(" Enable dark mode")
  //   }
  // }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> {props.title } </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/"> { props.aboutText}</a> */}
            </li>
            <li className="nav-item dropdown">
              
            </li>
            
          </ul>
          
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault " >Enable Dark Mode</label>
        </div>
        {/* <div className={`form-check form-switch text-${props.rmode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.redMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault " >Enable Red Mode</label>
        </div> */}
   
      </div>
     </nav>
    </div>
  );
}

{/* Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
} */}

{/* // Navbar.defaultProps = { */}
{/* //     title: 'Default Title',
//     aboutText: 'Default About Text',

// } */}