//import { useContext } from "react"
import { Todo } from "../interfaces/interfaces"
//import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"

interface props {
  todo: Todo
}

export const TodoItem = ({ todo } : props) => {

  const { toggleTodo } = useTodos()

  //const { toggleTodo } = useContext(TodoContext)


  /*const handleDoubleClick = () => {
    toggleTodo(todo.id)
    //console.log('handleDoubleClick:', todo.desc)
  } */

  return (<>
    <li 
      style={{ cursor: "pointer", textDecoration: todo.completed ? 'line-through' : '' }}
      onDoubleClick={() => toggleTodo(todo.id)}>
      { todo.desc }
    </li>
  </>)
}