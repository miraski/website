import Video from '../../components/Video'
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
      <p className="introduction">The MiraSki crew is always fierce and dedicated and will not be stopped by no amount of snow; With this mindset, and all the heavy snowfall of the weeks before, we prepared ourselves with snowgoggles and snowchains to defy the harsh weather… It turned out that we only needed our sunglasses because the snow- and weather conditions were simply beautiful. We picked the perfect time to do some skiing and snowboarding. Miraski 2018 hat angefangen!</p>

      {/* https://vimeo.com/272267492 */}
      <Video file="2018" />

      <p>Obviously the plan was to maximize our trip on these sunny days and most of us invested in a night near the Austrian border to make sure that “Der abfarht” could commence early that following morning. The chalet we rented was lying at the foot of the mountain, quite near the ski slopes and was ready for us when we arrived. The staff was very nice and the rooms, the sauna and the food was well taken care of.</p>

      <p>Some novice “rutschers” took some lessons and the intense training from both the Skischule and our own coaches payed off and everybody was sliding successfully down the slopes before they could say “Jägermeister”. Speaking of which.. a special Jäger-train variation was constructed this year, and the Minimal Drinkable Product has been thoroughly tested; Let’s just say that the Jäger Increment was a success!</p>

      <figure className="scrapbook">
        <img src="/img/history/2018/1.jpg" className="scrapbook__image" />
        <img src="/img/history/2018/2.jpg" className="scrapbook__image" />
        <img src="/img/history/2018/3.jpg" className="scrapbook__image" />
        <img src="/img/history/2018/4.jpg" className="scrapbook__image" />
        <img src="/img/history/2018/5.jpg" className="scrapbook__image" />
      </figure>

      <p>The skill level on certain games were interesting to say the least. Some people proved that they do not posses the ability to throw a Beerpong “curveball”, while others outperformed themselves in Looping Louie without showing little sign of their achievements the following morning; impressive! Music wise, the good old 80/90 hits were pretty popular. The song “Rosie Polka” was the leading the Spotify playlist this years but the echo’s of last years “Johnny Däpp” still proved to be very much alive.</p>

      <p>Chief Champagne Officer provided a very much appreciated boost of spirit to prepare us for the slope challenges of the next day. A number of adventurous travellers set out to the farthest corner of the skimap; it remains unknown if the party actually made it to Warth-village, but the ski tracks data sure was impressive.</p>

      <p>An effort had been made to organise a “bonte avond” but unfortunately the nice weather directed all of our attention to the slopes and there was too little time to achieve the quality we would to to portrait in a party-act. Rumor has it that preparations for next year have already started so this might be an event you do not want to miss…</p>

      <h2 className="alt">These heroes &lsquo;war dabei&rsquo;</h2>
    </>
  )
}
