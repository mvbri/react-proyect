import React from 'react';

export const FirstComponent = () => {
	let name = 'Maria';
	let web = 'https://mvbri.github.io/';

	return (
		<div>
			<h2>First component</h2>
			<p>Mi nombre es: {name}</p>
			<p>Mi web es: {web}</p>
		</div>
	);
};
