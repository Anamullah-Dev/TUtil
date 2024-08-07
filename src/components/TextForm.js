import React, { useState } from 'react'



export default function TextForm(props) {

    const [text,setText]=useState('Enter text here');
    // console.log(useState('Enter text here'))

    const handleUpperCaseClick=()=>{
        console.log('Button clicked')

        let upperCaseText=text.toUpperCase();
        setText(upperCaseText);
        props.showAlert("Upper case clicked","success")
    }

    const handleLowerCaseClick=()=>{
        console.log('Button clicked')

        let lowerCaseText=text.toLowerCase();
        setText(lowerCaseText);
    }

    const handleTextFormChange=(event)=>{
        console.log('DSA')
        setText(event.target.value); //will add the text to already present text in 'text' variable
    }


  return (
    <>
          <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
                  <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="textForm" rows="8" 
                    value={text} onChange={handleTextFormChange}>
             </textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to lowercase</button>
        

    </div>

          <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'} my-2`}>
        <h1>Text summary</h1>
        <p>{text.split(" ").length}words, {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in text box"}</p>
    </div>
    </>
    
  )
}
