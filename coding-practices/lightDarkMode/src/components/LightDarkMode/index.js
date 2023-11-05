import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {status: true}

  onchange = () => {
    this.setState(prevstate => ({
      status: !prevstate.status,
    }))
  }

  render() {
    const {status} = this.state
    const value = status ? 'card1' : 'card2'
    return (
      <div className="background">
        <div className={value}>
          <h1>Click to change mode</h1>
          <button type="button" onClick={this.onchange}>
            {status ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
