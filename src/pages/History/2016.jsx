import History from './'

export default function History2016Page() {
  return <History year={2016} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [
  { id: 'bvandermeer', name: 'Bran van der Meer' },
  { id: 'swartna', name: 'Sybren Wartna' },
  { id: 'pvree', name: 'Pascal Vree' },
  { id: 'knederkoorn', name: 'Kees Nederkoorn' },
  { id: 'mgroeneweg', name: 'Maarten Groeneweg' },
  { id: 'kliefhebber', name: 'Kim Liefhebber' },
  { id: 'pversteeg', name: 'Paul Versteeg' },
  { id: 'lhalff', name: 'Lisette Halff' },
  { id: 'bvaneck', name: 'Bas van Eck' },
  { id: 'jbruseker', name: 'Jeroen Bruseker' },
  { id: 'spals', name: 'Sjors Pals' },
  { id: 'bbarten', name: 'Bas Barten' },
  { id: 'tdevries', name: 'Thijs de Vries' },
  { id: 'sveenstra', name: 'Sieger Veenstra' },
  { id: 'dtimmers', name: 'Dennis Timmers' },
  { id: 'jtuitjer', name: 'Jeroen Tuitjer' },
  { id: 'mheijboer', name: 'Marigo Heijboer' },
  { id: 'cwiltink', name: 'Céryl Wiltink' },
  { id: 'heiniw', name: 'Heini Withagen' },
  { id: 'apoppe', name: 'Aukje Poppe' },
  { id: 'svandenakker', name: 'Suzan van Rooijen' },
  { id: 'phalenbeek', name: 'Pieter Halenbeek' },
  { id: 'mplatvoet', name: 'Mark Platvoet' },
  { id: 'rhenneman', name: 'Robbert Henneman' },
  { id: 'crentier', name: 'Cyrille Rentier' },
  { id: 'gbranje', name: 'Geert Branje' },
  { id: 'wkroes', name: 'Wouter Kroes' },
  { id: 'nvanderlinde', name: 'Nick van der Linde' },
  { id: 'mooms', name: 'Michiel Ooms' },
  { id: 'llaan', name: 'Lotte-Sara Laan' },
  { id: 'mwarnaar', name: 'Merette Warnaar' },
  { id: 'lvanwieringen', name: 'Lieven van Wieringen' },
  { id: 'dlangdon', name: 'Dickon Langdon' },
  { id: 'dvdveen', name: 'Desirée van der Veen' },
]

function HistoryText() {
  return (
    <>
      <p className="introduction">Fieberbrunn</p>

      <div className="embed-container">
        <iframe
          src="http://www.youtube.com/embed/arMfjouGDhY?rel=0"
          frameBorder="0"
          allowfullscreen
        ></iframe>
      </div>
      <p className="introduction">“Hoch die Hande”</p>

      <p>
        In 2016 the MiraSki event landed in Fieberbrunn, part of the Saalbach
        skiing area in Austria. The “Sonnefeld” chalet suited all of the
        Mirabeau’ers perfectly and there was plenty room for serious Looping
        Louie challenges and some occasional table dancing. The pistes were
        great but due to extensive snowing and some closed pistes, the
        Enzianhütte, our favourite meet-up place, was pretty crowded early in
        the afternoon with digital natives. Next to the Après-ski classics we
        all sang this years’ favorite party song “Hoch die Hande”.
      </p>
      <p>Fieberbrunn, you were real.</p>

      <figure className="scrapbook">
        <img src="/img/history/2016/1.jpg" className="scrapbook__image" />
        <img src="/img/history/2016/2.jpg" className="scrapbook__image" />
        <img src="/img/history/2016/3.jpg" className="scrapbook__image" />
        <img src="/img/history/2016/4.jpg" className="scrapbook__image" />
        <img src="/img/history/2016/5.jpg" className="scrapbook__image" />
      </figure>

      <h2>These brave souls where there</h2>
    </>
  )
}
