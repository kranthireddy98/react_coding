import './index.css'

const TodoItem = props => {
  const {userDetails, deleteUser} = props
  const {id, title} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <button onClick={onDelete} className="button" type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
