import './index.css'

import {Component} from 'react'

class Login extends Component {
  onbut = async () => {
    const position = {
      method: 'POST',
    }
    const response = await fetch('https://apis.ccbp.in/login', position)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <>
        <h1>Please Login</h1>
        <button type="button" onClick={this.onbut}>
          Login with sample cred
        </button>
      </>
    )
  }
}

export default Login
