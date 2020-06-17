import React from 'react'
import renderer from 'react-test-renderer'

import Todo from '../components/Todo.jsx'
import TodoList from '../components/TodoList.jsx'
import TodoForm from '../components/TodoForm.jsx'

test(`Test "Todo.jsx" component`, () => {
	let component = renderer.create(<Todo value='todos' />)

	let tree = component.toJSON()

	expect(tree).toMatchSnapshot()
})

test(`Test "TodoList.jsx" component`, () => {
	let component = renderer.create(<Todo value='todos' />)

	let tree = component.toJSON()
	
	expect(tree).toMatchSnapshot()
})

test(`Test "TodoForm.jsx" component`, () => {
	let component = renderer.create(<Todo value='todos' />)

	let tree = component.toJSON()
	
	expect(tree).toMatchSnapshot()
})