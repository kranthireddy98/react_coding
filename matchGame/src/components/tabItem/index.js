import './index.css'

const TabItem = props => {
  const {tabs, changeItems} = props
  const {tabId, displayText} = tabs
  const changeItem = () => {
    changeItems(tabId)
  }
  return (
    <li>
      <button onClick={changeItem} className="tabs-button" type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
