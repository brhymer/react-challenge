import React, { Component } from 'react';
class TextInputBox extends Component {

    setInput = this.props.setInput;
    render(props) {
        return (
            
            <div className="my-4">
                <h2 className="text-3xl font-bold">Enter a string of text below</h2>
                <div>
                    <textarea className="border-4 border-blue-400 rounded-md" id="input" cols="50"/>
                </div>
                <button 
                    className="bg-blue-700 text-white p-4 rounded-md"
                    onClick={()=>this.setInput({input:document.getElementById('input').value})}
                >
                    Try it out!
                </button>
                
            </div>
        );
    }
}

export default TextInputBox;
