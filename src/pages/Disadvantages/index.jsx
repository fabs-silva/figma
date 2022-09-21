
import { Container } from '../../components/Container';
import { BottomButtons } from '../../components/BottomButtons'
import { motion } from 'framer-motion';
import './Disadvantages.css'

import internet from '../../assets/internet-pulp-fiction.gif';
import caixao from '../../assets/dancing-coffin.gif';
import joel from '../../assets/joel-santana.gif';

export function Disadvantages() {
  return (
    <Container>
      <h1>Desvantagens</h1>
      <ul className="disadvantages-list">
        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 0.5}}>necessita conexão com a internet <img src={internet} alt="gif do John Travolta confuso na frente de uma imagem do Chrome sem internet" /></motion.li>
        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 1}}>em inglês <img src={joel} alt="gif do Joel Santana" /></motion.li>
        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 1.5}}>foi comprada por US$ 20 bi pela Adobe<img src={caixao} alt="gif do meme do caixão" /></motion.li>
      </ul>
      <BottomButtons previous="/advantages" next="/what-i-need" />
    </Container>
  );
}
