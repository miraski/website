import History from './'

export default function History2018Page() {
  return <History year={2018} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [
  { id: 'swartna', name: 'Sybren Wartna' },
  { id: 'pversteeg', name: 'Paul Versteeg' },
  { id: 'llandesbergen', name: 'Lisa Landesbergen' },
  { id: 'jbruseker', name: 'Jeroen Bruseker' },
  { id: 'gbranje', name: 'Geert Branje' },
  { id: 'rdijk', name: 'Renske Dijk' },
  { id: 'knederkoorn', name: 'Kees Nederkoorn' },
  { id: 'heiniw', name: 'Heini Withagen' },
  { id: 'evegt', name: 'Emar Vegt' },
  { id: 'pvree', name: 'Pascal Vree' },
  { id: 'pbeets', name: 'Paul Beets' },
  { id: 'npopping', name: 'Nadine Popping' },
  { id: 'crentier', name: 'Cyrille Rentier' },
  { id: 'svanrooijen', name: 'Suzan van Rooijen' },
  { id: 'vrademaker', name: 'Vera Rademaker' },
  { id: 'rvroom', name: 'Remco Vroom' },
  { id: 'rstamato', name: 'Rosa Stamato' },
  { id: 'ymommen', name: 'Yvette Mommen' },
  { id: 'adharap', name: 'Akshay Dharap' },
  { id: 'wbours', name: 'Wouter Bours' },
  { id: 'tdemooi', name: 'Thijs de Mooi' },
  { id: 'tteunissenvanmanen', name: 'Tamara Teunissen van Manen' },
  { id: 'mnieuwenhuizen', name: 'Martijn nieuwenhuizen' },
  { id: 'kliefhebber', name: 'Kim Liefhebber' },
]

function HistoryText() {
  return (
    <>
      <p className="introduction">Sankt Anton</p>

      {/* https://vimeo.com/272267492 */}
      <video controls width="100%">
        <source src="/video/2018.mp4" type="video/mp4" />
        <source src="/video/2018.webm" type="video/webm" />
      </video>

      <h2 className="alt">These heroes &lsquo;war dabei&rsquo;</h2>
    </>
  )
}
