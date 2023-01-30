import styles from '../css/Keyboard.module.css'  //used css module here as it allows you to provided javascript funtionality easier to css styles

//All the alphabet which make up the keyboard Keys
const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export function Keyboard(props) {
    const activeLetters = props.activeLetters;
    const inactiveLetters = props.inactiveLetters;
    const addGuessedLetter = props.addGuessedLetter;
    let disabled = props.disabled; // passed the disabled prop through - default is false
    console.log(addGuessedLetter)
    return <div className={styles.keyboardContainer}>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key.toLowerCase())
        const isInactive = inactiveLetters.includes(key.toLowerCase())
        return (
            <button
              onClick={() => addGuessedLetter(key.toLowerCase())}
              className={`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : "" }`} // using css modules if active letter which are correct letters are selected style these buttons a specific way, otherwise if inactive letters so incorrect letters are selected, eliminate them. 
              disabled={isInactive || isActive || disabled} //once an outcome is reached as well the entire keyboard is disabled from a click standpoint
              key={key}>
                {key}
            </button>
        )
      })}
    </div>
}