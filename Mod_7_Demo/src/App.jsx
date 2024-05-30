import './App.css';
import BasicButtons from './buttons';
import InputBox from inputBox;
import React from 'react';

function App() {
  const [inputBox, setInputBox] = useState({
    input: "",
  });

  const handleInputBoxUpdate = (updatedInput) => {
    setInputBox(updatedInput)
  };
  <div id="input">
  <InputBox onChange = {handleInputBoxUpdate}></InputBox>
  <p>{inputBox.input}</p>
  </div>

  return (
    <>
    <div>
      <div id="buttons">
        <BasicButtons></BasicButtons>
      </div>

    </div>
    </>
  )
}

export default App;
