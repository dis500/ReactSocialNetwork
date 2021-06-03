import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">Profile</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/dialogs">Messages</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/news">News</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/music">Music</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Nav