import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import './HelpModal.css'
import { motion } from 'framer-motion'

const HelpModal = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal) //used to toggle modal and button click to true or false depending by setting it to the opposite of the current state in the modal.
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <button 
        onClick={toggleModal}
        className="btn-modal">
        Help
      </button>

      {modal && ( //short cct operater = short version of ternary operator so if modal is true return things below else return nothing
          <div className="modal">
          <div 
            onClick={toggleModal} 
            className="overlay">
            <motion.div
              className="modal-content">
              <h2>How to Play</h2>
              <ul className='instructions'>
                <li>Guess the letter in the word by clicking on a letter or pressing any letter on your keyboard.</li>
                <li>If you guess the correct letter, this letter will appear on screen and the word will start to reveal itself.</li>
                <li>However, if you select the wrong letter you will lose a life and a hanged man will start to appear!</li>
                <li>You have 6 lives so 6 incorrect guesses before it is game over.</li>
                <li>You can restart the game at anytime by clicking the restart button in the top right of the screen.</li>
                <li>If you restart at any point you will be provided with a new random word to guess</li>
                <li className='tip'>Tip: You can also restart at any time using the enter key on your keyboard.</li>
              </ul>
              <h4>Enjoy!</h4>
              <button 
                className='close-modal'
                onClick={toggleModal}
                >
               <RxCross2/>
              </button>
            </motion.div>
          </div>
        </div>
      )}

      
    </div>
  )
}

export default HelpModal
