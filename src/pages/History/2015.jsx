import History from './'

export default function History2015Page() {
  return <History year={2015} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [
  { id: 'bvaneck', name: 'Bas van Eck' },
  { id: 'bvandermeer', name: 'Bran van der Meer' },
  { id: 'cvanantwerpen', name: 'Catelijne van Antwerpen' },
  { id: 'chille', name: 'Christine Hille' },
  { id: 'crentier', name: 'Cyrille Rentier' },
  { id: 'gbranje', name: 'Geert Branje' },
  { id: 'heiniw', name: 'Heini Withagen' },
  { id: 'iversluis', name: 'Iris Versluis' },
  { id: 'jberkelaar', name: 'Jantine Berkelaar' },
  { id: 'jbruseker', name: 'Jeroen Bruseker' },
  { id: 'jtuitjer', name: 'Jeroen Tuitjer' },
  { id: 'knederkoorn', name: 'Kees Nederkoorn' },
  { id: 'kliefhebber', name: 'Kim Liefhebber' },
  { id: 'lhalff', name: 'Lisette Halff' },
  { id: 'mvanhalm', name: 'Maaike van Halm - Vos' },
  { id: 'mgroeneweg', name: 'Maarten Groeneweg' },
  { id: 'mpanman', name: 'Maarten Panman' },
  { id: 'mterhorst', name: 'Marco ter Horst' },
  { id: 'mheijboer', name: 'Marigo Heijboer' },
  { id: 'mwarnaar', name: 'Merette Warnaar' },
  { id: 'mooms', name: 'Michiel Ooms' },
  { id: 'nyasuda', name: 'Naomi Yasuda' },
  { id: 'nvanderlinde', name: 'Nick van der Linde' },
  { id: 'nevers', name: 'Niels Evers' },
  { id: 'pversteeg', name: 'Paul Versteeg' },
  { id: 'pappelman', name: 'Pieter Appelman' },
  { id: 'phalenbeek', name: 'Pieter Halenbeek' },
  { id: 'rkonings', name: 'Raymond Konings' },
  { id: 'rschmieman', name: 'Remco Schmieman' },
  { id: 'rhenneman', name: 'Robbert Henneman' },
  { id: 'rvanderark', name: 'Roel van der Ark' },
  { id: 'spals', name: 'Sjors Pals' },
  { id: 'swartna', name: 'Sybren Wartna' },
  { id: 'tdevries', name: 'Thijs de Vries' },
  { id: 'wkroes', name: 'Wouter Kroes' },
]

function HistoryText() {
  return (
    <>
      <p className="introduction">
        The stage for the 9th edition of MiraSki was set in Ischgl and
        introduced the Digital natives to the Kuhstall, and the caftmanship of
        building a Jäger Train.
      </p>
      <p>
        The Ischgl trip started with some small beers near the Austrian border.
        An embalmed-animal-filled hotel gave us a good night rest and we were
        ready to attack the slopes of Ischgl in the morning. There was loads of
        fresh snow, but the weather sometimes forced us to spend some extra time
        in the “Schatzi bar”; this was no problem.
      </p>
      <p>
        MiraSki 2015 edition will go down in the history books for having the
        first Mirabeau Jäger Train. This seemingly never-ending line of mini
        Jägermeister bottles was balanced on a row of energy drinks, making one
        big alcoholic dominos. Of course the execution method was totally agile,
        complete with iteration and tests; we’re still evaluating the
        proces&hellip;
      </p>
      <p>
        The people from Wens Chalets catered our Chalet Sylvia and they were
        excellent. At the end of each wonderful day of skiing, the food &amp;
        wine was great and we had some great laughs! After some drinks in the
        chalet we often went clubbing, and the Kuhstall-bar in the city centre
        was our favourite; an honourable mention goes to the ShowArena, with
        it’s Russian casino atmosphere.
      </p>
      <p>
        “Relax., If you can&hellip;” is the tagline of this Austrian ski area
        and this turned out be an accurate description.
      </p>

      <figure className="scrapbook">
        <img src="/img/history/2015/1.jpg" className="scrapbook__image" />
        <img src="/img/history/2015/5.jpg" className="scrapbook__image" />
        <img src="/img/history/2015/3.jpg" className="scrapbook__image" />
        <img src="/img/history/2015/4.jpg" className="scrapbook__image" />
        <img src="/img/history/2015/2.jpg" className="scrapbook__image" />
      </figure>

      <h2 className="alt">These digital heroes weren’t square</h2>
    </>
  )
}
