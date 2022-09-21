import { BottomButtons } from "../../components/BottomButtons";
import { Container } from "../../components/Container";
import figma from '../../assets/design.jpg';
import "./WhatINeed.css";

export function WhatINeed() {
  return (
    <Container>
      <h1>O que um dev precisa saber?</h1>
	  <div className="what-i-need-list">
      <ul>
        <li>
          Inspeção de código (web, iOS e Android)
		  <br /><span style={{color: 'red'}}>Alerta!</span> Somente parte visual
        </li>
        <li>
          Tamanhos e espaçamentos
          <br />
         Para elementos agrupados:
		  <p style={{marginLeft: '2rem'}}>✓ CTRL + clique no elemento </p>
          <p style={{marginLeft: '2rem'}}>✓ Botão direito  ˃ 'Select Layer' ˃ escolher a camada que deseja visualizar</p>
        </li>
        <li>Visualizar ou esconder um grid (CTRL + R)</li>
        <li>
          Exportar imagens e SVGs
		  <p style={{marginLeft: '2rem'}}>✓ CTRL + SHIFT + E para acessar o 'Export Panel'</p>
          <p style={{marginLeft: '2rem'}}>✓ Botão direito - 'Copy as' (CSS ou SVG)</p>
          <p style={{marginLeft: '2rem'}}>✓ Quando é uma imagem de fundo, clicar no elemento e, no painel direito 'Code', localizar o link 'File Name'</p>
        </li>
      </ul>
	  <div>
	  <img src={figma} alt="imagem de um Mac com um software de prototipação aberto" />
	  </div>
	  </div>
      <cite class="what-i-need-cite">
        Fonte:{" "}
        <a href="https://www.figma.com/best-practices/tips-on-developer-handoff/an-overview-of-figma-for-developers/">
          Melhores Práticas do Figma
        </a>
		{" "} (em inglês)
      </cite>
      <BottomButtons previous="/disadvantages" next="/show-me-the-code" />
    </Container>
  );
}
