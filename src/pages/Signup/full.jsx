import { ref } from 'firebase/database'
import { db } from '../../util/firebase'
import { useObjectVal } from 'react-firebase-hooks/database'

export default function SignUpFullPage() {
  const [limit] = useObjectVal(ref(db, 'attendeesLimit'))

  return (
    <article>
      <h1>We’re full</h1>
      <p className="introduction">OH NO!</p>
      <p>
        We’re full for this year!{' '}
        {limit ? (
          <>
            Only {limit} people can fit in the chalet, so the registration is
            now closed.
          </>
        ) : (
          <>Registration is closed.</>
        )}
      </p>
      <p>
        If you think you really deserve a spot, or you want to be added to the
        waiting list, contact the right people.
      </p>
    </article>
  )
}
