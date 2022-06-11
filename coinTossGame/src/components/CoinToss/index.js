import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {toss: 0, head: 0, tail: 0}

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({toss: 0})
      this.setState(prevState => ({head: prevState.head + 1}))
    } else {
      this.setState({toss: 1})
      this.setState(prevState => ({tail: prevState.tail + 1}))
    }
  }

  render() {
    const {toss, head, tail} = this.state

    let imageUrl
    if (toss === 0) {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="background-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="decide">Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <button className="button" onClick={this.tossTheCoin} type="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p>{`Total: ${head + tail}`}</p>
            <p>{`Heads: ${head}`}</p>
            <p>{`tails: ${tail}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
