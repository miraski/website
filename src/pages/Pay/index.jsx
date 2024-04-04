export default function Pay() {
  return (
    <article>
      <h1>Payment</h1>
      <p className="introduction">
        Pay <em>&euro;530,-</em> via this link
      </p>
      <p>
        <a
          href="https://betaalverzoek.rabobank.nl/betaalverzoek/?id=q-D83_C7TfOr0CWGwbgtLw"
          target="_blank"
          rel="noreferrer"
        >
          https://betaalverzoek.rabobank.nl/betaalverzoek/?id=q-D83_C7TfOr0CWGwbgtLw
        </a>
      </p>
      <p><img src="/img/pay-qr.png" alt="QR Code for €530 payment request" /></p>
    </article>
  )
}
