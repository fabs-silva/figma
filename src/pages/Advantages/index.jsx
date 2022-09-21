import { Container } from '../../components/Container';
import { BottomButtons } from '../../components/BottomButtons';
import { motion } from 'framer-motion';
import './Advantages.css'

import gratis from '../../assets/julius.gif';
import teamwork from '../../assets/teamwork.gif';
import ie from '../../assets/internet-explorer.gif';
import autosave from '../../assets/didnt-autosave.gif';
import css from '../../assets/family-guy-css.gif';

export function Advantages() {
  return (
    <Container>
      <h1>Vantagens</h1>
      <ul className="advantages-list">
        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 0.5}}>versão gratuita <img src={gratis} alt="gif do Julius, do seriado Todo Mundo Odeia o Chris" /></motion.li>
        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 1}}>colaborativo em tempo real <img src={teamwork} alt="gif do seriado Seinfeld" /></motion.li>
        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 1.5}}>acesso via navegador <img src={ie} alt="gif do Internet Explorer" /></motion.li>
        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 2}}>autosave (desde que conectado à internet) <img src={autosave} alt="gif com a frase 'I didn't autosave it'" /></motion.li>
        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 2.5}}>código da parte visual dos elementos <img src={css} alt="gif do seriado Family Guy" /></motion.li>
      </ul>
      <BottomButtons previous="/definition" next="/disadvantages" />
    </Container>
  );
}
