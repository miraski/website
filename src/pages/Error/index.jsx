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
  }

  const { title, desc } = descriptions[errorid]
    ? descriptions[errorid]
    : descriptions.unknown

  return (
    <>
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>
        Please contact{' '}
        <a href="mailto:miraski2025@proton.me">miraski2025@proton.me</a> if the
        error keeps showing up.
      </p>
    </>
  )
}
