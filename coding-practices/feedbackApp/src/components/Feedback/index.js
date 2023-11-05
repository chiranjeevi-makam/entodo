import './index.css'

import {Component} from 'react'

const Feed = props => {
  const {use, change} = props
  const handle = () => {
    change()
  }
  const {name, imageUrl} = use
  return (
    <li className="final">
      <button type="button" className="bt" onClick={handle}>
        <img src={imageUrl} alt={name} className="photo" />
      </button>
      <p>{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {status: false}

  onchange = () => {
    this.setState({status: true})
  }

  render() {
    const {status} = this.state
    const {resources} = this.props
    const {emojis} = resources
    console.log(emojis)

    return (
      <div className="background">
        {status ? (
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"
              alt="love emoji"
            />
            <h1>Thank You</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="card">
            <div>
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul className="unorder">
                {emojis.map(each => (
                  <Feed use={each} change={this.onchange} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
