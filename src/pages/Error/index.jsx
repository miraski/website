import { useParams } from 'react-router-dom'

export default function Error() {
  const { errorid } = useParams()

  const descriptions = {
    unknown: {
      title: 'Unknown error',
      desc: 'There was an unknown error.',
    },
    'create-order': {
      title: 'Could not create order',
      desc: 'There was an error when trying to save your data, so could not result to payment.',
    },
    db: {
      title: 'Could not connect to database',
      desc: 'There was an error when trying to connect to the database.',
    },
  }

  const { title, desc } = descriptions[errorid]
    ? descriptions[errorid]
    : descriptions.unknown

  return (
    <article>
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>
        Please contact{' '}
        <a href="mailto:miraski2025@proton.me">miraski2025@proton.me</a> if the
        error keeps showing up.
      </p>
    </article>
  )
}
