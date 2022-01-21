import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header';
import { Todos } from './MyComponents/Todos.js';

import { TodoItems } from './MyComponents/TodoItems.js';

function Footer() {
	return (
		<footer>
			<small>2021 All Rights reserved.</small>
		</footer>
	);
}

function App() {
	return (
		<div>
			<ol>
				<ul className="nav-items">This is first.</ul>
			</ol>
			<Footer />
		</div>
	);
}

export default App;
