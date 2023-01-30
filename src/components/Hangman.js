import React, { useEffect, useState } from 'react'
import randomWords from '../randomWords';

const randWord = randomWords[Math.floor(Math.random() * randomWords.length)]; //Provides you with a random number which will provide a random word in the RandomWords array

function Hangman({duration = 1200000}) {
    
    const word = randWord.toUpperCase(); // The word being guessed (Will need to randomize from an array)
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //Letters used to help guess the word
    // Create a state for guessed letters that stores all guessed letters
    const [guessedLetters, setGuessedLetters] = useState([]); 
    // Create a state for correct guesses that stores the correct guesses in an array.
    const [correctGuesses, setCorrectGuesses] = useState([])
    // Create state for whether time is up or not
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => { // useEffect sets a new state for setTimeUp to true after 2 minutes have passed using setTimeout method and duration
        const timeout = setTimeout(() => {
            setTimeUp(true);
        }, duration);

        return () => clearTimeout(timeout); //clears timeout function after setTimeUp reaches 0
    }, [duration])
    // splits each letter up in the word and iterates through them using map. If letter is included in correctGuesses array then ternary operate (?) returns letter or leaves it as blank
    const maskedWord = word.split('').map(letter =>
        correctGuesses.includes(letter) ? letter : "_").join(" ");

  return (
    <div 
        style={{
            // maxWidth: "800px",
            // display: "flex",
            // flexDirection: "column",
            // gap: "2rem",
            // margin: "0 auto",
            // alignItems: "center"
        }}
    >
        <p>{maskedWord}</p> {/* splits the words, fills it with _ to hide the letter and joins the _ together */}
        {    
           // The below iterates through the alphabets array and creates a button for each letter of the alphabet.
            alphabets.map((alphabet, index) => 
            <button key={index} onClick={() => { //Onclick if the letter is included in the word, update the usestate of setCorrectGuesses to that particular letter in the alphabet- basically replaces each hidden line if guessed correctly.
                if (word.includes(alphabet)) {
                    setCorrectGuesses([...correctGuesses, alphabet])
                } // [Need to add a else which eliminates the word from being selected and and knocks off a life from the hang man]
            }}>{alphabet}</button>)}
            {/* with a time parameter Otherwise if no more _ are present then you win */}
            {timeUp ?
            <p>You Lost!</p> :
            !maskedWord.includes("_") && <p>You won!</p>}
    </div>
  )
}

export default Hangman