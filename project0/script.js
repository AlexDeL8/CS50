const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0

async function newTodo() {
	let newListItemText = prompt("Enter text for your TODO:");
	itemCount++
	await createListItem(newListItemText, itemCount)
	itemCountSpan.innerHTML = itemCount
}

async function deleteTodo() {
	itemCount--
	await deleteListItem()
	itemCountSpan.innerHTML = itemCount
}

function createListItem(newListItemText, newListItemNum) {
	let newListItemNode = document.createElement("li")
	let newListItemText = document.createTextNode(newListItemText)
	newListItemNode.append(newListItemText)
	list.appendChild(newListItemNode)
}

function deleteListItem(listItemId) {

}
