import { Container } from '../../components/Container';
import { BottomButtons } from '../../components/BottomButtons';
import starwars from '../../assets/star-wars-storm-trooper.gif';
import './Prototyping.css'
import {motion} from 'framer-motion';

export function Prototyping() {
  return (
    <Container>
      <h1 style={{textAlign: 'center'}}>Mas, afinal, <br />preciso saber montar telas?</h1>
      <img src={starwars} alt="gif de um stormtrooper com uma placa dizendo 'No'" />
      <div className="prototyping-texts">
      <motion.p
       initial={{opacity: 0, translateY: '-100%'}}
       animate={{opacity: 1, translateY: 0}}
       transition={{delay: 1}}>
        É mais importante saber <span style={{color: 'yellow'}}>interpretar o que foi criado</span> do que criar
        protótipos do zero
      </motion.p>
      <motion.p  initial={{opacity: 0, translateY: '-100%'}}
      animate={{opacity: 1, translateY: 0}}
      transition={{delay: 3}}>
      <span style={{fontSize: '1.75rem', textDecoration: 'underline'}}>MAS</span>, aprender nunca é demais e saber montar telas facilita ainda mais o
        trabalho
      </motion.p>
      </div>
      <BottomButtons previous="/show-me-the-code" next="/end" />
    </Container>
  );
}
