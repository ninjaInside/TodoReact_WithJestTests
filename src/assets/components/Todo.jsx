import React, { useRef } from 'react'

import styles from '../styles/main.sass'

function Todo(props) {
	let todo = useRef(null)

	return (
		<li className={styles.todoItem} ref={todo}>
			<span className={styles.todoItem__text}>{props.value}</span>
			<button 
				className={styles.todoItem__btn}
				onClick={() => {
					todo.current.remove()
				}}>C</button>
		</li>
	)
}

export default Todo