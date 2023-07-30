import Styled from './Keyboard.module.css'
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "o",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]
type Props = {
    activeLetter:string[]
inactiveLetters:string[]
addGuessedLetter: (letter:string) => void
disabled:boolean
}

const Keyboard = (props: Props) => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))"
    ,gap:".5rem"}}>
        {KEYS.map(key => {
            const isActive = props.activeLetter.includes(key)
            const inactive = props.inactiveLetters.includes(key)

            return(
               <button onClick={() => props.addGuessedLetter(key)} className={`${Styled.btn} ${isActive ? Styled.active : ""} 
               ${inactive ? Styled.inactive : ""}`} disabled={inactive || isActive || props.disabled} key={key}>
                {key}</button> 
            )
        })}
    </div>
  )
}

export default Keyboard