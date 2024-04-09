import History from './'

export default function History2018Page() {
  return <History year={2018} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [{ id: 'swartna', name: 'Sybren Wartna' }]

function HistoryText() {
  return (
    <>
      <p className="introduction">Sankt Anton</p>

      <h2 className="alt">These heroes &lsquo;war dabei&rsquo;</h2>
    </>
  )
}
