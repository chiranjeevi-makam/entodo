import './index.css'

import {Component} from 'react'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {list: [], name: '', comment: ''}

  render() {
    return (
      <form className="background">
        <h1>Comments</h1>
        <div className="arrange">
          <div>
            <p>Say something about 4.0 technologies</p>
            <input type="text" placeholder="Your Name" />
            <br />
            <br />

            <textarea rows="15" cols="30" placeholder="Your Comments">
              hfhk
            </textarea>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="Comments"
          />
        </div>

        <div>
          <button type="submit">Add Comment</button>
        </div>
        <hr />
        <p>
          <span>0</span>Comments
        </p>
        <ul></ul>
      </form>
    )
  }
}

export default Comments
