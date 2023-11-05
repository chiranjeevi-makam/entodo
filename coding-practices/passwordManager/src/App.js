import './App.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

const Card = props => {
  const {user, del, status} = props
  const {website, name, password, id} = user
  const initial = name.slice(0, 1)
  const handle = () => {
    del(id)
  }

  return (
    <li className="liststructure">
      <div className="initial">
        <h1>{initial}</h1>
      </div>
      <div>
        <p>{website}</p>
        <p>{name}</p>
        {status ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star"
          />
        )}
      </div>
      <button
        className="delete"
        data-testid="delete"
        type="button"
        onClick={handle}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {
    list: [],
    website: '',
    name: '',
    password: '',
    status: false,
  }

  updatesearch = e => {
    const { list } = this.state
  const searchValue = e.target.value.toLowerCase()
  const filteredList = list.filter(
    each =>
      each.name.toLowerCase().includes(searchValue) ||
      each.website.toLowerCase().includes(searchValue)
  )
  this.setState({ list: filteredList, search: searchValue })
}
  }

  find = () => {
    const {list, search} = this.state
    const searchupdate = list.filter(each => each.name !== search)
    this.setState({list: searchupdate})
  }

  del = id => {
    const {list} = this.state
    const deleteitems = list.filter(each => each.id !== id)
    this.setState({list: deleteitems})
  }

  check = () => {
    this.setState(prev => ({status: !prev.status}))
  }

  updateweb = e => {
    this.setState({website: e.target.value})
  }

  updatename = e => {
    this.setState({name: e.target.value})
  }

  updatepass = e => {
    this.setState({password: e.target.value})
  }

  add = e => {
    e.preventDefault()
    const {list, website, name, password} = this.state
    const newdata = {
      website,
      name,
      password,
      id: uuidv4(),
    }
    this.setState({
      list: [...list, newdata],
      website: '',
      name: '',
      password: '',
    })
  }

  render() {
    const {list} = this.state;
    const {status, website, name, password} = this.state;
    const update = list;
    console.log(update);
    return (
      <div className="background">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="inputs">
          <form className="form">
            <h1>Add New Password</h1>
            <div className="userinput">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <hr />
              <input
                type="text"
                placeholder="Enter Website"
                className="inputsize"
                value={website}
                onChange={this.updateweb}
              />
            </div>

            <div className="userinput">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <hr />
              <input
                type="text"
                placeholder="Enter Username"
                className="inputsize"
                value={name}
                onChange={this.updatename}
              />
            </div>

            <div className="userinput">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
              />
              <hr />
              <input
                type="password"
                placeholder="Enter Password"
                className="inputsize"
                value={password}
                onChange={this.updatepass}
              />
            </div>

            <button type="submit" onClick={this.add}>
              Add
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="passimage"
          />
        </div>

        <br />
        <br />
        <div className="secondpage">
          <div className="top">
            <h1>Your Passwords</h1>
            <p>{update.length}</p>
            <div className="searchinput">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
              />
              <hr />
              <input
                type="search"
                placeholder="Search"
                className="searchborder"
                onChange={this.updatesearch}
              />
            </div>
          </div>
          <hr />
          <div className="checkbox">
            <input type="checkbox" id="checkbox" onClick={this.check} />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>
          <ul className="wrap">
            {update.length === 0 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              update.map(each => (
                <Card
                  user={each}
                  key={each.id}
                  del={this.del}
                  status={status}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
