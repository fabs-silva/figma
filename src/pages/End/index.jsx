import ratinho from '../../assets/ratinho-ra-tim-bum.gif';
import { BottomButtons } from '../../components/BottomButtons';
import { Container } from '../../components/Container';

export function End() {
	return (
		<Container>
			<h1>Agora acabou!</h1>
			<img
				src={ratinho}
				alt="gif do ratinho do banho do Castelo Rá-tim-bum"
			/>
			<p style={{fontSize: '1.25rem'}}>Apresentação elaborada por Fabiana Silva em React</p>
			<BottomButtons
				previous="/prototyping"
				next="/"
			/>
		</Container>
	);
}
