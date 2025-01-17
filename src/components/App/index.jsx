import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { ref } from 'firebase/database'
import { db } from '../../util/firebase'
import { useObjectVal } from 'react-firebase-hooks/database'

import AppStatusContext from '../../context/AppStatusContext'
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

  const [appStatusData, appStatusLoading, appStatusError] = useObjectVal(
    ref(db, 'appStatus'),
  )
  const appStatus = {
    getInfoPageOnline: false,
  }
  if (!appStatusLoading && !appStatusError) {
    appStatus.getInfoPageOnline = appStatusData.getInfoPageOnline
  }
  console.log({ appStatusData, appStatusLoading, appStatusError, appStatus })

  return (
    <AppStatusContext.Provider value={appStatus}>
      {!isHomepage ? <Nav /> : null}
      <Outlet />
    </AppStatusContext.Provider>
  )
}
