import History from './'

export default function History2019Page() {
  return <History year={2019} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [{ id: 'swartna', name: 'Sybren Wartna' }]

function HistoryText() {
  return (
    <>
      <p className="introduction">Kitzbühel</p>

      <h2 className="alt">These heroes &lsquo;war dabei&rsquo;</h2>
    </>
  )
}
