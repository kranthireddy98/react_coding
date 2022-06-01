import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isButtonClicked: false, isLastButtonClicked: false}

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  onLastButtonClick = () => {
    this.setState(prevState => ({
      isLastButtonClicked: !prevState.isLastButtonClicked,
    }))
  }

  render() {
    const {isButtonClicked} = this.state
    const {isLastButtonClicked} = this.state

    const firstName = isButtonClicked ? <p className="show">Kranthi</p> : null
    const lastName = isLastButtonClicked ? <p className="show">Reddy</p> : null

    return (
      <div className="background-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="small-container">
            <button
              onClick={this.onButtonClick}
              type="button"
              className="button"
            >
              Show/Hide Firstname
            </button>
            {firstName}
          </div>
          <div className="small-container">
            <button
              onClick={this.onLastButtonClick}
              type="button"
              className="button"
            >
              Show/Hide Lastname
            </button>
            {lastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
