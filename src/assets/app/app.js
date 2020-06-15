import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Todo from 'Components/Todo.jsx'
import TodoForm from 'Components/TodoForm.jsx'

function TodoApp(props) {
	const [todos, setTodo] = useState([])

	return (
		<div>
			<span>It's todo list</span>
			<TodoForm addTodo={value => {
				if (value.length > 0) {
					setTodo([...todos, value.trim()])
				}
			}} />
			<ul>
				{todos.map((todo, index) => <Todo value={todo} key={index} />)}
			</ul>
		</div>
	)
}

ReactDOM.render(
	<TodoApp />,
	document.querySelector('#root'),
)