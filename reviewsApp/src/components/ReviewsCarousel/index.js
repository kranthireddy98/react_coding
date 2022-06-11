import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  previousCarousal = () => {
    const {index} = this.state
    this.setState(prevState => ({index: prevState.index - 1}))
    if (index === 0) {
      this.setState({index: 0})
    }
  }

  nextCarousal = () => {
    const {lengthOfList} = this.props
    const {index} = this.state
    this.setState(prevState => ({index: prevState.index + 1}))
    if (index === lengthOfList - 1) {
      this.setState({index: lengthOfList - 1})
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(index)

    const individualList = reviewsList[index]

    const {imgUrl, username, companyName, description} = individualList

    return (
      <div className="background-container">
        <h1>Reviews</h1>
        <div className="buttons-container">
          <button
            testid="leftArrow"
            className="arrow"
            type="button"
            onClick={this.previousCarousal}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="image-container">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            testid="rightArrow"
            className="arrow"
            type="button"
            onClick={this.nextCarousal}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
