import React from 'react'

type Props = {
    guessedLetters:string[]
    wordToGuess:string
    reveal:boolean
}

const HangmanWord = (props: Props) => {
  return (
    <div style={{display:"flex", gap: "2rem" , fontSize:"6rem" , 
    fontWeight:"bold" , textTransform:"uppercase"}}>
        {props.wordToGuess.split("").map((letter, index) => (
            <span style={{borderBottom: ".1em solid black"}} key={index}>
                <span style={{visibility:props.guessedLetters.includes(letter)|| props.reveal ? "visible" : 
            "hidden",
            color: !props.guessedLetters.includes(letter) && props.reveal?"red" : "black"
            
            }}> {letter}</span>
            </span>
        ))}
    </div>
  )
}

export default HangmanWord