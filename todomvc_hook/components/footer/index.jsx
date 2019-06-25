import React from 'react'
import {useTodos} from '../TodosProvider.jsx'
import {useFilter} from '../FilterProvider.jsx'

function Count(props) {

	const [todos, dispatch] = useTodos();
	const activeCount = todos.filter(({ completed }) => completed === false)
		.length;
	const itemsLeft = ` item${activeCount !== 1 ? 's' : ''} left`;

	return (
		<span className="todo-count">
			<strong>{activeCount}</strong>
			{itemsLeft}
		</span>
	);
}


function Filters(props) {

	const [filter] = useFilter();

	function selectedClass(match) {
		return filter === match ? 'selected' : '';
	}

	return (
		<ul className="filters">
			<li>
				<a className={selectedClass('')} href="#/">
					All
				</a>
			</li>
			<li>
				<a className={selectedClass('active')} href="#/active">
					Active
				</a>
			</li>
			<li>
				<a className={selectedClass('completed')} href="#/completed">
					Completed
				</a>
			</li>
		</ul>
	);
}




function ClearCompleted(props) {

	const [todos, dispatch] = useTodos();
	const showClearCompletedClass =
		todos.filter(({ completed }) => completed).length !== 0 ? '' : 'hidden';

	function onClick() {
		dispatch({ type: 'clear-completed' });
	}

	return (
		<button
			className={`clear-completed ${showClearCompletedClass}`}
			onClick={onClick}
		>
			Clear completed
		</button>
	);
}


function Footer(props) {
	'use strict';

	const [todos] = useTodos();
	const noTodosClass = todos.length === 0 ? 'hidden' : '';

	return (
		<footer className={`footer ${noTodosClass}`}>
			<Count />
			<Filters />
			<ClearCompleted />
		</footer>
	);
}
export default Footer

