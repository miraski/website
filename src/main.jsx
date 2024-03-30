import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import App from './components/App'
import Home from './pages/Home'
import GetInfo from './pages/GetInfo'
import GetInfoApresSki from './pages/GetInfo/apres-ski'
import GetInfoChalet from './pages/GetInfo/chalet'
import GetInfoLocation from './pages/GetInfo/location'
import GetInfoPartyTime from './pages/GetInfo/partytime'
import History2017 from './pages/History/2017'
import History2016 from './pages/History/2016'
import History2015 from './pages/History/2015'
import Signup from './pages/Signup'
import SignupFull from './pages/Signup/full'
import SignupNoCode from './pages/Signup/no-code'
import Pay from './pages/Pay'
import Error from './pages/Error'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="get-info" element={<GetInfo />} />
          <Route path="get-info/apres-ski" element={<GetInfoApresSki />} />
          <Route path="get-info/chalet" element={<GetInfoChalet />} />
          <Route path="get-info/location" element={<GetInfoLocation />} />
          <Route path="get-info/partytime" element={<GetInfoPartyTime />} />
          <Route path="history/2017" element={<History2017 />} />
          <Route path="history/2016" element={<History2016 />} />
          <Route path="history/2015" element={<History2015 />} />
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
