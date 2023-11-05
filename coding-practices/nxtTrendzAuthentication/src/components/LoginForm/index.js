import React, {Component} from 'react'

class Login extends Component {
  state = {username: '', password: ''}

  onName = e => {
    this.setState({username: e.target.value})
  }

  onPass = e => {
    this.setState({password: e.target.value})
  }

  add = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        console.log(data) // Display the response data
      } else {
        console.error('Error:', response.statusText)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  render() {
    return (
      <form onSubmit={this.add}>
        <label htmlFor="name1">Name</label>
        <br />
        <input type="text" placeholder="name" onChange={this.onName} />
        <br />
        <label htmlFor="name2">Password</label>
        <br />
        <input type="password" placeholder="pass" onChange={this.onPass} />
        <br />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default Login
