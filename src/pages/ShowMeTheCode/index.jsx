import { motion } from 'framer-motion';
import { BottomButtons } from '../../components/BottomButtons';
import { Container } from '../../components/Container';
import yankees from '../../assets/cc-sabathia.gif';

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

			<motion.img
				initial={{ opacity: 0, translateY: '-100%' }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ type: 'spring', delay: 2.2 }}
				end={{ opacity: 0 }} src={yankees} alt="gif de um jogador de baseball comemorando" />

			<motion.a
				initial={{ opacity: 0, translateY: '-100%' }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ type: 'spring', delay: 2.5}}
				end={{ opacity: 0 }}
				style={{fontSize: '1.5rem'}}
				href="https://www.figma.com/file/zMrCxZatLT7iYeIshU1NTd/Deploy-Projeto-Workshop-Componentes-(Community)?node-id=0%3A1">
				Figma
			</motion.a>
			<BottomButtons
				previous="/what-i-need"
				next="/prototyping"
			/>
		</Container>
	);
}
