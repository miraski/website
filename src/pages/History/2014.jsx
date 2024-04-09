import History from './'

export default function History2014Page() {
  return <History year={2014} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [
  { id: 'bvaneck', name: 'Bas van Eck' },
  { id: 'bvandermeer', name: 'Bran van der Meer' },
  { id: 'swartna', name: 'Sybren Wartna' },
  { id: 'tdevries', name: 'Thijs de Vries' },
]

function HistoryText() {
  return (
    <>
      <p className="introduction">Kirchberg</p>

      <h2 className="alt">These heroes &lsquo;war dabei&rsquo;</h2>
    </>
  )
}
