import './index.css'

const PasswordItem = props => {
  const {list, isPasswordShowing, deletePasswordItem} = props
  const {id, website, user, pass} = list
  const symbol = website[0].toUpperCase()

  const deleteItem = () => {
    deletePasswordItem(id)
  }

  return (
    <li className="list-item">
      <p className="symbol">{symbol}</p>
      <div>
        <p>{website}</p>
        <p>{user}</p>
        {isPasswordShowing ? (
          <p>{pass}</p>
        ) : (
          <img
            className="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button testid="delete" className="delete-button" type="button">
        <img
          onClick={deleteItem}
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItem
