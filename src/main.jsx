import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import App from './components/App'
import Home from './pages/Home'
import Register from './pages/Register'
import Pay from './pages/Pay'
import Error from './pages/Error'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="pay/:orderid" element={<Pay />} />
          <Route path="error/:errorid" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
