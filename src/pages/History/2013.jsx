import History from './'

export default function History2013Page() {
  return <History year={2013} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [
  { id: 'bvaneck', name: 'Bas van Eck' },
  { id: 'bvandermeer', name: 'Bran van der Meer' },
  { id: 'swartna', name: 'Sybren Wartna' },
  { id: 'tdevries', name: 'Thijs de Vries' },
  { id: 'pversteeg', name: 'Paul Versteeg' },
  { id: 'null', name: 'Jeroen Dill' },
  { id: 'null', name: 'Niek Bosch' },
  { id: 'hwithagen', name: 'Heini Withagen' },
  { id: 'mooms', name: 'Michiel Ooms' },
  { id: 'null', name: 'Ragner Teitsma' },
  { id: 'null', name: 'Floris Ketel' },
  { id: 'crentier', name: 'Cyrille Rentier' },
  { id: 'jbruseker', name: 'Jeroen Bruseker' },
  { id: 'nvanderlinde', name: 'Nick van der Linde' },
  { id: 'gbranje', name: 'Geert Branje' },
  { id: 'tdemooi', name: 'Thijs de Mooi' },
  { id: 'btervoort', name: 'Babiche Tervoort' },
  { id: 'chille', name: 'Christine Hille' },
]

function HistoryText() {
  return (
    <>
      <p className="introduction">Sölden</p>

      <div className="embed-container">
        <iframe
          src="http://www.youtube.com/embed/1woBNg8jnJw?rel=0"
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </div>

      <figure className="scrapbook">
        <img src="/img/history/2013/1.jpg" className="scrapbook__image" />
      </figure>

      <h2 className="alt">These heroes &lsquo;war dabei&rsquo;</h2>
    </>
  )
}
