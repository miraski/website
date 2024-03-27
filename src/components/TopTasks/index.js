import './index.css'

export default function TopTasks() {
  return (
    <nav className="top-tasks">
      <ul>
        <li>
          <a href="/get-info">
            <strong>Get info</strong>
            <span>about the event</span>
          </a>
        </li>
        <li>
          <a href="/history">
            <strong>History</strong>
            <span>of this ski event</span>
          </a>
        </li>
        <li>
          <a href="/game">
            <strong>Play</strong>
            <span>the game</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
