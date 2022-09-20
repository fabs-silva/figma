import { Container } from '../../components/Container';
import  background from '../../assets/pexels-deepu-b-iyer-2857477.jpg';
import {motion} from  'framer-motion'

export function Home() {
  return <motion.div
  >
    <Container title={'Figma'} link={'/definition'} background={background}/>
  </motion.div>
}
