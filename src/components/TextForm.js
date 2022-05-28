import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UPPERCASE WAS CLICKED"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleClear = ()=>{
        setText("")
    }

    const handleReverse = ()=>{
        let rvtext=text.split("");
        rvtext=rvtext.reverse();
        let newText=rvtext.join("");
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

    //For find and replace function 
    const [wfind,findword] = useState('');
    const [wreplace, replaceword] = useState('');
    const onChange1 = (event) => {
        findword(event.target.value);
    }
    const onChange2 = (event) => {
        replaceword(event.target.value);
    }
    const handleReplace = () =>{
        let newText=text.replaceAll(wfind,wreplace);
        setText(newText);
    }

    return (
        <>
            <div>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myB" rows="8"></textarea>
                </div>
                <button className='btn btn-success mx-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-2" onClick={handleClear}> Clear Text </button>
                <button className="btn btn-primary mx-2" onClick={handleReverse}> Reverse Text </button>
            </div>
            {/* <br>
            </br>
            <div className="container">
                <h3> Text Summary : </h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <h2>PREVIEW </h2>
                <p> {text} </p>
            </div> */}
            <br></br>
            <div>
            <textarea className="find mb-2" value={wfind} onChange={onChange1} placeholder="Find" rows="1"></textarea><br></br>
            <textarea className="replace mb-2" value={wreplace} onChange={onChange2} placeholder="Replace" rows="1"></textarea>
            </div>
            <div>
            <button className="btn btn-primary mx-2" onClick={handleReplace}> Replace </button>
            </div>

        </>
    )
}

