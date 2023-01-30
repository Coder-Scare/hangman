import '../css/HangmanWord.css'

// const word = "test";
// const guessedLetters = ["t", "e"];

export function HangmanWord(props) {
    const guessedLetters = props.guessedLetters; //Using props to pass these into the HangmanWord component to be used to render different words each time and particular letters upon guessing
    const wordToGuess = props.wordToGuess;
    const reveal = props.reveal; // pass reveal propn through

    return <div className="Hangman-word-container">
        {wordToGuess.split("").map((letter, index) => ( //spilts the words' letters up and iterates through them using map which creates a new array.
            <span className='Hangman-word' key= {index} /*key added to track the uniqueness of each letter*/>
                <span
                    style={{
                        visibility: guessedLetters.includes(letter) || reveal // This checks if guessed letters are included in the span letter. If so make this letter visible else remain hidden.
                        // the passed reveal prop shows entire word on a loser state
                        ? "visible" 
                        : "hidden" , 
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "white", // checks whether word is revealed and if the letter has been guessed correctly, if say make this specific letter red otherwise remain white.
                    }}
                >
                    {letter}
                    </span>
                </span>

        ))}

    </div>
    
}