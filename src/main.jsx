import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import App from './components/App'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Pay from './pages/Pay'
import Error from './pages/Error'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="sign-up/:code" element={<Signup />} />
          <Route path="pay/:orderid" element={<Pay />} />
          <Route path="error/:errorid" element={<Error />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
