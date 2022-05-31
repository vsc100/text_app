import React, { useState } from 'react' // short key imrs
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UPPERCASE WAS CLICKED"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to uppercase", "danger");
    }
    const handleDownClick = () => {
        // console.log("UPPERCASE WAS CLICKED"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to lowercase", "danger");
    }


    const handleClear = () => {
        setText("")
    }
    const handleReverse = () => {
        let rvtext = text.split("");
        rvtext = rvtext.reverse();
        let newText = rvtext.join("");
        setText(newText);
    }
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }



    //setText("Correct way for changing state");

    //For find and replace function 
    const [wfind, findword] = useState('');
    const [wreplace, replaceword] = useState('');
    const onChange1 = (event) => {
        findword(event.target.value);
    }

    const onChange2 = (event) => {
        replaceword(event.target.value);
    }
    const handleReplace = () => {
        let newText = text.replaceAll(wfind, wreplace);
        setText(newText);
    }
    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    return (
        <>
            <div className='container' style={{ Color: props.mode === 'dark' ? props.col : 'white' }}>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : '#000000' }}>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? props.col : 'white', color: props.mode === 'dark' ? 'white' : '#000000' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-2" onClick={handleClear}> Clear Text </button>
                <button className="btn btn-primary mx-2" onClick={handleReverse}> Reverse Text </button>
                <button className="btn btn-primary mx-2" color='purple' onClick={handleCopy}> Copy </button>

            </div>
            <div className='container my-3'>
                <textarea className="find" value={wfind} onChange={onChange1} placeholder="Find" rows="1"></textarea>
                <textarea className="replace mx-2" value={wreplace} onChange={onChange2} placeholder="Replace" rows="1"></textarea><br></br>
                <button className="btn btn-primary" onClick={handleReplace}> Replace </button>
            </div>
            <div className="container">
                <h3> Text Summary : </h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h2>PREVIEW </h2>
                <p> {text} </p>
            </div>
            <br></br>
            
        </>
    )
}
