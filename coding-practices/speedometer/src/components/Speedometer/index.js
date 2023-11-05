import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  one = () => {
    this.setState(prevstate => ({count: prevstate.count + 10}))
  }

  two = () => {
    this.setState(prevstate => ({count: prevstate.count - 10}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="background">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />

        <h1 className="head">Speed is {count}mph</h1>
        <p className="head">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="bt1" type="button" onClick={this.one}>
            Accelerate
          </button>
          <button className="bt2" type="button" onClick={this.two}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
