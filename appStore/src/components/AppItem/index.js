import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
