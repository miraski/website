'use client'

import SplashScreen from '@/components/SplashScreen'
import TopTasks from '@/components/TopTasks'

export default function HomePage() {
  return (
    <body className="homepage">
      <div className="wrapper">
        <SplashScreen />
        <TopTasks />
      </div>
    </body>
  )
}
