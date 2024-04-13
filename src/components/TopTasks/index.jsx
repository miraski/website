import { Link } from 'react-router-dom'
import './index.css'

export default function TopTasks() {
  return (
    <nav className="top-tasks">
      <ul>
        <li>
          <Link to="/get-info">
            <strong>Get info</strong>
            <span>about the event</span>
          </Link>
        </li>
        <li>
          <Link to="/history/2018">
            <strong>History</strong>
            <span>of this ski event</span>
          </Link>
        </li>
        <li>
          <Link to="/game">
            <strong>Play</strong>
            <span>the game</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
