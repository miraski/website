import { Link } from 'react-router-dom'
import './index.css'

export default function Avatar({ name, shortname }) {
  const img = shortname === 'null' ? 'null.svg' : `${shortname}.jpg`
  return (
    <figure className="avatar">
      <Link to={`/profile/${shortname}`}>
        <img
          src={`/img/avatars/${img}`}
          className="avatar__image"
          width="100"
          height="100"
          alt={`Avatar of ${name}`}
        />
      </Link>
    </figure>
  )
}
