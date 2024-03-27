'use client'

import '@/components/Scrapbook/index.css'
import Nav from '@/components/Nav'

export default function GetInfoLocationPage() {
  return (
    <body>
      <Nav />
      <div className="wrapper">
        <article>
          <h1>Sankt Anton</h1>
          <p className="introduction">
            More than 340 kilometres of virgin powder is available at the
            superbly prepared slopes at Sankt Anton ski area.
          </p>
          <p>
            Nasserein ski lift, next to chalet Alber, puts you in the middle of
            the Ski Arlberg ski area, which can compete with the best skiing in
            Europe. They don’t call it the “Cradle of Alpine skiing” for
            nothing. It’s a snowy paradise of the highest calibre and at the
            same time a very cool place to enjoy some great{' '}
            <a href="/get-info/apres-ski">après-ski</a> parties!
          </p>
          <p>
            In total, the ski area offers 340 kilometres of groomed slopes and
            an additionally approximately 180 kilometres of off-piste
            opportunities and is varied and challenging for advanced skiers but
            also very suitable for beginners. The likelihood of snow is very
            high in this area, so valley runs are possible until late in the
            season.
          </p>
          <ul>
            <li>Highest point: 2811 meter</li>
            <li>Lowest point: 1304 meter</li>
          </ul>

          <section>
            <h2>Chalet alber</h2>
            <p>
              This year we’ll stay at the catered chalet “Alber” in Sankt Anton.
              This is situated on a beautiful location just off the piste
              (number 24) leading to the Nasserein skilift. You can ski back to
              the chalet, something that is rare for Sankt Anton accommodations.
              The ski lift is only 600 meters away, and at the end of the day
              it’s only a 250m walk from the Gampen slopes. Several hiking
              trails start directly on the doorstep. A toboggan run can be
              accessed in the immediate vicinity
            </p>
            <p>
              <a href="/get-info/chalet" className="btn btn--secondary">
                Tell me err’thing
              </a>
            </p>
          </section>

          <section>
            <h2>Après-ski &amp; nightlife</h2>
            <p>
              St Anton is widely recognised as the après-ski capital of the Alps
              and attracts flocks of young skiers who embrace the nightlife
              wholeheartedly.
            </p>
            <p>
              St Anton is almost as famous for its après as it is for its
              skiing, so be prepared to party when you come here. The nightlife
              start from 23.00.
            </p>
            <p>
              <a href="/get-info/partytime" className="btn btn--secondary">
                I need examples!
              </a>
            </p>
          </section>
        </article>
      </div>
    </body>
  )
}
