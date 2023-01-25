import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponentent';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Repaso de React</p>
				<FirstComponent />
			</header>
		</div>
	);
}

export default App;
