import { useState } from 'react'
import './index.css'

export default function Nav() {
  const [menuIsOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuIsOpen)
    if (!menuIsOpen) {
      document.documentElement.classList.add('nav-open')
    } else {
      document.documentElement.classList.remove('nav-open')
    }
  }

  const navCl = `nav ${menuIsOpen ? 'nav-open' : ''}`

  return (
    <nav className={navCl}>
      <div>
        <button
          onClick={toggleMenu}
          className="nav__toggle"
          aria-expanded={menuIsOpen}
          aria-controls="menu"
        >
          <span>Toggle menu</span>
        </button>

        <ul id="menu">
          <li>
            <a href="/#/" onClick={toggleMenu}>
              <strong>Home</strong>
              <span>is where the Jäger is</span>
            </a>
          </li>
          <li>
            <a href="/#/get-info" onClick={toggleMenu}>
              <strong>Get info</strong>
              <span>about the event</span>
            </a>
          </li>
          <li>
            <a href="/#/history/2017" onClick={toggleMenu}>
              <strong>History</strong>
              <span>of this ski event</span>
            </a>
          </li>
          <li>
            <a href="/#/game" onClick={toggleMenu}>
              <strong>Play</strong>
              <span>the game</span>
            </a>
          </li>
          <li>
            <a href="/#/login" onClick={toggleMenu}>
              <strong>Profile</strong>
              <span>showcases your MiraSkills</span>
            </a>
          </li>
          <li>
            <a href="/#/sign-up" onClick={toggleMenu}>
              <strong>Sign up</strong>
              <span>for the next MiraSki</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
