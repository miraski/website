import './css/common/normalize.v4.css'
import './css/common/webfont.css'
import './css/common/typography.css'
import './css/common/colors.css'
import './css/common/grid.css'
import './css/common/breakpoints.css'
import './css/common/animations.css'
import './css/common/form.css'

export const metadata = {
  title: 'MiraSki',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{faviconHtml()}</head>
      {children}
    </html>
  )
}

function faviconHtml() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/img/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/img/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-config"
        content="/img/favicon/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}
