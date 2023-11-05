import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  random = () => {
    this.setState(prevstate => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <h1>Count {count}</h1>
        {count % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>}
        <button type="button" onClick={this.random}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
