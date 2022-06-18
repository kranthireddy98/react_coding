import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isAnswerActive: false}

  changeState = () => {
    this.setState(prevState => ({
      isAnswerActive: !prevState.isAnswerActive,
    }))
  }

  renderAnswer = () => {
    const {isAnswerActive} = this.state
    const {list} = this.props
    const {answerText} = list

    if (isAnswerActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {list} = this.props
    const {questionText} = list
    const {isAnswerActive} = this.state
    return (
      <li className="list-item">
        <div className="question-container">
          <div>
            <h1>{questionText}</h1>
          </div>
          <button onClick={this.changeState} className="button" type="button">
            {isAnswerActive ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
