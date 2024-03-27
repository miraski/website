export default function HistoryNav({ active }) {
  return (
    <nav className="history-nav-container">
      <ul className="history-nav">
        <li>
          <a
            href="/history"
            className="history-nav__link"
            aria-selected={active === 2017}
          >
            2017
          </a>
        </li>
        <li>
          <a
            href="/history/2016"
            className="history-nav__link"
            aria-selected={active === 2016}
          >
            2016
          </a>
        </li>
        <li>
          <a
            href="/history/2015"
            className="history-nav__link"
            aria-selected={active === 2015}
          >
            2015
          </a>
        </li>
      </ul>
    </nav>
  )
}
