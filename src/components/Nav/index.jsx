import { useState } from 'react'
import './index.css'

export default function Nav() {
  const menu = document.getElementById('menu');
  const [menuIsOpen, setMenuOpen] = useState(false)
  const toggleMenu = (_evt) => {
    setMenuOpen(!menuIsOpen)
    if (!menuIsOpen) {
      document.documentElement.classList.add('nav-open');
      menu.hidden = false;
      menu.querySelector(':not([disabled])').focus();
    } else {
      document.documentElement.classList.remove('nav-open');
      menu.hidden = true;
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
          {/* <li>
            <a href="/#/login" onClick={toggleMenu}>
              <strong>Profile</strong>
              <span>showcases your MiraSkills</span>
            </a>
          </li> */}
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
