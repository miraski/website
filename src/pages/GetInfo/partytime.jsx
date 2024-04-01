import '../../components/Scrapbook/index.css'

export default function GetInfoPartyTimePage() {
  return (
    <article>
      <h1>Partytime</h1>
      <p className="introduction">
        This MiraSki edition, chances are you’ll find yourself dancing on the
        table with a Jägerbomb in your hand; St. Anton has that effect on
        people. ‘Ski hard, play hard’; these are the party-places you should be
        checking:
      </p>

      <h2>Après-ski</h2>
      <div className="extra-info">
        <section className="extra-info__item">
          <img
            src="/img/info/2017/nightlife/mooserwirt.jpg"
            alt="Impression of Mooserwirt"
          />
          <h3>Mooserwirt</h3>
          <p>
            <a href="http://www.mooserwirt.at" rel="noopener">
              The Mooserwirt
            </a>{' '}
            is the most famous après-ski bar in St. Anton. The self-proclaimed
            “world’s baddest” après bar, is the essence of Austrian party.
            Table-top dancing from 3pm onwards, fuelled by vast quantities of
            beer and Jägermeister and cheesy music, provided by the legendary
            64-year-old DJ Gerhard.
          </p>
        </section>

        <section className="extra-info__item">
          <img
            src="/img/info/2017/nightlife/krazy-kanguruh.jpg"
            alt="Impression of Krazy Kanguruh"
          />
          <h3>Krazy Kanguruh</h3>
          <p>
            Since 1965 there has been a party at{' '}
            <a href="http://www.krazykanguruh.com" rel="noopener">
              the Krazy Kanguruh
            </a>
            . They know how to do it properly. By the way – the bar is owned by
            a world champion skier.
          </p>
        </section>
      </div>

      <h2>Nightlife</h2>
      <div className="extra-info">
        <section className="extra-info__item">
          <img
            src="/img/info/2017/nightlife/horny-bull.jpg"
            alt="Impression of Horny Bull"
          />
          <h3>Horny Bull</h3>
          <p>
            Horny Bull is open until the early hours and probably works best as
            a niteclub when they offer Deep &amp; Vocal House music with
            international DJ’s from 11pm – 3am
          </p>
        </section>

        <section className="extra-info__item">
          <img
            src="/img/info/2017/nightlife/piccadilly.jpg"
            alt="Impression of Piccadilly / Postkeller"
          />
          <h3>Piccadilly / Postkeller</h3>
          <p>
            The legendary{' '}
            <a
              href="http://hotel-post.co.at/hotel-post/postkeller-piccadilly.html"
              rel="noopener"
            >
              Piccadilly bar
            </a>{' '}
            with the best live music of St. Anton! Celebrate as if there were no
            tomorrow: You don’t know what partying is until you have been here.
            Let the fun begin!
          </p>
        </section>

        <section className="extra-info__item">
          <img
            src="/img/info/2017/nightlife/hells-club.jpg"
            alt="Impression of Hells Club"
          />
          <h3>Hells Club</h3>
          <p>
            A new favourite in town is the{' '}
            <a href="http://www.hellsclub.at" rel="noopener">
              Hells Club
            </a>{' '}
            (open from 8pm Wednesday to Sunday), located in the Hotel Tyrol, a
            late-night bar and disco with quirky interiors.
          </p>
        </section>

        <section className="extra-info__item">
          <img
            src="/img/info/2017/nightlife/murrmel.jpg"
            alt="Impression of Murrmel"
          />
          <h3>Murrmel</h3>
          <p>
            <a href="http://www.murrmel.at" rel="noopener">
              The Murrmel bar
            </a>{' '}
            is a very clean and compact place which really gets a good vibe and
            atmosphere. The guy playing rocksongs, Gunar, is a great
            entertainer!
          </p>
        </section>
      </div>
    </article>
  )
}
