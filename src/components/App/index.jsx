// import Header from '../Header'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="outer">
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}
