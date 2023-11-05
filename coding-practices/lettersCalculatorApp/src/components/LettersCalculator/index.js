import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  change = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <div>
          <h1>Calculate The Letters You Entered</h1>
          <label htmlFor="to">Enter the phrase</label>
          <br />
          <input type="text" id="to" onChange={this.change} />
          <div className="number">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <img
          src="
https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
