import { Link } from 'react-router-dom'
import { ref } from 'firebase/database'
import { db } from '../../util/firebase'
import { useListVals } from 'react-firebase-hooks/database'

export default function Home() {
  const g = ref(db, 'attendees')
  const [attendees, attendeesLoading, attendeesError] = useListVals(g)

  if (attendeesLoading) return 'Loading'
  if (attendeesError) return 'Error'

  return (
    <>
      <h1>MiraSki 2025</h1>
      <p>
        <Link to="/register">Register</Link>
      </p>

      {!attendeesLoading && !attendeesError && attendees && (
        <>
          <h2>Attendees</h2>
          <ol>
            {attendees.map((attendee) => (
              <li key={attendee.id}>{attendee.name}</li>
            ))}
          </ol>
        </>
      )}
    </>
  )
}
