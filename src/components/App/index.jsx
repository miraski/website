// import Header from '../Header'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div
      style={{ maxWidth: '320px', margin: '0 auto', fontFamily: 'sans-serif' }}
    >
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}
