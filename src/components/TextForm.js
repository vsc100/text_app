import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UPPERCASE WAS CLICKED"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        //console.log("UPPERCASE WAS CLICKED");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text="wrong way for changing state";
    //setText("Correct way for changing state");
    return (
        <>
            <div>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myB" rows="8"></textarea>
                </div>
                <button className='btn btn-success mx-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase </button>
            </div>
            <br>
            </br>
            <div className="container">
                <h3> Text Summary : </h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h2>PREVIEW </h2>
                <p> {text} </p>
            </div>

        </>
    )
}

