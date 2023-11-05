import {Link} from 'react-router-dom'
import './index.css'

const Item = props => {
  const {data} = props
  const {id, imageUrl, title, author, topic, avatarUrl} = data
  return (
    <Link to={`apis.ccbp.in/blogs/${id}`}>
      <li className="itemContainer">
        <img src={imageUrl} alt={title} className="photosize" />
        <div className="ItemDetails">
          <p className="para">{title}</p>
          <p className="main">{topic}</p>
          <div className="name">
            <img src={avatarUrl} alt={title} className="avatar" />
            <p className="para">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default Item
