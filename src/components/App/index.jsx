import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'

import Nav from '../Nav'
import './normalize.v4.css'
import './webfont.css'
import './typography.css'
import './colors.css'
import './grid.css'
import './breakpoints.css'
import './animations.css'
import './form.css'

export default function App() {
  const isHomepage = useLocation().pathname === '/'
  useEffect(() => {
    if (isHomepage) {
      document.body.classList.add('homepage')
    } else {
      document.body.classList.remove('homepage')
    }
  }, [isHomepage])

  return (
    <>
      {!isHomepage ? <Nav /> : null}
      <Outlet />
    </>
  )
}
