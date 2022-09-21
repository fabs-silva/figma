import { motion } from 'framer-motion';
import figmaLogo from '../../assets/figma.svg';
import { BottomButtons } from '../../components/BottomButtons';
import { Container } from '../../components/Container';
import './Home.css';

export function Home() {
	return (
		<motion.div>
			<Container>
				<div className="top-title">
					<img
						src={figmaLogo}
						alt="logo do Figma"
					/>
					<h1>Figma</h1>
				</div>
				<div className="texts">
					<p>
						(se essa apresentação fosse feita pelo Capital Humano, este
						subtítulo seria...)
					</p>
					<h2>O que é? Onde vive? O que come?</h2>
				</div>
				<BottomButtons next="definition" />
			</Container>
		</motion.div>
	);
}
