'use client'

import styles from './page.module.css'

import { ref } from 'firebase/database'
import { db } from './util/firebase'
import { useListVals } from 'react-firebase-hooks/database'

export default function Home() {
  const g = ref(db, 'attendees')
  const [attendees, attendeesLoading, attendeesError] = useListVals(g)

  if (attendeesLoading) return 'Loading'
  if (attendeesError) return 'Error'

  return (
    <main className={styles.main}>
      <h1>MiraSki 2025</h1>
      <p>
        <a href="/register">Register</a>
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
    </main>
  )
}
