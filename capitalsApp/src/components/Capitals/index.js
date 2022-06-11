import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {ActiveCapital: countryAndCapitalsList[0].country}

  onChangeCapital = event => {
    const id = event.target.value

    const filteredList = countryAndCapitalsList.filter(
      eachCountry => id === eachCountry.id,
    )
    const {country} = filteredList[0]

    this.setState({ActiveCapital: country})
  }

  render() {
    const {ActiveCapital} = this.state

    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select id="select" onChange={this.onChangeCapital}>
            {countryAndCapitalsList.map(each => (
              <option value={each.id} key={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="isCapital">is capital of which country</p>
          <p className="country">{ActiveCapital}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
