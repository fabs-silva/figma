import ratinho from '../../assets/wuGAF2.gif';
import { BottomButtons } from '../../components/BottomButtons';
import { Container } from '../../components/Container';

export function End() {
	return (
		<Container>
			<h1>Agora acabou!</h1>
			<img
				src={ratinho}
				alt="Ratinho do banho do Castelo Rá-tim-bum"
			/>
			<p>Apresentação elaborada por Fabiana Silva em React</p>
			<BottomButtons
				previous="/show-me-the-code"
				next="/"
			/>
		</Container>
	);
}
