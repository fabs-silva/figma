import { motion } from 'framer-motion';
import { BottomButtons } from '../../components/BottomButtons';
import { Container } from '../../components/Container';

export function ShowMeTheCode() {
	return (
		<Container>
			<h3>E agora, o momento que todos estavam esperando...</h3>
			<motion.h1
				initial={{ opacity: 0, translateY: '-100%' }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ type: 'spring', delay: 2 }}
				end={{ opacity: 0 }}>
				Show me the code!
			</motion.h1>
			<BottomButtons
				previous="/what-i-need"
				next="/prototyping"
			/>
		</Container>
	);
}
