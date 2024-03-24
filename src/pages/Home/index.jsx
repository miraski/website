import { ref } from 'firebase/database'
import { db } from '../../util/firebase'
import { useObjectVal } from 'react-firebase-hooks/database'

export default function Home() {
  const g = ref(db, 'pages/home/greeting')
  const [greeting, greetingLoading, greetingError] = useObjectVal(g)

  if (greetingLoading) return 'Loading'
  if (greetingError) return 'Error'

  return (
    <>
      <h1 style={{ textAlign: 'center', font: 'sans-serif' }}>{greeting}</h1>
      <div
        style={{
          width: '320px',
          height: '0',
          margin: '0 auto',
          paddingTop: '100%',
          overflow: 'hidden',
          backgroundImage: 'url("https://static.wintersport.nl/error.gif")',
          backgroundPosition: 'top left',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </>
  )
}
