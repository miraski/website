import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Pay() {
  const [paypalHasBeenActive, setPaypalHasBeenActive] = useState(false)
  const [paypalOverlayIsActive, setPaypalOverlayIsActive] = useState(false)

  // Render paypal buttons on pageload
  useEffect(() => {
    window.paypal
      .HostedButtons({ hostedButtonId: '5TFMLHLVL98T4' })
      .render('#paypal-container-5TFMLHLVL98T4')
  }, [])

  useEffect(() => {
    const intervalID = setInterval(() => {
      const _paypalOverlayIsActive = document.querySelector(
        'body > [id^=paypal-overlay]',
      )
      if (_paypalOverlayIsActive) {
        setPaypalOverlayIsActive(true)
        setPaypalHasBeenActive(true)
      } else {
        setPaypalOverlayIsActive(false)
      }
    }, 100)
    return () => clearInterval(intervalID)
  }, [])

  const onRefresh = () => window.location.reload()

  if (paypalHasBeenActive && !paypalOverlayIsActive) {
    return (
      <article>
        <h1>Payment</h1>
        <p>It looks like the PayPal popup has closed.</p>
        <p>
          You can safely to the <Link to="/">homepage</Link> when payment has
          been completed.
        </p>
        <p>
          If payment was not completed successfully,{' '}
          <a href={'/#' + useLocation().pathname} onClick={onRefresh}>
            retry
          </a>
          .
        </p>
        <p>
          If you are unable to pay with PayPal, please contact{' '}
          <a href="mailto:miraski2025@proton.me">miraski2025@proton.me</a>
        </p>
      </article>
    )
  }

  return (
    <article>
      <h1>Payment</h1>
      <div id="paypal-container-5TFMLHLVL98T4">Loading</div>
    </article>
  )
}
