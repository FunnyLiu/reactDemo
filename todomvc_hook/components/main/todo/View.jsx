import React from 'react'
import {Toggle} from './Toggle.jsx'
import {Destroy} from './Destroy.jsx'


export const View=(props) =>{

	const { id, completed, text, setEditing } = props;

	function onDoubleClick() {
		setEditing(id);
	}

	return (
		<div className="view">
			<Toggle id={id} completed={completed} />
			<label onDoubleClick={onDoubleClick}>{text}</label>
			<Destroy id={id} />
		</div>
	);
}
