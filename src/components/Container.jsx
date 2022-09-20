import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {motion} from  'framer-motion'


export function Container({ title, link, background, children }) {
  return (
    <motion.div 
    className={background ? 'container container-bg' : 'container'}
    style={background && {background: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${background})`}}
    
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1>{title}</h1>
      {children}
      <Link to={link} type="button">
        Próximo
      </Link>
    </motion.div>
  );
}
