import './index.css'

export default function Avatar({ name, shortname }) {
  const img = shortname === 'null' ? 'null.svg' : `${shortname}.jpg`
  return (
    <figure className="avatar">
      <a href={`/#/profile/${shortname}`}>
        <img
          src={`/img/avatars/${img}`}
          className="avatar__image"
          width="100"
          height="100"
          alt={`Avatar of ${name}`}
        />
      </a>
    </figure>
  )
}
