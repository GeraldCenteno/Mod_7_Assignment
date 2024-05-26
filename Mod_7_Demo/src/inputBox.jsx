import { useState } from "react";

function InputBox(props){
    const [inputBox, setInputBox] = useState({
        input: "",
    });

    const handleInputBoxChange = (e) => {
        setInputBox(prevInput => (
            {...prevInput, input: e.target.value}
        ))
        props.onChange({...inputBox, input: e.target.value})
    }

    return(
        <div>
            <div>
                <label htmlFor="input">Enter Desired Page:<br></br></label>
                <input type="text" id="input" name="input" value={inputBox.input} onChange={handleInputBoxChange}/>
            </div>

        </div>
    )
}

export default InputBox;