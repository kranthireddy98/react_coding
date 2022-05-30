import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onBtnClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="backGroundContainer">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="spanned">{count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.onBtnClick}>
          Click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
