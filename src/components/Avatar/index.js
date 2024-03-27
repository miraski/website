import './index.css'

export default function Avatar({ name, shortname }) {
  return (
    <figure className="avatar">
      <a href={`/profile/${shortname}`}>
        <img
          src={`/img/avatars/${shortname}.jpg`}
          className="avatar__image"
          width="100"
          height="100"
          alt={`Avatar of ${name}`}
        />
      </a>
    </figure>
  )
}
