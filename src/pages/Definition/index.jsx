import { motion } from 'framer-motion';
import { BottomButtons } from '../../components/BottomButtons';
import { Container } from '../../components/Container';
import './Definition.css';

export function Definition() {
	return (
		<motion.div>
			<Container>
				<h1>Definição</h1>
				<blockquote className="definition-text">
					<h2>
						"Editor gráfico de vetor e prototipagem de projetos de design"
					</h2>
					<cite>- Wikipedia</cite>
				</blockquote>
				<BottomButtons
					previous="/"
					next="/advantages"
				/>
			</Container>
		</motion.div>
	);
}
