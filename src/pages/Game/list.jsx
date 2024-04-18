import { Link } from 'react-router-dom'

export default function GetReadyPage() {
  return (
    <article>
      <h1>Games</h1>
      <p className="introduction">
        Carve your way down the digital slopes or through the digital German
        Autobahn to Austria.
      </p>
      <h2 style={{ marginBottom: '0.5em' }}>MiraSki Game</h2>
      <p>
        <Link className="btn" to="/game">
          Play the MiraSki game
        </Link>
      </p>
      <img src="/img/miraski-game.gif" />
      <h2 style={{ marginBottom: '0.5em' }}>Kennzeichen-Raten</h2>
      <p>
        <a
          href="https://branneman.github.io/kennzeichen-raten/"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Play Kennzeichen-Raten
        </a>
      </p>
      <img
        src="/img/kennzeichen-raten-1.jpg"
        alt="Kennzeichen-Raten game screenshot"
      />{' '}
      <img
        src="/img/kennzeichen-raten-2.jpg"
        alt="Kennzeichen-Raten game screenshot"
      />
    </article>
  )
}
