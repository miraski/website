import History from './'

export default function History2014Page() {
  return <History year={2014} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [
  { id: 'bvaneck', name: 'Bas van Eck' },
  { id: 'swartna', name: 'Sybren Wartna' },
  { id: 'crentier', name: 'Cyrille Rentier' },
  { id: 'tdevries', name: 'Thijs de Vries' },
  { id: 'null', name: 'Niek Bosch' },
  { id: 'null', name: 'Yasmine Vo' },
  { id: 'pversteeg', name: 'Paul Versteeg' },
  { id: 'bvandermeer', name: 'Bran van der Meer' },
]

function HistoryText() {
  return (
    <>
      <p className="introduction">Kirchberg</p>
      <figure className="scrapbook">
        <img src="/img/history/2014/1.jpg" className="scrapbook__image" />
        <img src="/img/history/2014/2.jpg" className="scrapbook__image" />
        <img src="/img/history/2014/3.jpg" className="scrapbook__image" />
      </figure>

      <h2 className="alt">These heroes &lsquo;war dabei&rsquo;</h2>
    </>
  )
}
