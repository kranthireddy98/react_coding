import {Component} from 'react'

import Denominations from '../DenominationItem'

import './index.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDebit = value => {
    const {amount} = this.state
    if (amount > 0) {
      this.setState(prevState => ({amount: prevState.amount - value}))
    }
  }

  render() {
    const {amount} = this.state

    return (
      <div className="background">
        <div className="card-container">
          <div className="name-container">
            <p className="symbol">S</p>
            <h1>Sarah Williams </h1>
          </div>

          <div className="your-balance">
            <p className="bal">Your Balance</p>
            <div>
              <p>{amount}</p>
              <p className="rupp">Rupees</p>
            </div>
          </div>
          <div>
            <p className="with">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="list-cont">
              {denominationsList.map(each => (
                <Denominations
                  key={each.id}
                  Details={each}
                  DeductMoney={this.onDebit}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
