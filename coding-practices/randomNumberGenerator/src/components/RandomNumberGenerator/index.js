import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onchange = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="bt" onClick={this.onchange}>
            Generate
          </button>
          <p className="head">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
