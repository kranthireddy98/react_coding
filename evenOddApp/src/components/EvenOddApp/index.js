import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  randomNumber = () => Math.floor(Math.random() * 100)

  onButtonClick = () => {
    this.setState(prevState => ({
      number: prevState.number + this.randomNumber(),
    }))
  }

  render() {
    const {number} = this.state

    return (
      <div className="back-container">
        <div className="content-container">
          <h1>Count {number}</h1>
          <p>Count is {number % 2 === 0 ? 'Even' : 'Odd'}</p>
          <button onClick={this.onButtonClick} type="button">
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
