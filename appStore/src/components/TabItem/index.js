import './index.css'

const TabItem = props => {
  const {tabList, changeState, isActive} = props
  const {tabId, displayText} = tabList

  const changeTabId = () => {
    changeState(tabId)
  }
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button className={tabBtnClassName} type="button" onClick={changeTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
