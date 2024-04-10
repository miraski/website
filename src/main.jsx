import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './util/hooks/ScrollToTop'

import App from './components/App'
import Home from './pages/Home'
import GetInfo from './pages/GetInfo'
import GetInfoApresSki from './pages/GetInfo/apres-ski'
import GetInfoChalet from './pages/GetInfo/chalet'
import GetInfoLocation from './pages/GetInfo/location'
import GetInfoPartyTime from './pages/GetInfo/partytime'
import History2019 from './pages/History/2019'
import History2018 from './pages/History/2018'
import History2017 from './pages/History/2017'
import History2016 from './pages/History/2016'
import History2015 from './pages/History/2015'
import History2014 from './pages/History/2014'
import History2013 from './pages/History/2013'
import History2012 from './pages/History/2012'
import Game from './pages/Game'
import GameLeaderboard from './pages/Game/leaderboard'
import Signup from './pages/Signup'
import SignupFull from './pages/Signup/full'
import SignupNoCode from './pages/Signup/no-code'
import Pay from './pages/Pay'
import Error from './pages/Error'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="get-info" element={<GetInfo />} />
          <Route path="get-info/apres-ski" element={<GetInfoApresSki />} />
          <Route path="get-info/chalet" element={<GetInfoChalet />} />
          <Route path="get-info/location" element={<GetInfoLocation />} />
          <Route path="get-info/partytime" element={<GetInfoPartyTime />} />
          <Route path="history/2019" element={<History2019 />} />
          <Route path="history/2018" element={<History2018 />} />
          <Route path="history/2017" element={<History2017 />} />
          <Route path="history/2016" element={<History2016 />} />
          <Route path="history/2015" element={<History2015 />} />
          <Route path="history/2014" element={<History2014 />} />
          <Route path="history/2013" element={<History2013 />} />
          <Route path="history/2012" element={<History2012 />} />
          <Route path="game" element={<Game />} />
          <Route path="game/leaderboard" element={<GameLeaderboard />} />
          <Route path="sign-up" element={<SignupNoCode />} />
          <Route path="sign-up/full" element={<SignupFull />} />
          <Route path="sign-up/:code" element={<Signup />} />
          <Route path="pay/:orderid" element={<Pay />} />
          <Route path="error/:errorid" element={<Error />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
