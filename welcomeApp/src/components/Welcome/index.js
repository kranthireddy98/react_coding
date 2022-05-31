import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onButtonClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  changeSub = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.changeSub()

    return (
      <div className="background">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.onButtonClick}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
