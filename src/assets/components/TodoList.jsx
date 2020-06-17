import React from 'react'

import Todo from 'Components/Todo.jsx'

import styles from '../styles/main.sass'

function TodoList(props) {
	return (
		<ul className={styles.todoField__todosList}>
			{props.list.map((todo, index) => <Todo value={todo} key={index} />)}
		</ul>
	)
}

export default TodoList