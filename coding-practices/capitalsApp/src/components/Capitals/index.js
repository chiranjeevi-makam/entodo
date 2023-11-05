import './index.css'

import {Component} from 'react'

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
  state = {capital: 'india'}

  change = event => {
    this.setState({capital: event.target.value})
  }

  render() {
    const {capital} = this.state
    const array = countryAndCapitalsList.splice(1, 5)
    return (
      <div className="background">
        <div className="card">
          <h1>Countries and Capitals</h1>
          <div className="di">
            <select id="op" onChange={this.change}>
              <option value="NEW_DELHI">NEW_DELHI</option>
              {array.map(each => (
                <option value={each.country} key={each.id} id={each.country}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <p>{capital}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
