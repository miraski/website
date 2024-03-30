import '@/components/Common/normalize.v4.css'
import '@/components/Common/webfont.css'
import '@/components/Common/typography.css'
import '@/components/Common/colors.css'
import '@/components/Common/grid.css'
import '@/components/Common/breakpoints.css'
import '@/components/Common/animations.css'
import '@/components/Common/form.css'

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
