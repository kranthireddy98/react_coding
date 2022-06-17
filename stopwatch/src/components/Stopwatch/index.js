import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(() => {
      this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
    }, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state

    const seconds = Math.floor(timeInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state

    const minutes = Math.floor(timeInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="background-container">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="item-container">
            <div className="timer-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="Stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1>{time}</h1>
            <div>
              <button
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
                className="button start"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onStopTimer}
                className="button stop"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onResetTimer}
                className="button reset"
                type="button"
              >
                reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
