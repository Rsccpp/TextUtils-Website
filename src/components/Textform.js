import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {jsPDF} from 'jspdf';



export default function Textform(props) {


  // For textBox
  const handleOnChange = (event) => {
    // console.log('onclick');
    setText(event.target.value);
  };
  
  const handleUpClick = ()=> {

      // console.log(text);     // To print text value in javascript
      let upCase = text.toUpperCase();
      setText(upCase);
      
      // props.showAlert("Converted to UpperCase", "success");
  };

  const handleDownClick = () => {

    // console.log(text);     // To print text value in javascript
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    // props.showAlert("Converted to LowerCase", "success");
    
  } 

  const handleClear = () => {
     let clear = " ";
     setText(clear);
    //  props.showAlert("Text cleared", "success");
  };

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(
         ()=> {
           alert('Text copied to clipboard!');
         },
         (err)=>{
          console.error("Failed to copy text: ", err);
         }
    );
 };

// Download as PDF
  const handleDownload = ()=> {
      const doc = new jsPDF();
      doc.text(text, 10, 10);  // Adjust text at position (10, 10) in pdf
      doc.save('download.pdf');   // Save the file as 'download.pdf
      props.showAlert("PDF downloading", "success");
  };

  // Remove ExtraSpace
  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // props.showAlert("Extra Space is Cleared", "success");
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="class container" style={{color: (props.mode === 'dark' ? 'grey' : 'white')}}>

          <h1 style={{color: (props.mode === 'light' ? 'black' : 'white')}} >{props.heading}</h1>

          <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: (props.mode === 'dark' ? 'grey' : 'white'), color: (props.mode === 'light' ? 'dark' : 'white')} }rows="8"></textarea>
                
          </div>
          <button disabled={text.length===0} className="bts bts-primary mx-1 my-1"  onClick={handleUpClick}> Change to UpperCase</button>
          <button disabled={text.length===0} className="bts bts-primary mx-1 my-1"   onClick={handleDownClick}> Change to LowerCase</button>
          <button disabled={text.length===0}className="bts bts-primary mx-1 my-1"   onClick={handleClear}>Clear Text</button>
          <button disabled={text.length===0}className="bts bts-primary mx-1 my-1"   onClick={handleCopy}>Copy to clipboard</button>
          <button disabled={text.length===0} className="bts bts-primary mx-1 my-1"   onClick={handleDownload}>Download Pdf</button>
          <button disabled={text.length===0} className="bts bts-primary mx-1 my-1"   onClick={handleExtraSpace}>Remove ExtraSpace</button>
      
     
        <div style={{color: (props.mode === 'light' ? 'black' : 'white')}}>
          <h2> Your text Summary: </h2>
          {/* By default 1 words and 1 characters count. */}
          <p> {text.split(" ").filter((elements)=> {return elements.length !==0}).length} words and {text.length} characters  </p>
          <p> { 0.008 * text.split(" ").filter((elements)=> {return elements.length !==0}).length } Minutes read</p>
          <h3> Preview </h3>
          <p>{text.length>0? text : "Nothing to preview"}</p>
        </div>
      </div>

    </>
  );
}


