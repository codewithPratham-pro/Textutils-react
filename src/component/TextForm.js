import React, {useState} from 'react'

export default function TextForm(props) {
    let [text, settext] = useState("Enter the text.");

    const updone = () =>{
        let uptext = text.toUpperCase() ; 
        settext(uptext);
        props.alertshow("Your text has been converted into UpperCase.", "success")
    }
    const lodone = () =>{
        let uptext = text.toLowerCase() ; 
        settext(uptext);
        props.alertshow("Your text has been converted into LowerCase.", "success")
    }

    const clickonchange = (event) =>{
        settext(event.target.value)
    } 
    const TextAbout = () =>{
        alert("If you press To UppperCase It will change your text in Upper case \n And the to LowerCase will change your text into LowerCase.")
    }
    const cleartext = () =>{
        settext('')
        props.alertshow("Your text has been cleared", "success")
    }
    const CopyText = () =>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.alertshow("Your text has been copied to your clipboard", "success")
    }
    const HendleEctraspases = () =>{
        let newtext = text.split(/[ ]+/)
        settext(newtext.join(" "))
        props.alertshow("Extra spaces has been removed from your text.", "success")
    }
    const lengthOfWord = () =>{
        let count = 0
        for (let i = 0; i < text.split(" ").length; i++) {
            if (text.split(" ")[i] ==="") {
                count++
            }
        }
        return text.split(" ").length - count
    }
    return (
        <>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text}  rows="10" onChange={clickonchange}></textarea>
            <div className="mb-3" id='btns'>
                <button id='btns1' className="btn btn-primary mt-4 mx-4" onClick={updone}>To UpperCase</button>
                <button id='btns2' className="btn btn-primary mt-4" onClick={lodone}>To LowerCase</button>
                <button id='btns3' className="btn btn-primary mt-4 mx-4" onClick={cleartext}>Clear Text</button>
                <button id='btns4' className="btn btn-primary mt-4 " onClick={HendleEctraspases}>Remove Extra Spaces</button>
                <button id='btns5' className="btn btn-primary mt-4 mx-3" onClick={CopyText}>Copy Text</button>
                <button id='btns6' className="btn btn-primary mt-4 mx-4" onClick={TextAbout}>About Them</button>
            </div>
            <div className="container">
                <h1>Your paraghraph have</h1>
                <p>{lengthOfWord()} words and {text.length} Characters</p>
                <p>Minutes to read {0.008 * text.split(" ").length}</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
