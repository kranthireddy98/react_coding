import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onButtonClick = () => {
    const random = Math.floor(Math.random() * 100)
    this.setState({number: random})
  }

  render() {
    const {number} = this.state

    return (
      <div className="background-container">
        <div className="topic-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a Random Number in The Range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onButtonClick}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
