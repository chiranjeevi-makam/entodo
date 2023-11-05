import './index.css'

const Com = props => {
  const {details} = props
  const {name, comment, id} = details
  const initial = name.splice(0, 1)
  return (
    <li>
      <div>
        <div className="amber">{initial}</div>
        <p>less than one minute</p>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
            <p>Like</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="detele"
          />
        </div>
      </div>
      <p></p>
    </li>
  )
}
