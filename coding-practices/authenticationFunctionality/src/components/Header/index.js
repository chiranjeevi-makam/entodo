import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="order">
    <li className="name">
      <Link to="/home">Home</Link>
    </li>

    <li className="name">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
