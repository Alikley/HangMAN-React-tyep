/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';
import Words from './wordList.json'
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

function getWord () {
  return Words[Math.floor(Math.random() * Words.length)]

}


function App() {
  const [wordToGuess,setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incrrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )


  const isLoser = incrrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter =>
    guessedLetters.includes(letter))
  function addGuessedLetter(letter:string){
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters , letter])
  }

console.log(wordToGuess);


useEffect(() => {

  const handelr = (e:KeyboardEvent) => {
    const key = e.key
      if(!key.match(/^[a-z]$/)) return
        e.preventDefault()
        addGuessedLetter(key)
}


document.addEventListener("keypress",handelr)

return () => {
  document.removeEventListener("keypress" ,handelr)
}
}, [guessedLetters])



useEffect(() => {

  const handelr = (e:KeyboardEvent) => {
    const key = e.key
      if(key !== "Enter")  return
      e.preventDefault()
      setWordToGuess(getWord());

}


document.addEventListener("keypress",handelr)

return () => {
  document.removeEventListener("keypress" ,handelr)
}
}, [])
  
  return (
    <div className="app">
      <div className='Lose-win'> {isWinner && "Winner! - Refresh to try again"} 
      {isLoser && "Nice TRY! - Refresh to try again"}
      </div>
      
      <HangmanDrawing  numberOfGuesses={incrrectLetters.length}/>
      <HangmanWord reveal={isLoser}  guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf:"stretch",margin:"0 0 15rem"}}>
        <Keyboard  
        disabled={isWinner || isLoser}
        activeLetter={guessedLetters.filter(letter =>
          wordToGuess.includes(letter)
          )}
          inactiveLetters={incrrectLetters}
          addGuessedLetter={addGuessedLetter}
          
          />
      </div>

    </div>
  );
}

export default App;
