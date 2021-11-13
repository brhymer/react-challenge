import React, { useState } from 'react';
import './App.css';
import TextInputBox from './components/TextInputBox';
import ResultBox from './components/ResultBox';


function App(props) {
  const[input, setInput] = useState('');
  return (
    <div className="App mt-14 font-sans mx-auto w-6/12 bg-grey-500">
        <TextInputBox
          setInput = {setInput}
        />
        <ResultBox 
          input = {input}
        />
    </div>
  );
}

export default App;
