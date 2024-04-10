import { Link } from 'react-router-dom'
import { ref } from 'firebase/database'
import { db } from '../../util/firebase'
import { useListVals } from 'react-firebase-hooks/database'

import './leaderboard.css'
import { filterSortLeaderboard } from './filtersort.js'

export default function GameLeaderboardPage() {
  const g = ref(db, 'leaderboard')
  const [leaderboard, leaderboardLoading, leaderboardError] = useListVals(g)

  return (
    <article>
      <h1>Scores</h1>
      <p>
        Who’s ruling their offline winter-skills and is making it count in the
        digital world? Check out who’s on top of the MiraSki Game Leaderboard.
      </p>
      <p>
        Beat the others, <Link to="/game">play the game</Link>.
      </p>

      <div className="leaderboard-container">
        {!leaderboardLoading && !leaderboardError && (
          <ol className="leaderboard leaderboard--part1">
            {filterSortLeaderboard(leaderboard).map((record, i) => (
              <li key={i} className="leaderboard__record">
                <mark className="leaderboard__name">{record.name}</mark>
                <small className="leaderboard__score">{record.score}</small>
              </li>
            ))}
          </ol>
        )}
      </div>
    </article>
  )
}
