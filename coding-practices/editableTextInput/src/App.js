import './App.css'

import {Component} from 'react'

class App extends Component {
  state = {text: '', status: true}

  statusChange = () => {
    this.setState(prev => ({status: !prev.status}))
  }

  textChange = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, status} = this.state

    return (
      <div className="background">
        <div className="card">
          <h1>Editable Text Input</h1>
          {status ? (
            <div>
              <input type="text" onChange={this.textChange} value={text} />
              <button type="button" className="bt" onClick={this.statusChange}>
                Save
              </button>
            </div>
          ) : (
            <div>
              <p>{text}</p>
              <button type="button" className="bt" onClick={this.statusChange}>
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
