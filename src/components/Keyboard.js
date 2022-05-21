import React from 'react'

class Keyboard extends Component{
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
          <button
            class='btn btn-lg btn-primary m-2'
            key={letter}
            value={letter}
          >
            {letter}
          </button>
        ));
      }
}

export default Keyboard