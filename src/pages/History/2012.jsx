import Video from '../../components/Video'
import History from './'

export default function History2012Page() {
  return <History year={2012} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [
  { id: 'bvaneck', name: 'Bas van Eck' },
  { id: 'bvandermeer', name: 'Bran van der Meer' },
  { id: 'swartna', name: 'Sybren Wartna' },
  { id: 'tdevries', name: 'Thijs de Vries' },
  { id: 'kliefhebber', name: 'Kim Liefhebber' },
  { id: 'crentier', name: 'Cyrille Rentier' },
  { id: 'null', name: 'Yasmine Vo' },
  { id: 'null', name: 'Arian Tsai' },
  { id: 'null', name: 'Merel Backers' },
  { id: 'mooms', name: 'Michel Ooms' },
  { id: 'null', name: 'Niek Bosch' },
  { id: 'tdemooi', name: 'Thijs de Mooi' },
  { id: 'rdijk', name: 'Renske Dijk' },
  { id: 'null', name: 'Ragner Teitsma' },
  { id: 'btervoort', name: 'Babiche Tervoort' },
  { id: 'gbranje', name: 'Geert Branje' },
  { id: 'nvanderlinde', name: 'Nick van der Linde' },
  { id: 'chille', name: 'Christine Hille' },
  { id: 'bbarten', name: 'Bas Barten' },
  { id: 'null', name: 'Mara Kok' },
  { id: 'spals', name: 'Sjors Pals' },
]

function HistoryText() {
  return (
    <>
      <p className="introduction">Finkenberg</p>

      {/* https://www.youtube.com/watch?v=XaFJIaeixZA */}
      <Video file="2012" />

      <h2 className="alt">These heroes &lsquo;war dabei&rsquo;</h2>
    </>
  )
}
