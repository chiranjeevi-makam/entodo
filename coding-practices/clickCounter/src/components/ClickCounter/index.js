import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <h1 className="head">
          The Button has been clicked <span className="spa">{count}</span> times
        </h1>
        <p>Click the button to increase the count button!</p>
        <button className="button1" type="button" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
