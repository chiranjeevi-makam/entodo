import './index.css'
import {Link} from 'react-router-dom'

const Head = () => (
  <nav className="nav">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="wave"
    />
    <ul className="order">
      <li>
        <Link clasName="p" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link clasName="p" to="/about">
          About
        </Link>
      </li>
      <li>
        {' '}
        <Link clasName="p" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Head
