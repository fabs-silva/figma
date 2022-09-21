import { motion } from 'framer-motion';
import React from 'react';
import './style.css';

export function Container({ children }) {
	return (
		<motion.div
			className="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			{children}
		</motion.div>
	);
}
