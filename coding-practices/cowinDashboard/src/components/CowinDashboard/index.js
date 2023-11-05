import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinDay from '../VaccinationCoverage'

import Age from '../VaccinationByAge'

import Gender from '../VaccinationByGender'

class CowinDashboard extends Component {
  state = {status: 'INITIAL', bar: [], pie: [], pie1: []}

  componentDidMount() {
    this.details()
  }

  details = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      this.setState({bar: data.last_7_days_vaccination})
      this.setState({pie: data.vaccination_by_age})
      this.setState({pie1: data.vaccination_by_gender})
      this.setState({status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAIL'})
    }
  }

  content = () => {
    const {status, bar, pie, pie1} = this.state
    switch (status) {
      case 'INITIAL':
        return (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        )
      case 'SUCCESS':
        return (
          <>
            <h1>Vaccination Coverage</h1>
            <VaccinDay data={bar} />
            <h1>Vaccination by gender</h1>
            <Gender data={pie1} />
            <h1>Vaccination by Age</h1>
            <Age data={pie} />
          </>
        )
      case 'FAIL':
        return (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <h1>Something went wrong</h1>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    const {status} = this.state

    return (
      <div className="structure">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logosize"
          />
          <h1 className="head">Co-Win</h1>
        </div>
        <p className="para">CoWIN Vaccination in India</p>
        {this.content()} {/* Call the content function */}
      </div>
    )
  }
}

export default CowinDashboard
