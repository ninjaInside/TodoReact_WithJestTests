import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import TodoForm from 'Components/TodoForm.jsx'
import TodoList from 'Components/TodoList.jsx'

import styles from 'Styles/main.sass'

function TodoApp(props) {
	const [todos, setTodo] = useState([])

	function addTodo(value) {
		if (value.length > 0) {
			setTodo([...todos, value.trim()])
		}
	}

	return (
		<div className={styles.todoField}>
			<div className={
				`	${styles.wrraper} 
					${styles.wrraper_w400} 
					${styles.wrraper_flexC}
					${styles.wrraper_mgt35}`}>
				<span
					className={styles.todoField__logo}>It's todo list</span>
				<TodoForm addTodo={addTodo}/>
				<TodoList 
					list={todos} 
					className={styles.todoField__todosList}/>
			</div>
		</div>
	)
}

ReactDOM.render(
	<TodoApp />,
	document.querySelector('#root'),
)