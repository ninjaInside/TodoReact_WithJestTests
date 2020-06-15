import React, { useRef } from 'react'

import styles from 'Styles/main.sass'

function TodoForm(props) {
	const inputTodo = useRef(null)

	return (
		<>
			<input 
				ref={inputTodo}
				className={styles.todoField__inputAdd}/>
			<button 
				onClick={() => {
					props.addTodo(inputTodo.current.value)
					inputTodo.current.value = ''}}
				className={styles.todoField__buttonAdd}>Set todo</button>
		</>
	)
}

export default TodoForm