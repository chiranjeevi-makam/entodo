import './index.css'
import {Component} from 'react'

class Home extends Component {
  state = {status: false}

  change = () => {
    this.setState(prevstate => ({status: !prevstate.status}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="background">
        <div className="card">
          {status ? (
            <h1 className="head">Welcome User</h1>
          ) : (
            <h1 className="head"> Please Login</h1>
          )}
          <button type="button" onClick={this.change}>
            {status ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
