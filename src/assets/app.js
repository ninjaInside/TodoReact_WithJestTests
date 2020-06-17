import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

WebFont.load({
	google: {
		families: ['MuseoModerno']
	}
})

import TodoForm from 'Components/TodoForm.jsx'
import TodoList from 'Components/TodoList.jsx'

import styles from './styles/main.sass'

function TodoApp(props) {
	const [todos, setTodo] = useState([])

	function addTodo(value) {
		if (value.length > 0) {
			setTodo([...todos, value.trim()])
		}
	}

	return (
		<div className={styles.todoField}>
			<div className={styles.todoField__field}>
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