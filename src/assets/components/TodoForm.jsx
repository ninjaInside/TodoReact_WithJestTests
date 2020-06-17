import React, { useRef } from 'react'

import styles from '../styles/main.sass'

function TodoForm(props) {
	const inputTodo = useRef(null)

	return (
		<>
			<input 
				ref={inputTodo}
				className={styles.todoField__inputAdd}
				placeholder='Add Todo'/>
			<button 
				className={styles.todoField__btn}
				onClick={() => {
					props.addTodo(inputTodo.current.value)
					inputTodo.current.value = ''}}>Set todo</button>
		</>
	)
}

export default TodoForm