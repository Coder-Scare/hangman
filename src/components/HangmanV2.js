import React, { useCallback, useEffect, useState } from 'react'
import randomWords from '../randomWords'
import '../css/HangmanV2.css'
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';
import Header from './Header';
import { motion } from 'framer-motion';

function getWord() {
  return randomWords[Math.floor(Math.random() * randomWords.length)];
}

function HangmanV2() {
    const [wordToGuess, setWordToGuess] = useState(getWord)

    const [guessedLetters, setGuessedLetters] = useState([]) // strings of length 1 will be passed

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter) //All incorrect letters that are not in the word to guess
    )

    //Lose and Win States
    const isLoser = incorrectLetters.length >= 6; //checks to see if 6 incorrect guesses has been made
    const isWinner = wordToGuess.split("").every(letter  => guessedLetters.includes(letter)) //checks word you are guessing to see if every letter has been filled in.
    // every function works by checking if every iteration in the loop is true, if so every returns true.

    const addGuessedLetter = useCallback((letter) => {
        //below checks to see if the letter guessed is already in guessed letters array, 
        console.log(letter);
        if (guessedLetters.includes(letter) || isLoser || isWinner) return //if already guessed then just return, do nothing essentially

        setGuessedLetters(currentLetters => [...currentLetters, letter]) //else get all guessed letters as current letters
        // return all the currentLetters and add this guessed letter to the array if not in the array already
    }, [guessedLetters, isLoser, isWinner])
    //added isLoser and isWinner to arrary and if statement to ensure that after one of these outcomes are met, the player will not be able to add any more letters using the keyboard
    useEffect(() => {
        const handler = (e) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return //Reg expression checks if we typed a letter between a-z if so continue if not ignore everything

            e.preventDefault() //clears function in a sense
            addGuessedLetter(key) //provides a key to track the letter guessed.
        }
        document.addEventListener("keypress", handler)
        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters, addGuessedLetter]) //mounting guessed letters provides the useEffect with the up to date version of our guesses

    

    // Restart the game
    useEffect(() => {
      const handler = (e) => {
        const key = e.key
        if (key !== "Enter") return //Continue playing the game is enter has not been pressed

        e.preventDefault()
        setGuessedLetters([]) //on restart we all want to clear guessed letters and change the word
        setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler)
    return () => {
        document.removeEventListener("keypress", handler)
    }
    }, [])

    const restart = () => {
      setGuessedLetters([]);
      setWordToGuess(getWord());
    }


  return (
    <>
    <Header className="Header" restart={restart} />
    
    <div className='Hangman-app-container'>
    {/* <button onClick={restart} className='btn-test'>Restart Test</button> */}
      <div className='game-result-container'>
        {isWinner && "Winner! - Click the restart button to try again"} 
        {/* Will make a restart button */}
        {isLoser && "Nice Try - Click the restart button to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <motion.div 
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="keyboard">
      <Keyboard 
        disabled={isWinner || isLoser} // Provides a win or lose logic to the game
        activeLetters={guessedLetters.filter(letter => 
        wordToGuess.includes(letter) //These are all the letters guessed thus far
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}/>
      </motion.div>
      
    </div>
    </>
  )
}

export default HangmanV2
