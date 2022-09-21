import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function BottomButtons({ previous, next }) {
	return (
		<div className="bottom-buttons">
			{previous && (
				<Link
					to={previous}
					type="button"
					className="button"
					aria-label="anterior">
					↞
				</Link>
			)}
			{next && (
				<Link
					to={next}
					type="button"
					className="button"
					aria-label="próximo">
					↠
				</Link>
			)}
		</div>
	);
}
