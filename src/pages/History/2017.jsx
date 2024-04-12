import Video from '../../components/Video'
import History from './'

export default function History2017Page() {
  return <History year={2017} HistoryText={HistoryText} attendees={attendees} />
}

const attendees = [
  { id: 'sdijkman', name: 'Simon Dijkman' },
  { id: 'evegt', name: 'Emar Vegt' },
  { id: 'klaumen', name: 'Kevin Laumen' },
  { id: 'mvigelandzoon', name: 'Meredith Vigelandzoon' },
  { id: 'rbuiten', name: 'Rick Buiten' },
  { id: 'nyasuda', name: 'Naomi Yasuda' },
  { id: 'mplatvoet', name: 'Mark Platvoet' },
  { id: 'vrademaker', name: 'Vera Rademaker' },
  { id: 'rhenneman', name: 'Robbert Henneman' },
  { id: 'jvanstaveren', name: 'Jasper van Staveren' },
  { id: 'kliefhebber', name: 'Kim Liefhebber' },
  { id: 'adiepeveen', name: 'Andre Diepeveen' },
  { id: 'bbarten', name: 'Bas Barten' },
  { id: 'crentier', name: 'Cyrille Rentier' },
  { id: 'gbranje', name: 'Geert Branje' },
  { id: 'aoliya', name: 'Armin Oliya' },
  { id: 'svandenakker', name: 'Saskia van den Akker' },
  { id: 'mterhorst', name: 'Marco ter Horst' },
  { id: 'dmansell', name: 'Dennis Mansell' },
  { id: 'tmastik', name: 'Tim Mastik' },
  { id: 'mbonne', name: 'Mark Bonne' },
  { id: 'sveenstra', name: 'Sieger Veenstra' },
  { id: 'rkilarciyan', name: 'Rita Kilarciyan' },
  { id: 'mwarnaar', name: 'Merette Warnaar' },
  { id: 'tkuijper', name: 'Thalita Kuijper' },
  { id: 'dkelly', name: 'Daniel Kelly' },
  { id: 'erik', name: 'Erik Hamoen' },
  { id: 'spals', name: 'Sjors Pals' },
  { id: 'cvanantwerpen', name: 'Catelijne van Antwerpen' },
  { id: 'heiniw', name: 'Heini Withagen' },
  { id: 'jbruseker', name: 'Jeroen Bruseker' },
  { id: 'bvaneck', name: 'Bas van Eck' },
  { id: 'mgroeneweg', name: 'Maarten Groeneweg' },
  { id: 'swartna', name: 'Sybren Wartna' },
  { id: 'bvandermeer', name: 'Bran van der Meer' },
  { id: 'knederkoorn', name: 'Kees Nederkoorn' },
  { id: 'pversteeg', name: 'Paul Versteeg' },
]

function HistoryText() {
  return (
    <>
      <p className="introduction">
        Looking back on the MiraSki 2017 event, we can only conclude that the
        Austrian mountain village Sankt Anton is indeed a Holy place. Our visit
        there left us with memories of fresh snow, Jäger, presidents, Johnny
        Däpp, Willy shots, beer, more Johnny Däpp and great ski runs.
      </p>

      {/* https://vimeo.com/254297314 */}
      <Video file="2017" />

      <p>
        The trip started of on Friday with some road tripping, but simply
        hopping on a plane was also an popular option this year. Eventually
        everyone arrived smoothly at our new home for the next couple of days,
        the lovely “Chalet Alber”. As soon as everybody got hold of a Ski pass
        we immediately attacked the slopes for instant snow appreciation.
        Because of the recently opened “Flexenbahn”-lift, the ski area instantly
        doubled in size and offered us 305 km of skiing fun. Especially
        interesting are all the ski-routes options in this area, which offered
        some extra adventure, without the risk of triggering an avalanche. After
        each day a lot of Ski Track data was uploaded into our own game
        database. All these wintersport skills unlocked new digital abilities in
        the game and stirred up the leaderboard. It was live testing at its
        finest.
      </p>
      <p>
        After the last ski-run of the day we often found ourselves at the
        MooserWirt enjoying some Jäger refreshments and shouting multiple
        iterations of “Johnny Däpp”. The après ski temple was big, loud and
        crowded, but also gave us a lot of laughter. Afterwards, a special dose
        of determination was needed to finish the last 100 meters to the end of
        the piste, which in some cases resulted in an involuntary village
        exploration. Luckily everybody made it home in one piece. The Wens
        Chalet - crew cooked us a nice meal and after a much needed shower, we
        improved our gaming skills in the chalet. The Looping Louie game
        showcased some mad skills and the Presidents card game celebrated some
        appropriate name-calling. The challenges were of course accompanies by
        some small alcoholic beverages which triggered some much needed dancing
        and singing. Some furniture was stress-tested during these activities
        and a certain individual gained a temporary M.I.A.-status due to his
        bar-localisation efforts. In short; all ended well and we had a good
        laugh.
      </p>
      <p>
        The weather during our trip was pretty OK. We did experience some heavy
        fog, but that proved to be an excellent opportunity to order a
        plate-sized schnitzel somewhere on a remote mountain top. By the time we
        finished devouring our lunch, the sun had already fixed this
        cloud-impediment and created some beautiful kodak moments. While most
        MiraSki team members were rutching down the slopes, others took on the
        challenge of steering an Audi Quattro round some slippery corners and
        over a number of big obstacles. For some this might feel like riding an
        very expensive sled, but feeling the power and control in these
        circumstances made it a very cool experience.
      </p>
      <p>
        No MiraSki is complete without a Jäger train; that’s why a staircase
        performance in the chalet was orchestrated to facilitate this user need.
        The finesse of dominos mixed with a german digestive plunging into a
        fluid sugar drug, is always a succes! Right after this beverage-ritual,
        the party continued at the “Postkeller” a lively club in the city
        centre. There was live music and singing and even though snowboard boots
        were not accepted as suitable party attire, some serious dance moves
        were put into effect.
      </p>
      <p>
        The 2017 MiraSki event was a big success and to celebrate this, every
        team member received a MiraSki 2017-flask. Cheers to MiraSki 2017 and
        we’ll see you in 2018!
      </p>
      <figure className="scrapbook">
        <img src="/img/history/2017/3.jpg" className="scrapbook__image" />
        <img src="/img/history/2017/7.jpg" className="scrapbook__image" />
        <img src="/img/history/2017/4.jpg" className="scrapbook__image" />
        <img src="/img/history/2017/1.jpg" className="scrapbook__image" />
        <img src="/img/history/2017/8.jpg" className="scrapbook__image" />
        {/* <img src="/img/history/2017/5.jpg" className="scrapbook__image" /> */}
        <img src="/img/history/2017/6.jpg" className="scrapbook__image" />
        <img src="/img/history/2017/2.jpg" />
      </figure>
      <h2>They enjoyed “Johnny Däpp”</h2>
    </>
  )
}
