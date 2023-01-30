import '../css/HangmanDrawing.css';

const HEAD = (
    <div style= {{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px", 
        right: "-20px",
    }}
    />
)
const BODY = (
    <div style= {{
        width: "10px",
        height: "80px",
        background: "black",
        position: "absolute",
        top: "100px", 
        right: 0,
    }}
    />
)
const RIGHT_ARM = (
    <div style= {{
        width: "60px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "100px", 
        right: "-60px",
        rotate: "60deg",
        transformOrigin: "left top",
    }}
    />
)

const LEFT_ARM = (
    <div style= {{
        width: "60px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "100px", 
        right: "10px",
        rotate: "-60deg",
        transformOrigin: "right top",
    }}
    />
)
const RIGHT_LEG = (
    <div style= {{
        width: "80px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "170px", 
        right: "-70px",
        rotate: "60deg",
        transformOrigin: "left bottom",
    }}
    />
)
const LEFT_LEG = (
    <div style= {{
        width: "80px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "170px", 
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
    }}
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

// type HangmanDrawingProps = {
//     numberOfGuesses: number
// }

export function HangmanDrawing(props) {
    const numberOfGuesses = props.numberOfGuesses; //This property receives number of incorrect guesses from HangmanV2 as a prop

    return <div className="hangman-container">
        {BODY_PARTS.slice(0, numberOfGuesses)} {/* Start at 0 index and get all the way to the point of number of guesses, should show each body part as incorrect guesses are made */}
        <div className='hang-bar' />
        <div className='top-bar' />
        <div className='upright-bar' />
        <div className='bottom-bar' />

    </div>
}