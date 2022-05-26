
import React, {Component} from 'react'
import hi from './hi.png'
import styled, {keyframes} from 'styled-components';
import {bounce} from 'react-animations';

const Bounce =styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;


const header = () => {
  return (
    <>
    
    <img
    src={hi}
    
    class="w-100 center shadow-1-strong rounde center d mb-4 img-fluid"
    height={300}
    alt="Hangman"
  />
 
    <h2>
     Rules of the game:
    </h2>
    
    <ol>
      <li><h4>One of the top 100 hardest Hangman words will be randomly selected and you will have to guess the word</h4></li>
      
      <li><h4>As the game progresses, a segment of the gallows and of a victim is added for every suggested letter not in the word</h4></li>
      <li><h4>You can have up to 6 failed guesses before the man is hung</h4></li>
      <li><h4>If you guess the word before the man is hung, you win the game!</h4></li>

    </ol>
    <br></br>
    <br></br>
    
    
    
  <center>
   <div class="bouncy">
   <Bounce><svg width="80" height= "116" viewBox="0 0 80 116" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg></Bounce>
    </div>
    </center>
    
  </>
  


  
  )
  
  
}

export default header