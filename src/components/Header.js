import React from 'react'
import '../css/Header.css'
import HelpModal from '../Modal/HelpModal';
import { MdOutlineRestartAlt } from 'react-icons/md'
import { motion } from "framer-motion"

const Header = (props) => {
  const restart = props.restart;
  return (
    <div className='header-container'>
      <div className="hangman-title-container">
        <motion.h1 
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.75 }}
          whileHover={{scale: 1.1}}>Hang Man</motion.h1>
        <motion.p
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
        >Find the hidden word - Enter a letter using your mouse or keyboard</motion.p>
      </div>
      <motion.div
       initial={{ x: 200 }}
       animate={{ x: 0 }}
       transition={{ type: "spring", duration: 1 }}
       className="menu-items-container">
        <button onClick={restart} className='btn restartGame'><MdOutlineRestartAlt/></button>
        <HelpModal />
      </motion.div>
      
    </div>
  )
}

export default Header