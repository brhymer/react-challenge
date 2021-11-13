import React, { Component } from 'react';



class Resultbox extends Component {

    render(props) {
        let inputArray = [];
        let inputMap = new Map();
        let topFiveArray = [];
        let size = 5;
        if (this.props.input.input) {
            inputArray = this.props.input.input.split('');
            // remove whitespace characters
            inputArray = inputArray.filter( (str) => {
                return /\S/.test(str);
            });
            document.getElementById('result').classList.remove('h-0');
            // populate the map
            for (let i = 0; i < inputArray.length; i++) {                
                inputMap.set(inputArray[i], (inputMap.get(inputArray[i]) || 0) + 1);           
            }
            // sort the input map entries
            let sortedInputMap = new Map([...inputMap.entries()].sort((a, b) => b[1] - a[1]));
            // size is five unless the number of characters is less than that
            if (inputMap.size < 5) size = inputMap.size;
            for (let i =0; i<size; i++) {
                let entry = Array.from(sortedInputMap.keys())[i];
                topFiveArray.push(entry);
            }
        }

        return (
            <div className="mb-40 bg-gray border-2 h-0 transition-all overflow-hidden" id="result">
                <h2 className="text-xl font-bold">Results</h2>
                <h2 className="my-4 text-xl underline" >By character:</h2>

                {Array.from(inputMap.keys()).map(key => <p># of '{key}'s: {inputMap.get(key)}</p>)}
                <h2 className="my-4 text-xl underline" >Top {size}:</h2>
                {topFiveArray.map(entry => <p>{entry}</p>)}
                <p className="mb-6">  </p>
            </div>
        );
    }
}

export default Resultbox;
