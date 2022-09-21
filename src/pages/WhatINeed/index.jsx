import { Container } from '../../components/Container';

export function WhatINeed() {
	return (
		<Container
			title={''}
			link={'/prototyping'}>
			<h1>O que um dev precisa saber de Figma?</h1>
			<ul>
				<li>
					Inspeção de código (web, iOS e Android) <br />
					Alerta! Somente parte visual
				</li>
				<li>
					Tamanhos e espaçamentos
					<br />
					para elementos agrupados - ctrl + clique no elemento ou botão direito
					- Select Layer - escolher a camada que deseja visualizar
				</li>
				<li>Visualizar ou esconder um grid (Ctrl + R)</li>
				<li>
					Exportar imagens e SVGs <br />- Ctrl + Shift + E para o Export Panel
					ou botão direito - Copy as (CSS ou SVG)
					<br /> Quando é uma imagem de fundo, clicar no elemento e, no painel
					direito Code, localizar o link File Name
				</li>
			</ul>
			<cite>
				Fonte:{' '}
				<a href="https://www.figma.com/best-practices/tips-on-developer-handoff/an-overview-of-figma-for-developers/">
					Melhores Práticas do Figma
				</a>
			</cite>
		</Container>
	);
}
