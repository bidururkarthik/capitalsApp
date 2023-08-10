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

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  getCapital = event => {
    this.setState(each => ({activeId: event.target.value}))
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)

    return (
      <div className="bgcontainer">
        <div className="cardcontainer">
          <h1 className="heading">Countries And Capitals</h1>

          <div className="drodowncaontainer">
            <select
              name="country"
              className="countryname"
              onChange={this.getCapital}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
