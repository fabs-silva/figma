import { Container } from '../../components/Container';

export function Advantages() {
  return (
    <Container title={'Vantagens'} link={'/disadvantages'}>
      <ul>
        <li>versão gratuita</li>
        <li>colaborativo em tempo real</li>
        <li>acesso via navegador</li>
        <li>autosave (desde que conectado à internet)</li>
        <li>código da parte visual dos elementos</li>
      </ul>
    </Container>
  );
}
