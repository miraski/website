import { Link } from 'react-router-dom'
import './index.css'

export default function HistoryNav({ active }) {
  const years = [/*2019,*/ 2018, 2017, 2016, 2015, /*2014,*/ 2013, 2012]

  return (
    <nav className="history-nav-container">
      <ul className="history-nav">
        {years.map((year) => (
          <li key={year}>
            <Link
              to={`/history/${year}`}
              className="history-nav__link"
              aria-selected={active === year}
            >
              {year}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
