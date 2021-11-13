import React, { useState } from 'react';
import './App.css';
import TextInputBox from './components/TextInputBox';
import ResultBox from './components/ResultBox';


function App(props) {
  const[input, setInput] = useState('');
  return (
    <div className="App" >
    <img className= "my-3 mx-auto w-3/12" src ="Foldscope_Logo.png" alt="Foldscope Logo"/>
      <div className="mt-14 font-sans mx-auto w-6/12 bg-gray-200">
          <TextInputBox
            setInput = {setInput}
          />
          <ResultBox 
            input = {input}
          />
      </div>
    </div>
  );
}

export default App;
