import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onMangoClick = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananaClick = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="background-container">
        <div className="middle-container">
          <h1>
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="image-con">
              <img
                className="image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                onClick={this.onMangoClick}
                className="button"
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="image-con">
              <img
                className="image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                onClick={this.onBananaClick}
                className="button"
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
