import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const About = 'About'
  return (
    <nav className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <p>Wave</p>
      </div>
      <ul className="nav-link-container">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">{About}</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
