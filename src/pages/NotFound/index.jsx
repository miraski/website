'use client'

export default function NotFoundPage() {
  document.body.classList.remove('homepage')

  return (
    <article>
      <h1>404</h1>
      <h2>Noes!</h2>
      <p>
        Where is the page?! It is not here.
        <br />
        Bran has hidden it from everybody!
      </p>
      <p>Except for you.</p>
      <p>Just kidding. Also from you.</p>
      <p>
        You can not see it.
        <br />
        But everybody else can!
      </p>
      <p>Everybody can see the 404 error of the MiraSki website!</p>
      <p>
        <a href="/">Go home</a>.
      </p>
    </article>
  )
}
