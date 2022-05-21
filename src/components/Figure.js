import React from 'react'

const figure = ({wrongLetters}) => {
    const errors = wrongLetters.length;

  return (
      <svg height="250" width="200" className="figure-container">
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Head --> */}
        {errors > 0 && <circle cx="140" cy="70" r="20"/>}
        {/* <!-- Body --> */}
        {errors > 1 && <line x1="140" y1="90" x2="140" y2="150"/>}
        {/* <!-- Arms --> */}
        {errors > 2 && errors < 6 && <line x1="140" y1="120" x2="120" y2="100"/>}
        {errors > 3 && errors < 6 &&<line x1="140" y1="120" x2="160" y2="100"/>}

        {errors > 5 && <line x1="140" y1="120" x2="120" y2="140"/>}
        {errors > 5 &&<line x1="140" y1="120" x2="160" y2="140"/>}
        {/* <!-- Legs --> */}
        {errors > 4 && <line x1="140" y1="150" x2="120" y2="180"/>}
        {errors > 5 &&<line x1="140" y1="150" x2="160" y2="180"/>}
        
        {/* <!-- Dead Face --> */}

        {/* <!-- Left Eye --> */}
        {errors > 5 &&<line x1="125" y1="60" x2="135" y2="70"/>}
        {errors > 5 &&<line x1="135" y1="60" x2="125" y2="70"/>}
        {/* <!-- Right Eye --> */}
        {errors > 5 &&<line x1="145" y1="60" x2="155" y2="70"/>}
        {errors > 5 &&<line x1="155" y1="60" x2="145" y2="70"/>}
        {/* <!-- Right Eye --> */}
        {errors > 5 && <circle cx="140" cy="80" r="5"/>}

      </svg>
  )
}

export default figure