import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {one: false, two: false}

  first = () => {
    this.setState(prevstate => ({one: !prevstate.one}))
  }

  second = () => {
    this.setState(prevstate => ({two: !prevstate.two}))
  }

  render() {
    const {one} = this.state
    const {two} = this.state
    return (
      <div className="background">
        <h1 className="head">Show/Hide</h1>
        <div className="card">
          <div>
            <button type="button" onClick={this.first} className="bt">
              Show/Hide Firstname
            </button>
            {one ? (
              <div className="small">
                {' '}
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div>
            <button type="button" onClick={this.second} className="bt">
              Show/Hide Lastname
            </button>
            {two ? (
              <div className="small">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
