import React, { useRef } from 'react'

function TodoForm(props) {
	const inputTodo = useRef(null)

	return (
		<>
			<input ref={inputTodo} />
			<button onClick={() => {
				props.addTodo(inputTodo.current.value)
				inputTodo.current.value = ''
			}}>Set todo</button>
		</>
	)
}

export default TodoForm