import './index.css'

const Denominations = props => {
  const {Details, DeductMoney} = props
  const {value} = Details

  const onDeductMoney = () => {
    DeductMoney(value)
  }
  return (
    <li>
      <button className="button" onClick={onDeductMoney} type="button">
        {value}
      </button>
    </li>
  )
}

export default Denominations
