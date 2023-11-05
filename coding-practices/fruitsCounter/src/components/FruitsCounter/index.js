import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count: 0, count2: 0}

  one = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  two = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count} = this.state
    const {count2} = this.state
    return (
      <div className="background">
        <div className="card">
          <h1>
            Bob ate <span className="count"> {count} </span> mangoes{' '}
            <span className="count"> {count2} </span> bananas
          </h1>
          <div className="fruit">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="photo"
                alt="mango"
              />
              <br />
              <button className="bt" type="button" onClick={this.one}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="photo"
                alt="banana"
              />
              <br />
              <button className="bt" type="button" onClick={this.two}>
                Eat Bananas
              </button>{' '}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
