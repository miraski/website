import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AppStatusContext from '../../context/AppStatusContext'
import './index.css'

export default function Nav() {
  const appStatus = useContext(AppStatusContext)

  const menu = document.getElementById('menu')
  const [menuIsOpen, setMenuOpen] = useState(false)
  const toggleMenu = (_evt) => {
    setMenuOpen(!menuIsOpen)
    if (!menuIsOpen) {
      document.documentElement.classList.add('nav-open')
      menu.hidden = false
      menu.querySelector(':not([disabled])').focus()
    } else {
      document.documentElement.classList.remove('nav-open')
      menu.hidden = true
    }
  }

  return (
    <nav className="nav">
      <div>
        <button
          onClick={toggleMenu}
          className="nav__toggle"
          aria-haspopup="true"
          aria-expanded={menuIsOpen}
          aria-controls="menu"
        >
          <span>Toggle menu</span>
        </button>

        <ul id="menu">
          <li>
            <Link to="/" onClick={toggleMenu}>
              <strong>Home</strong>
              <span>is where the Jäger is</span>
            </Link>
          </li>
          {appStatus.getInfoPageOnline && (
            <li>
              <Link to="/get-info" onClick={toggleMenu}>
                <strong>Get info</strong>
                <span>about the event</span>
              </Link>
            </li>
          )}
          <li>
            <Link to="/history/2017" onClick={toggleMenu}>
              <strong>History</strong>
              <span>of this ski event</span>
            </Link>
          </li>
          <li>
            <Link to="/game" onClick={toggleMenu}>
              <strong>Play</strong>
              <span>the game</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/login" onClick={toggleMenu}>
              <strong>Profile</strong>
              <span>showcases your MiraSkills</span>
            </Link>
          </li> */}
          <li>
            <Link to="/sign-up" onClick={toggleMenu}>
              <strong>Sign up</strong>
              <span>for the next MiraSki</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
