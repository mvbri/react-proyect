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
			<p>
				Mi nombre es:{' '}
				<strong className={name.length <= 4 ? 'green' : 'red'}>{name}</strong>
			</p>
			<p>Mi web es: {web}</p>

			<input
				type='text'
				onChange={(e) => changeName(e.target.value)}
				placeholder='Cambia el nombre'
			/>

			<button
				onClick={(e) =>
					console.log('El valor guardado en este estado es:', name)
				}
			>
				Mostrar valor de estado
			</button>

			<button onClick={(e) => changeName('Maria Victoria')}>
				Cambiar nombre
			</button>

			<h3>Curso</h3>
			<ul>
				{courses.map((course, index) => {
					return <li key={index}>{course}</li>;
				})}
			</ul>
		</div>
	);
};
