import React, { useState } from 'react';

export const FirstComponent = () => {
	let web = 'https://mvbri.github.io/';
	let nameEntry = 'Maria V';

	const [name, setName] = useState(nameEntry);

	let courses = [
		'Master en React',
		'Master en JavaScript',
		'Master en CSS',
		'Master de PHP',
	];

	const changeName = (newName) => {
		setName(newName);
	};

	return (
		<div>
			<h2>First component</h2>
			<p>Mi nombre es: {name}</p>
			<p>Mi web es: {web}</p>

			<button onClick={(e) => changeName('Maria Victoria')}>Un botón</button>

			<h3>Curso</h3>
			<ul>
				{courses.map((course, index) => {
					return <li key={index}>{course}</li>;
				})}
			</ul>
		</div>
	);
};
